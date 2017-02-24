import { MyAppCiclovidaPage } from './app.po';

describe('my-app-ciclovida App', function() {
  let page: MyAppCiclovidaPage;

  beforeEach(() => {
    page = new MyAppCiclovidaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
