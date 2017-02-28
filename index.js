module.exports = {
  website: {
    assets: './assets',
    css: ['styles.css'],
    js: ['script.js']
  },
  blocks: {
    npmsearchlist: {
      process: (block) => {
        if (block.args.length !== 1) {
          throw Error('Required query parameter');
        }

        const [query] = block.args;

        return `<div class="npmsearchlist" data-query="${query}">${block.body}</div>`;
      }
    }
  }
};