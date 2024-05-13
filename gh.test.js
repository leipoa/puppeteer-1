let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 7000);


  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 8000);
  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain(" Get started with Team")
  }, 7000);

});

describe("Github page tests2", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/features");
  }, 7000);
  test("Blog", async () => {
    const title = await page.title();
    expect(title).toContain("Features | GitHub · GitHub");
  }, 10000);

  test("The h1 should contain 'Features'", async () => {
    const expected = "Search code, repositories, users, issues, pull requests...";
    const actual = await page.$eval("h1", (link) => link.textContent);
    expect(actual).toContain(expected);
  }, 10000);

  test("The h2 should contain", async () => {
    const expected = "Use saved searches to filter your results more quickly";
    const actual = await page.$eval("h2", (link) => link.textContent);
    expect(actual).toContain(expected);
  }, 10000);

});