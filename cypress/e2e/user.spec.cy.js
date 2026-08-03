import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameField:"[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemComobox:".oxd-select-dropdown > :nth-child(27)",
    ThirdItemComobox: ".oxd-select-dropdown > :nth-child(2)",
    dateCloseButton: ".--close",
    submitButton:"[type='submit']" 

    }   
 
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    
    
    //cy.get(selectorsList.firstNameField).clear().type('FirstNameTeste')
    //cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type('EmplIdTest')
    //cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    //cy.get(selectorsList.genericField).eq(5).clear().type('DriveLincenseNumberTest')
    //cy.get(selectorsList.genericField).eq(6).clear().type('2026-10-10')
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericField).eq(8).clear().type('TestFieldTest')
    //cy.get(selectorsList.submitButton).eq(0).click({force: true})
    //cy.get('body').should('contain', 'Successfully Updated')
    //cy.get('.oxd-toast-close')

    //cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
    //cy.get(selectorsList.secondItemComobox).click()
    //cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
    //cy.get(selectorsList.ThirdItemComobox).click()
   
  })
    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
