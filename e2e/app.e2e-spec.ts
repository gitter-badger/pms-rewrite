import { PmsRewritePage } from './app.po';

describe('pms-rewrite App', () => {
  let page: PmsRewritePage;

  beforeEach(() => {
    page = new PmsRewritePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
