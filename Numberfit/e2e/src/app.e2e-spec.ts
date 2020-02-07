import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/play');
    });
    it('should have a title saying Play', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Play');
      });
    });
  });
});
