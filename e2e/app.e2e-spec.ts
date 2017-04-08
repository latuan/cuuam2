import { Cuuam2Page } from './app.po';

describe('cuuam2 App', () => {
  let page: Cuuam2Page;

  beforeEach(() => {
    page = new Cuuam2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
