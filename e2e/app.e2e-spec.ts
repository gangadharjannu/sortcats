import { ProjectPage } from './app.po';

describe('project App', () => {
  let page: ProjectPage;

  beforeEach(() => {
    page = new ProjectPage();
  });

  it('should display message saying AGL Coding Test', () => {
    page.navigateTo();
    console.log(page);
    expect(page.getParagraphText()).toEqual('AGL Coding Test');
  });
});
