import AutoAssign from './auto-assign';

export default function ({ Plugin, types }) {
  return new Plugin('autoassign', {
    visitor: {
      ClassDeclaration: function (node, parent) {
        new AutoAssign(types).run(node);
      }
    }
  });
}
