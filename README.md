# Formula 1 Champions

It's react web app to list formula 1 champions from 2005 until 2015. You can change range via config file.
It uses the parcel to bundle assets and uses Redux to manage state.

Live demo: https://mobiquityinc-9144f.firebaseapp.com/

## Development
To run development server;
```
npm install
npm start
```

Or you can use yarn. And visit http://localhost:8080

## File Structure
It uses "feature-first" approach rather than "function-first". And for Redux it uses "re-ducks" file structure. For details please visit https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be

## Components vs Containers
Component shouldn't have bussiness logic. It's only for rendering UI and getting inputs from user. In this case I created the "containers" for connecting Redux to a component. It also allows us testing components separately.

## Styling
It uses BEM (Block, Element, Modifier) method with SCSS. And it's responsive. More information naming with BEM please 
check http://getbem.com/introduction/

Every component has own scss file. And each file can reach variables and mixins. To achieve this I added .sassrc file to 
add global data.

In this case, It works for app but it doesn't work for tests. I use "jest-css-modules-transform" to run tests which has scss. But i can not reach 
the global variables beucause it overwrites the node-sass data property. I fixed it and created a pull request for the library.
https://github.com/Connormiha/jest-css-modules-transform/pull/8

## HTTP & Caching & Api Helper
I created an HTTP helper. That use window.fetch to fetching data from the server. It has cache object to cache request by 
url address. It's a simple solution for HTTP caching but for production, a service worker might work better :)

I created the HTTP helper and an API helper both. We can use window.fetch in api.helper but in this case 
api.helper has a strict dependency on window.fetch. So in the future we can use axios or something else. In this case 
it's enough to change http.helper only without touching api.helper.

## Schema Mapping
I created a schema mapper file to map API request to a javascript object. It creates a custom schema for API responses because 
I don't want to make my components depented to api schema. Because this API is a 3rd party service. In the future, if they shut down 
the service we should only change api.helper and map files to run with an other service without touching any of our components.

## Testing && Linting
It uses jest for testing. To run tests in watch mode;
```
npm run test:watch
```

It has linting. To run lint.
```
npm run lint
```

To run test&lint both
```
npm test
```

## Build
Parcel has build.
```
npm run build
```