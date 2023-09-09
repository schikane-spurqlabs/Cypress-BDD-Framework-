import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath'
import CalculatorPage from "../../Pages/calculatorPage";
const calculatorPage = new CalculatorPage()

Given('User lauch the application', ()=>{
calculatorPage.userLaunchWebsite()
})

When("User clicks on {string}", (number)=>{
    calculatorPage.userClicksOnNumber(number)
    
    // cy.get(`//span[text()='${number}']`).click();

})

Then("User sees the value is {string}",(number)=>{
    calculatorPage.userSeesTheValue(number)
})

When("User clicks on operator {string}",(operator)=>{
 calculatorPage.userClicksOnOperator(operator)
})