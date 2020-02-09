Feature 1
February 11, 2019
Netids: khecht, mcresap2, dbozzo, sshin1
Names: Katherine Hecht, Libby(Maria) Cresap, Dominic Bozzo, Andy Shin

Overview:

Two Views and Routing

  1. Routing setup in config
    - Four routing options available in the config 
  
  2. Multiple Controllers
    - 'MainController' and 'DealsController'
  
  3. Templates in separate page files 
    - home.html, deals.html and wallet.html.
  
Custom Service
  1. Data in JSON file
    - Availabile within 'data.json'
  
  2. Custom service for data methods
    - 'apiService' that retrieves data from the JSON file with a 'getData' function
  
  3. $http in custom service
    - We use a 'getData' function that uses $http.get

 User Input 
  1. Users can interact with a component
    - When users add a deal to their wallet, a toast appears alerting them that the deal has been added
    - Also, the deal will disappear from the main event page when a user adds to their wallet
    - User can see the amount saved based off of deals added to their wallet
