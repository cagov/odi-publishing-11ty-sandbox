Test Components

1. ./package.json     "@cagov/ds-accordion": "^1.0.8",
2. ./wordpress/posts/test-components-accordion.html [add markup]
3. ./wordpress/posts/test-components-accordion.json [check template field]
4. ./src/js/index-headless.js import '@cagov/ds-accordion';
5. ./src/templates/_includes/layouts/index.njk [has include statement]
- ./src/templates/_includes/test-components.njk [prints page]
6. npm run build
7. open ./docs/test-accordion/index.html in browser
