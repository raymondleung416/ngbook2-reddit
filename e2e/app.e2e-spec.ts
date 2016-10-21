import { Ngbook2RedditPage } from './app.po';

describe('ngbook2-reddit App', function() {
  let page: Ngbook2RedditPage;

  beforeEach(() => {
    page = new Ngbook2RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
