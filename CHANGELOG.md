<a name="0.5.0"></a>
## Release [0.5.0] (2020-05-05) (Authentication)
## Added (Feature 5)
* Added authentication module with login/register components
* created protected routes on explore, wallet, and deal, because those are only for users to join
  * /home is still unprotected, so that new users can be directed to login
## Changes (Feature 5)
* Implemented  styling to improve upon defaults
* /explore, /wallet, and /deal/:dealid are now protected routes that you must be logged in to view
* added further connectivity and functionality with parse database

<a name="0.3"></a>
## Release [0.3](https://github.com/katherinehecht/mwd/pull/7/files) (2020-03-03) (Feature 2)
## Added (Feature 3)
* Added parse database backend for all data requests and persistence
* integrated node foursquare API to list more venues for users to explore
## Changes (Feature 3)
* Re-worked all data requests so that no static data was being loaded anymore
  * all requests routed through our BACK4APP
  * pagination integrated into viewing deals
* Four square node api server written and configured to give back location recommendations in South Bend,IN
   * response from this request rendered in Explore Feed


<a name="0.2"></a>
## Release [0.2](https://github.com/katherinehecht/mwd/pull/7/files) (2020-03-03) (Feature 2)
## Added (Feature 2)
* Added new specific deal pages for each deal to share deals
    * as a new feature, we created the deal routed component, described below, that shows in depth information about a deal using dynamic routing
* Added Gulpfile to streamline build process for new component architecture
## Changes (Feature 2)
* Refactored to Component Architecture
  * Root component that serves as the root, with an app component that serves as the parent for our routed components
  * Four routed components created under app
    * home: a homepage for our website
    * explore: renders a list of all of the deals that a user can browse, share, and add to wallet
    * wallet: renders a list of all the deals in a users wallet
    * deal/deal_id: renders a single page view for a deal that displays additional information about it

<a name="0.1"></a>
## Release [0.1](https://github.com/katherinehecht/mwd/tree/910716dc553e766b1df9b267fc0a9019884ec202) (2020-02-09) (Feature 1)
## Changes (Feature 1)
* Initial release
* Explore Deals reads and displays deals from a json
* Wallet contains added deals and can remove deals
