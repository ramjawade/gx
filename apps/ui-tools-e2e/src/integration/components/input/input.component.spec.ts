describe('ui-tools', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcomponent--primary&knob-value=&knob-appearance=outline'));

  it('should render the component', () => {
    cy.get('gx-input').should('exist');
  });
});
