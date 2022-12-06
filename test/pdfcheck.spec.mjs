import { test, expect } from "@playwright/test";

const slugs_batch_1 = [
  "",
  "search/"
];

class PdfLink {
  constructor(url, slug, list) {
    this.url = url;
    this.slug = slug;
    this.checkLink = false;
    this.list = list;
  }
  validateURL = () => {
    const url = this.url;
    const list = this.list.items;
    if (
      url !== null && 
      url.includes(".pdf")
    ) {
      list.push(url);
      this.checkLink = true;

      // @GOALS - case checking, language, metadata, accessibility, etc.
    } else {
      this.checkLink = false;
      
    }
    return this.checkLink;
  };
}

class Entry {
  constructor(slug) {
    this.page = `${slug}/`;
  }
}

class List {
  constructor() {
    this.items = [];
  }
}

test.describe.serial("PdfCheck", () => {
  console.log("---- Running PDF check");
  const list = new List();

  // @GOAL add batch support so this doesn't time out so intensively.

  slugs.forEach((slug) => {
    const entry = new Entry(slug);

    test(slug, async ({ page }) => {

      await page.goto(slug);

      const onPageLinks = page.locator("a >> visible=true");
      const count = await onPageLinks.count();

      for (let i = 1; i < count; ++i) {

        const url = await onPageLinks.nth(i).getAttribute("href");

        const linkToTry = new PdfLink(url, slug, list);
      
        if (linkToTry.validateURL() === true) {
          const response = await page.request.get(url);

          if (!response.ok()) {
            const color = response.ok()
              ? "\x1b[36m%s\x1b[0m"
              : "\x1b[35m%s\x1b[0m";
            console.log(color, "PDF not found on page: ", slug.toString());
            console.log(url.toString());
            const message = `${response.status()} - ${response.statusText()} - ${url}`;
            console.log(color, message.toString());
          }
        }
      }
    });
  });
});
