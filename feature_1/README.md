<h1>Feature 1</h1>
<p>
February 11, 2019 <br>
Netids: khecht, mcresap2, dbozzo, sshin1 <br>
Names: Katherine Hecht, Libby(Maria) Cresap, Dominic Bozzo, Andy Shin <br>
</p>
<h2>Overview:</h2>
<p>
Two Views and Routing

  1. Routing setup in config<br>
    - Four routing options available in the config 
  
  2. Multiple Controllers<br>
    - 'MainController' and 'DealsController'
  
  3. Templates in separate page files <br>
    - home.html, deals.html and wallet.html.
  
Custom Service<br>
  1. Data in JSON file<br>
    - Availabile within 'data.json'
  
  2. Custom service for data methods<br>
    - 'apiService' that retrieves data from the JSON file with a 'getData' function
  
  3. $http in custom service<br>
    - We use a 'getData' function that uses $http.get

 User Input 
  1. Users can interact with a component<br>
    - When users add a deal to their wallet, a toast appears alerting them that the deal has been added <br>
    - Also, the deal will disappear from the main event page when a user adds to their wallet <br>
    - User can see the amount saved based off of deals added to their wallet <br>
<p>
