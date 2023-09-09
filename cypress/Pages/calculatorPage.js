import data from "../fixtures/example.json";

import("../fixtures/example.json")
class CalculatorPage{
 obj = data
    
        output = () => cy.xpath(obj.outputxpath);
      
     userLaunchWebsite() {
        // cy.fixture('Url')
        // console.log(cy.fixture('Url'))
        cy.log(obj.outputxpath)
        cy.visit(obj.url)
        
    }

    userClicksOnNumber(number){
        cy.get((obj.number).replace('param',number)).click()
    }

    userSeesTheValue(number){
       this.output().should('contain',number)
        
    }

    userClicksOnOperator(op){
        cy.xpath((obj.operator).replace('param',op)).click
    }
}
export default CalculatorPage