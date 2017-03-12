import { BookwormAdminpanelPage } from './app.po';

describe('bookworm-adminpanel App', function() {
  let page: BookwormAdminpanelPage;

  beforeEach(() => {
    page = new BookwormAdminpanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
