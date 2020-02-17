# React Server Side Rendering (SSR)


## React Rendering:
1. Browser Requests Page
2. Browser Renders Page (With No Content Yet)
3. Browser Requests JS File
4. React App Boots Up, Request Data from Backend, Render React Components with the Data
3. Browser Display React Components Into the WebPage

## React SSR Rendering:
1. Browser Requests Page
    - Load Up React App in Memory
    - Fetch Any Required Data
    - Render React Components with the Data
    - Generate Initiate HTML Code
2. Browser Renders Page (With Initiate Visible Content)
3. Browser Requests Bundle JS File
4. React App in Browser Receives the Bundle JS and Boots Up
5. React App in Browser Requests More Data and Render React Components with the Data
6. Browser Display Updated React Components


## Application Architecture
The Backend Application would be Broken to 2 Separated Apps:
>- SSR is not perfect in term of performance (Slow)
>- By breaking application to 2 separated app, scaling up (vertically) would be much easier

#### API Server
> Business Logic
- Database Access
- Validation
- Authentication
- Authorization
- Logging

#### WEB Server (React App)
> Render Data
- Take Data and Render HTML

----

## Terminology
- Server Side Rendering (Generate HTML Code on the Server)
- Universal Javascript (Same code runs on the server and the browser)
- Isomorphic Javascript (Same code runs on the server and the browser)

----

## React Challenges on SSR React
- Running JSX on the Server
    > Run Webpack on all of our server side codes, then execute the resulting bundle

- React Component to HTML Code
    > Use the `react-dom/server` libraries and use `renderToString` function

- Reflect Changes to Browser (Live Reload)
    > Update Code, Rerun Webpack on Server, Restart Server

- Router on Server and on Client Side
    >* on Server Use StaticRouter
    >* on Client Use BrowserRouter

### ReactDOM [#](https://reactjs.org/docs/react-dom.html)

#### `render`
> Render a React element into the DOM in the supplied container and return a reference to the component

#### `renderToString`
> Render a React element to its initial HTML. React will return an HTML string.

----

### Redux Challenges on SSR React
- Redux Needs Different Configuration on Server and Client (Browser)
- Authentication Needs to be in Server (Cookie Based Authentication)
- Needs a Way to Detect when All Initial Data Loads by Action Creators are Completed on Server
- Needs State Re-Hydration on the Client Side (Browser)


1. Create Store (In Index File where We Render HTML by ReactDOM to DOM):
    - createStore
    - applyMiddleware(thunk)
    - Set Provider with the Store and wrap Component in it

2. Create Action Creators (Make Ajax Calls, ....  and Return an Action Object)
3. Create Reducers (Receive Action, Update State and Return new State)
4. Call Action Creator in Component







