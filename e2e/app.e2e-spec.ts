import { TestAPIPage } from './app.po';

describe('test-api App', () => {
  let page: TestAPIPage;

  beforeEach(() => {
    page = new TestAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
