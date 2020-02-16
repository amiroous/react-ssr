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


