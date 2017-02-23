import { AppNgHotelPage } from './app.po';

describe('app-ng-hotel App', function() {
  let page: AppNgHotelPage;

  beforeEach(() => {
    page = new AppNgHotelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
