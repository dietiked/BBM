import { BBMPage } from './app.po';

describe('bbm App', () => {
  let page: BBMPage;

  beforeEach(() => {
    page = new BBMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
