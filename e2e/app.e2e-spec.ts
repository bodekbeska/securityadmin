import { SecurityadminPage } from './app.po';

describe('securityadmin App', function() {
  let page: SecurityadminPage;

  beforeEach(() => {
    page = new SecurityadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
