### Weekend 2 (Coffee App)

#### Backend

* user model with username, password and name properties
* implement login and register endpoints
* generate `jwt` token when login with a paylod containing `name` of the user
* create authorization middleware to prevent writing resources form being accessed by unauthenticated request

#### Angular frontend application

* create a page to register user
* header directive contining links and logout button
* show links and forms based on user login status
* store token to session storage when user loggedin 
* send the token to every request made to the api
* restrict routes that should not be active if the user is not authenticated
* search by name

