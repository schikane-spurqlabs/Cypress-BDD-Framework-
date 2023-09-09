Feature:Automate DemoQA Website

 Scenario: Fill the Text Box of DemoQa
   Given User am on DemoQA Page
   When User click on Elements
   And User click on Text Box
   And User enter name 'Aniket Rajendra Chikane'
   And User enter email 'aniketchikane72@gmail.com'
   And User enter current address 'pune'
   And User enter permanent Address 'Songaon'
   And User click on submit button
   Then User see result in text box


