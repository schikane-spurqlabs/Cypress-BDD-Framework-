 Feature: Calculator features
 
     Feature Calculator operations
     Scenario: Addition
     Given User lauch the application
     When User clicks on '3'
     And User clicks on operator '+'
     And User clicks on '4'
     And User clicks on operator '='
     Then User sees the value is '7'