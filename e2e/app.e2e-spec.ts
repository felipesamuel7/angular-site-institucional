import { AngularSiteInstitucionalPage } from './app.po';

describe('angular-site-institucional App', () => {
  let page: AngularSiteInstitucionalPage;

  beforeEach(() => {
    page = new AngularSiteInstitucionalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
