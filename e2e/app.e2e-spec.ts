import { BookwormAdminpanelPage } from './app.po';

<<<<<<< HEAD
describe('bookworm-adminpanel App', function() {
=======
describe('bookworm-adminpanel App', () => {
>>>>>>> bd77fba161a276cbc9e02d60ad46061ff93a3613
  let page: BookwormAdminpanelPage;

  beforeEach(() => {
    page = new BookwormAdminpanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
