module.exports = function (babel) {
  return new babel.Plugin('autoassign', {
    visitor: {
      ClassDeclaration: function (node, parent) {
        new AutoAssign(babel.types).run(node);
      }
    }
  });
};

function AutoAssign(types) {
  this.types = types;
}

AutoAssign.prototype.run = function (klass) {
  var decorators = this.findAutoAssignDecorators(klass);
  if (decorators.length > 0) {
    var ctor = this.findConstructor(klass);
    var args = this.getArguments(ctor);
    this.prependAssignments(ctor, args);
    this.deleteDecorators(klass, decorators);
  }
};

AutoAssign.prototype.findAutoAssignDecorators = function (klass) {
  return (klass.decorators || []).filter(function (decorator) {
    return decorator.expression.name === 'autoassign';
  });
};

AutoAssign.prototype.deleteDecorators = function (klass, decorators) {
  decorators.forEach(function (decorator) {
    var index = klass.decorators.indexOf(decorator);
    if (index >= 0) {
      klass.decorators.splice(index, 1);
    }
  });
}

AutoAssign.prototype.findConstructor = function (klass) {
  return klass.body.body.filter(function (body) {
    return body.kind === 'constructor';
  })[0];
};

AutoAssign.prototype.getArguments = function (ctor) {
  return ctor.value.params;
};

AutoAssign.prototype.prependAssignments = function (ctor, args) {
  var body = ctor.value.body.body;
  args.slice().reverse().forEach(function (arg) {
    var assignment = this.buildAssignment(arg);
    body.unshift(assignment);
  }, this);
};

AutoAssign.prototype.buildAssignment = function (arg) {
  var self = this.types.identifier('this');
  var prop = this.types.memberExpression(self, arg);
  var assignment = this.types.assignmentExpression('=', prop, arg);
  return this.types.expressionStatement(assignment);
};
