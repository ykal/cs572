### Angular2 (Mean Games)

#### Shared Module

* This module contains modules, components and services that can be reused throught out different modules
* It consists the `Auth` module, `ApiService`, `header` and `footer`

#### Auth Module

* contains services related to authentication and authorization including route guard services which implements `canActivate` interface
* authentication service composed from `ApiService` from shared module
* used `jwt-helper` to decode the token
* every route is guarded based on the authentication route guard rule
* used `localstorage` api to store the token

#### Game Module

* Contains 2 components (`games-list` and `game-detail`)
* A service related to game, which is composed of `ApiService` from the shared module
* implemented standalone router module for game related routes
* Used `ReactiveForms` to handle and validate form submisions

#### Profile Component

* this page is visible only if the user is authenticated

##### Model (Interface)
  
* Used interfaces for game model

#### App Module

* Wraps all modules and bootstrap with a root routing module
* used lazy loading of moadules on first bootstrap
* Page not found component for unmatched routes
