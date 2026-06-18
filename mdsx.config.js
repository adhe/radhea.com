import { defineConfig } from 'mdsx';

/**
 * Inline remark plugin that unwraps paragraphs containing only an image.
 * This prevents markdown images from being wrapped in a <p> tag.
 */
function remarkUnwrapImages() {
  return (tree) => {
    function walk(node) {
      if (!Array.isArray(node.children)) return;

      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        if (child.type === 'paragraph') {
          const meaningful = child.children.filter(
            (c) => !(c.type === 'text' && /^\s*$/.test(c.value))
          );

          if (meaningful.length === 1 && meaningful[0].type === 'image') {
            node.children[i] = meaningful[0];
          }
        }

        walk(child);
      }
    }

    walk(tree);
  };
}

export const mdsxConfig = defineConfig({
  extensions: ['.md'],
  remarkPlugins: [remarkUnwrapImages],
  blueprints: {
    default: {
      path: './src/lib/components/mdsx/Blueprint.svelte'
    }
  }
});
