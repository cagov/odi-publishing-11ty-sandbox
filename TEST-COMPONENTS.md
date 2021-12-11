Test Components

```bash
MACHINENAME=ds-agency-footer

npm install @cagov/$MACHINENAME@latest`

cp node_modules/@cagov/MACHINENAME/template.html wordpress/posts/test-components--$MACHINENAME.html

cp wordpress/posts/test-components-accordion.json /wordpress/posts/test-components--$MACHINENAME.json

echo "change wordpress_url"

code wordpress/posts/test-components--$MACHINENAME.json

echo "update fields in test-components--$MACHINENAME.json"

code src/js/index-headless.js

# if js
printf "import '@cagov/%s';" $MACHINENAME > src/js/index-headless.js

#else
printf "" > src/js/index-headless.js

printf "@import '../../../node_modules/@cagov/%s/src/index.scss';" $MACHINENAME > src/css/sass/index.scss

npm run build

open -a chrome docs/test-components--$MACHINENAME/index.html

```


Also noteworthy:
- ./src/templates/_includes/layouts/index.njk 
- ./src/templates/_includes/test-components.njk 
