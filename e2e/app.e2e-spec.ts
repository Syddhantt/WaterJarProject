import { WaterJarProjectPage } from './app.po';

describe('water-jar-project App', function() {
  let page: WaterJarProjectPage;

  beforeEach(() => {
    page = new WaterJarProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
