import { GreatImagePage } from './app.po';

describe('great-image-webapp', () => {
  let page: GreatImagePage;

  beforeEach(() => {
    page = new GreatImagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
