import puppeteer from 'puppeteer';

describe('Inn Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitFor('.cards');
  });

  test('Form input should add .valid class if cards is valid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitFor('.validate');

    const form = await page.$('.validate');
    const input = await form.$('.input');
    const submit = await form.$('.button');

    await input.type('4490007807746718');
    await submit.click();

    await page.waitFor('.container .validate-result.isValidate');
  });

  test('Form input should add .valid class if cards is not valid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitFor('.validate');

    const form = await page.$('.validate');
    const input = await form.$('.input');
    const submit = await form.$('.button');

    await input.type('4490007807746719');
    await submit.click();

    await page.waitFor('.container .validate-result.isNotValidate');
  });

  afterEach(async () => {
    await browser.close();
  });
});
