import { IroClientPage } from './app.po';

describe('iro-client App', function() {
  let page: IroClientPage;

  beforeEach(() => {
    page = new IroClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('iro-client works!');
  });
});
