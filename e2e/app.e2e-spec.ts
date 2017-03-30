import { Demo0330GithubPage } from './app.po';

describe('demo0330-github App', () => {
  let page: Demo0330GithubPage;

  beforeEach(() => {
    page = new Demo0330GithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
