# Welcome to My Vintage Wheels! Website

Live Site Link: [https://vintage-wheels-42c98.web.app](https://vintage-wheels-42c98.web.app)

Client Site Repo: [https://github.com/minionsrahat/Vintage-Wheels-Client](https://github.com/minionsrahat/Vintage-Wheels-Client)


Server Site Repo: [https://github.com/minionsrahat/vintage-wheels-server-side](https://github.com/minionsrahat/vintage-wheels-server-side)


## Description

Hello, everyone! This is a single-page website for a car manufacturing company. The website provides information about the types of car parts and electronic parts we are selling.

This website has two types of users: normal users and admins. Normal users can buy products, add reviews, and edit their profiles. Admin users have additional privileges such as making other users admins, adding new products, managing product information, managing orders, and managing users.

The website includes a Stripe payment gateway, allowing users to make payments using their cards.

To create this project, I utilized React for the frontend component and Express for the backend. The frontend is built using React, React Bootstrap, and React Router to handle navigation and provide a responsive user interface. React components are responsible for rendering the product information on the homepage and handling user interactions.

For the backend, I set up an Express server to handle API requests and connect to a MongoDB database. The server provides several APIs for loading, deleting, and updating data in the MongoDB database. To ensure secure communication and protect sensitive information, I implemented a JWT authentication system to authenticate and authorize users when accessing protected routes.

By combining React for the frontend and Express for the backend, I have created a robust and secure website that provides an intuitive user experience and seamless integration with the Stripe payment gateway.

If you have any questions or need further information, please feel free to reach out.



## Technology Used

- React
- React Bootstrap
- React Router
- React Icons
- Bootstrap CDN
- React Authentication
- Firebase Authentication
- React Firebase Hooks
- JWT
- Express.js
- Stripe
- MongoDB

## Client Side Installation

To get started with My Vintage Wheels, follow these steps:


```
$ git clone https://github.com/minionsrahat/Vintage-Wheels-Client
$ cd project
$ npm install

```

## Setup 

```
 Create .env.local file that include:

  * REACT_APP_apiKey
  * REACT_APP_authDomain
  * REACT_APP_projectId
  * REACT_APP_storageBucket
  * REACT_APP_messagingSenderId
  * REACT_APP_appId  
```

## Run Project

```
$ npm start

```

## Server Side Installation

To get started with My Vintage Wheels, follow these steps:


```
$ git clone https://github.com/minionsrahat/vintage-wheels-server-side
$ cd project
$ npm install

```

## Setup 

```
 Create .env file that include:

  * DB_USER
  * PASSWORD
  * ACCESS_TOKEN
  * STRIPE_SECRET_KEY
```

## Run Project

```
$ npm start-dev

```