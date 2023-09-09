import{Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

import TestDemoPage from "../../Pages/testDemoPage";
const testDemoPage = new TestDemoPage()
Given('User am on DemoQA Page', () =>{
   testDemoPage.userLauchUrl()
})

When('User click on Elements',()=>{
  testDemoPage.userClicksOnElements()
})

When('User click on Text Box',()=>{
   testDemoPage.userClicksOnTextBox()
})
When('User enter name {string}',(name)=>{
   testDemoPage.userEnterName(name)
})
When('User enter email {string}',(email)=>{
   testDemoPage.userEnterEmail(email)
})
When('User enter current address {string}',(add)=>{
    testDemoPage.userEnterCurrentAddress(add)
})
When('User enter permanent Address',(pAdd)=>{
    testDemoPage.userEnterPermanentAddress(pAdd)
})
When('User click on submit button',()=>{
    testDemoPage.userClickOnSubmitButton()
})

Then('User see result in text box',()=>{
    testDemoPage.userSeeResultTextBox()
})

