# Welcome to My Vintage Wheels! Website

Live Site Link: [https://vintage-wheels-42c98.web.app](https://vintage-wheels-42c98.web.app)

Client Site Repo: [https://github.com/minionsrahat/Vintage-Wheels-Client](https://github.com/minionsrahat/Vintage-Wheels-Client)


Server Site Repo: [https://github.com/minionsrahat/vintage-wheels-server-side](https://github.com/minionsrahat/vintage-wheels-server-side)


## Description

Hello, everyone! This is a single-page website for a car manufacturing company. The website provides information about the types of car parts and electronic parts we are selling.

This website has two types of users: normal users and admins. Normal users can buy products, add reviews, and edit their profiles. Admin users have additional privileges such as making other users admins, adding new products, managing product information, managing orders, and managing users.

The website includes a Stripe payment gateway, allowing users to make payments using their cards.

To create this project, I started by setting up a MongoDB database, which is a NoSQL database. Then, I connected my created database with my server. I created several APIs for loading data, deleting data, and updating data in MongoDB.

To display product information on the homepage, I fetch data using a GET API from the server.

For security, I implemented a JWT authentication system to secure all APIs on the server-side.

To handle navigation links, I used the `NavLink` component from React Router.

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



