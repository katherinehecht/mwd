Feature 1
February 11, 2019
Netids: khecht, mcresap2, dbozzo, sshin1
Names: Katherine Hecht, Libby(Maria) Cresap, Dominic Bozzo, Andy Shin

Overview:
Two Views and Routing
  Routing setup in config
  - Four routing options available in the config 
  
  Multiple Controllers
  - 'MainController' and 'DealsController'
  
  Templates in separate page files 
  - home.html, deals.html and wallet.html.
  
Custom Service
  Data in JSON file
  - Availabile within 'data.json'
  
  Custom service for data methods
  - 'apiService' that retrieves data from the JSON file with a 'getData' function
  
  $http in custom service
  - We use a 'getData' function that uses $http.get

 User Input 
  Users can interact with a component
  - When users add a deal to their wallet, a toast appears alerting them that the deal has been added
  - Also, the deal will disappear from the main event page when a user adds to their wallet
