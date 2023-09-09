import CalculatorPage from "./calculatorPage"


const obj2 = require("../fixtures/example.json")
class TestDemoPage extends CalculatorPage{
    userLauchUrl(){
        cy.visit(obj2.url2)
    }
    
    userClicksOnElements(){
        cy.xpath(obj2.elements).clicks
    }
    
    userClicksOnTextBox(){
        cy.xpath(obj2.textBox).click
    }

    userEnterName(name){
        cy.get(obj2.userName).type(name)
    }

    userEnterEmail(email){
        cy.get(obj2.userEmail).type(email)
    }
    userEnterCurrentAddress(add){
        cy.get(obj2.cAddress).type(add)
    }
    userEnterPermanentAddress(pAdd){
        cy.get(obj2.pAddress).type(pAdd)
    }
    userClickOnSubmitButton(){
        cy.get(obj2.submit).click
    }
    userSeeResultTextBox(){
        cy.get(obj2.resultTextBox).should('be.visible')
    }




}
export default TestDemoPage