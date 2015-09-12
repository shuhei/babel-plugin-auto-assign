import AutoAssign from './auto-assign';

export default function ({ Plugin, types: t }) {
  return new Plugin('auto-assign', {
    visitor: {
      ClassDeclaration: function (node, parent) {
        new AutoAssign(t).run(node);
      }
    }
  });
}
