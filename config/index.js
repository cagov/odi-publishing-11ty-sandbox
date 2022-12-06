const siteSettings = require("./config.json"); // Site config (renders in markup)

let staticContentPath = "./node_modules/odi-publishing-static-test-content";

if (process.env.SITE_ENV === "staging") {
  staticContentPath = "./node_modules/odi-publishing-static-test-content-staging";
}

// if (process.env.SITE_ENV === "localhost") {
  // staticContentPath = "./node_modules/odi-publishing-static-test-content-staging-debugging";
// }

const staticContentPaths = {
  staticContentPaths: {
    root: `${staticContentPath}`,
    media: `${staticContentPath}/media`,
    pages: `${staticContentPath}/pages`,
    posts: `${staticContentPath}/posts`,
    redirects: `${staticContentPath}/redirects`,
    menu: `${staticContentPath}/menu`,
    data: `${staticContentPath}/data`,
  },
};

const getConfig = () => {
  let config = Object.assign(
    {},
    siteSettings,
    staticContentPaths
  );

  const defaultDomain = config.build.host_name;
  const DOMAIN = process.env.DOMAIN || defaultDomain;
  config.build.host_name = DOMAIN; //"example.ca.gov";

  if (process.env.SITE_ENV === "production") {
    config.build.canonical_site_url = "http://odi-publishing-11ty-sandbox.ca.gov.s3-website-us-west-1.amazonaws.com";
  }

  if (process.env.SITE_ENV === "localhost") {
    config.build.canonical_site_url = "http://localhost:8080";
  }

  return config;
};

module.exports = getConfig();
