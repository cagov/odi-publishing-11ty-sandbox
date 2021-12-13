Test Components

```bash
MACHINENAME=back-to-top
DSNAME=ds-$MACHINENAME

npm install @cagov/$DSNAME@latest

cp node_modules/@cagov/$DSNAME/template.html wordpress/posts/test-components--$DSNAME.html

cp wordpress/posts/test-components-accordion.json wordpress/posts/test-components--$DSNAME.json

code wordpress/posts/test-components--$DSNAME.json

echo "change wordpress_url to test-components--ds-back-to-top"
echo "change page_title to 'Back to top' "

# echo "update fields in test-components--$DSNAME.json"

# if js
printf "import '@cagov/%s';\n" $DSNAME > src/js/index-headless.js

#else
printf "" > src/js/index-headless.js

printf "@import '../../../node_modules/@cagov/%s/src/index.scss';\n" $DSNAME > src/css/sass/index.scss

npm run build

open -a chrome docs/test-components--$DSNAME/index.html

```


Also noteworthy:
- ./src/templates/_includes/layouts/index.njk 
- ./src/templates/_includes/test-components.njk 
