export class IroClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('iro-client-app h1')).getText();
  }
}
