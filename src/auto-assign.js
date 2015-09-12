export default class AutoAssign {
  constructor(types) {
    this.types = types;
  }

  run(klass) {
    const decorators = this.findAutoAssignDecorators(klass);
    if (decorators.length > 0) {
      const ctor = this.findConstructor(klass);
      const args = this.getArguments(ctor);
      this.prependAssignments(ctor, args);
      this.deleteDecorators(klass, decorators);
    }
  }

  findAutoAssignDecorators(klass) {
    return (klass.decorators || []).filter((decorator) => {
      return decorator.expression.name === 'autoAssign';
    });
  }

  deleteDecorators(klass, decorators) {
    decorators.forEach((decorator) => {
      const index = klass.decorators.indexOf(decorator);
      if (index >= 0) {
        klass.decorators.splice(index, 1);
      }
    });
  }

  findConstructor(klass) {
    return klass.body.body.filter((body) => {
      return body.kind === 'constructor';
    })[0];
  }

  getArguments(ctor) {
    return ctor.value.params;
  }

  prependAssignments(ctor, args) {
    const body = ctor.value.body.body;
    args.slice().reverse().forEach((arg) => {
      const assignment = this.buildAssignment(arg);
      body.unshift(assignment);
    });
  }

  buildAssignment(arg) {
    const self = this.types.identifier('this');
    const prop = this.types.memberExpression(self, arg);
    const assignment = this.types.assignmentExpression('=', prop, arg);
    return this.types.expressionStatement(assignment);
  }
}
