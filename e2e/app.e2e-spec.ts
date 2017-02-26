import { PerdidogPage } from './app.po';

describe('perdidog App', () => {
  let page: PerdidogPage;

  beforeEach(() => {
    page = new PerdidogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
