import { AppFrontendPage } from './app.po';

describe('app-frontend App', () => {
  let page: AppFrontendPage;

  beforeEach(() => {
    page = new AppFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
