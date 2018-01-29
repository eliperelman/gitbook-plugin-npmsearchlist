require(['gitbook'], (gitbook) => {
  gitbook.events.bind('page.change', () => {
    [...document.querySelectorAll('.npmsearchlist')].map(el => {
      const query = el.getAttribute('data-query');

      fetch(`https://api.npms.io/v2/search?${query}`)
        .then(r => r.json())
        .then(({ results }) => (
          `<div>
            <h2>${results.length} packages found</h2>
            <hr />
            <ul>
              ${results.map(({ package }) => {
                const author = package.author || package.publisher || package.maintainers[0];

                return (`
                  <li>
                    <h3>
                      <a class="package-name" href="${package.links.npm}">${package.name}</a>
                      <a class="author-name" href="https://www.npmjs.com/~${author.username}">${author.username}</a>
                    </h3>
                    <p class="description">${package.description}</p>
                    <p class="stats">
                      <span class="version">v${package.version}</span>
                    </p>
                  </li>
                `);
              }).join('')}
            </ul>
          </div>`
        ))
        .then(markup => el.innerHTML = markup);
    });
  });
});
