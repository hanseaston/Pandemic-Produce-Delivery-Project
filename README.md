
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)



# About Our Online Shop

During the ongoing pandemic, getting groceries can be a **real challenge**. The scarcity can go beyond delivery time slots. Items you order can run out of stock before being delivered, and if you venture to the store, you may find slim pickings in some aisles. 

It all started out a few weeks ago, when several people in our Bellevue neighborhood decided to organize a no-contact delivery service to help people in need. We noticed that some of our friends or families find it challenging to shop outside, either due to shortage of mask supplies or health reasons. Most of them were worried about their safety, and whether they were able to always get the goods that they wanted if they went out to shop. Understanding their concerns, we decided to start this non-profit community service and deliver the produce to people's doors without any charge. We currently have around 5 people in our neighborhood as our regular customers. 

The website is our next phase of expansion. We are planning to contact wholesalers in the greater Seattle area and directly order products from them. This would save us more time to order and fetch the products. It will also open up a broader variety of quality produces for the customers. We are planning on using this website as a platform for customers to order goods directly. 

<br />


# Open-source Team

Our shop platform is an open-source project, and we are always looking for more like-minded developers who would like to contribute! These are our current [contributors](https://github.com/hanszhang00/Seattle-Produce-Delivery-in-Pandemic/graphs/contributors) helping push the project forward each day. 

#### [Hans Zhang](https://github.com/hanszhang00) - Organizer/Developer

<img align="left" width="120" height="120" style="border-radius:50%" src="./Frontend/src/assets/readmeRes/me-min.JPG">
  <br /><p>I am Hans. I am currently pusuing a computer science major at Univerisity of Washington. I am really excited to build up this website using my programming skills, and I am even more excited to collaborate with other amazing developers to contribute to something meaningful.</p>

<br />
<br />

# Join our open-source Project!

## Motivation for open-source

This is a **beginner-friendly** open-source project aimed for **social good**. We are always looking for more passionate programmers, like you, to contribute!

Open-source project is powerful because it lowers the barriers to adoption and collaboration, allowing people to spread and improve projects quickly. It also is a perfect place for anyne to hone their programming skills and share their visions and ideas with like-minded others. Here are three major reasons as to why you should contribute to our open-source project!
 - **Collaboration**: Open-source project can accept changes from anyone in the world. 
 - **Adoption**: Open source project can be used by anyone for nearly any purpose. 
 - **Transparency**: Anyone can inspect an open source project for errors and making small and big improvements.
 
 If you are still confused about the concept of open source and would like to learn more, check out the [Github's official guide!](https://github.com/open-source)
 
 ## Coding for social good
 
 I am a firm believer that a personal project is **so much more meaningful** if it brings positive impact to the soceity. 
 
 I have always been in awe of people who strive to make a change in the world.  The philanthropists and activists on the television, in interviews, and in books inspire me with their radiating passion for what they stand for, and I used to hope that one day I could be passionate enough about something to also create change in the world. 
 
 And now, here I am, launching **the first open-source project here on Github**. This is an opportunity for people to connect with others who share the same drive for creating positive changes around us.
 
 ## It can be overwhelming
 
 I remember the first time I tried to make contribution to an open-source. The experience was quite overwhelming. There were so many things I did not understand about the project, and I couldn't even understand the command lines that were used for setting up the project.

 Even now, I am by no means an experienced programmer. There's still so much I am learning everyday. I started programming about two years ago, and it has been a challenging yet exciting journey. One of my regrets I had along the way was failing to discover the beauty of contributing to an open-source. SomehoW in my mind, I always thought that I need to be somehow seasoned to be able to contribute. But **THAT IS TOTALLY NOT THE CASE**. All you need is a heart to contribute, a willpower that drives you forward, even after failure, and a faith that you will succeed if you keep at it.
 
I want to make sure your experience here is a ***positive, friendly, and exciting one***. Together we can foster a loving community for developers.

 ## Join us!

 Once you join our project and make your first contribution, we will list you as one of our [contributors](https://github.com/hanszhang00/Seattle-Produce-Delivery-in-Pandemic/graphs/contributors) and add your profile in our [README.md section](#Open-source-Team). I truly believe that working on an open-source project will make you a better programmer and communicator, and it will also give you something meaningful to talk about when you talk to a recruitor (if you are going to industry in the future)!
 
Whether it is because of your **passion for social good**, or your desire to **hone your web programming skills**, or simply to find an opportunity to **gain some experiences programming with others**, we would love to have you.

- Our slack server is coming up soon! <br />
- If you have any hesitations, questions, or concerns. Feel free to [send me at email](mailto:hanszhang2000@gmail.com). Happy to connect!

<br />

# Project Setup

Now that you've made your decision to make your first contribution. Here's how to set it up.


## General Setup

1. **Fork and clone the project**.
    - If you are fairly new to Github or Git, please checkout the [official Github Guide!](https://guides.github.com/activities/forking/)

2.  **Use your favorite text editor**
    - Personally I use VScode. You are welcome to use any of your preferences!

3.  **From the root directory of the project, install dependencies with npm**
4. 
    ```javascript
    npm install    // install dependencies of frontend 
    cd Backend     // nagivate to the backend directory
    npm install    // install dependencies of backend
    ```

5.  **Configure the appropriate [environment variables](#configuring-environment-variables)**

6.  **Running only the frontend**
     - This means that you will be able to run the website locally without most of the shop features. Since all of the produce information are fetched from the backend server, you won't be able to access any of the produce, thus the shop page will be listed as empty. If you have not set up the Google firebase, your sign-in and sign-up page also will not be functioning. However, you can use this if you are **only interested in changing the styles of frontend compoennts.**   
    
    From your root directory:
    ```
      npm start
    ```    
    Visit the frontend application in your browser at http://localhost:3000
      - Note: your frontend server will autostart whenever you save on a file, a feature of React

7.  **Running frontend and backend**
      - This will give you access to the entirety of the application. Note that you need to set up the Google Firebase and prepopulate products using the Admin page in your application before being able to use the products in the shop page.

      From your root directory:
      ```javascript
        cd Backend
        npm run build   // you can change the command in package.json, but don't push it to Github
      ```

    This will spin up **both** your frontend React and backend Express server.
      - Visit the frontend application in your browser at http://localhost:3000
      - Your backend server is listening on port **5000**

## Configuring Project

### .env file on the backend

On our backend, our application uses **[MongoDB](https://www.mongodb.com/)** to store produce-related information and the **[Stripe API](https://stripe.com/)** to process user payments. Note that even though the user payment's logic is set up on the back-end, you **won't be able to process payment in the shop checkout page**, since the application has not reached the deployment process.


Our application uses [**environmental variables**](https://en.wikipedia.org/wiki/Environment_variable) to manage configuration for both MongoDB and Stripe on the backend. These values are set in a `.env` file in the project root directory that **SHOULD NOT BE PUSHED TO GITHUB for safety reasons**. Each developer ***should set up their own account's connection string on their own local machine instead.**

We have provivded you with an example of `.env` file in the root directory.

To set up a `.env`, copy the `.env.example` file, which lists needed configuration values. For example, in the Mac OS terminal:
```
cp .env.example .env
```

A set variable in the `.env` file will look like this:
```
mongooseConnection='your own connection string'
```

Change the `'your own connection string'` to **your own mongooseConnection string**. You will need to create a user account at the MongoDB website, set up a free cluster as well as database, and find where the connection String is for your cluster. It should be easy!

Repeat the same process for the Stripe API. You should replace the placeholder with **your own Stripe API private key.** If you will be working on code that is not related to the payment functionality, you **don't need to set up this API.**

If you need to introduce a new environmental variable, please coordinate with Hans. Make sure to add it to the `.env.example` file, and note it in your pull request.

### configuring frontend

There are **two** files you need to configure before being able to run the application.

Firstly, make sure you have signed in [firebase](https://firebase.google.com/) and created a new project for the application. Log into your firebase console and configure the following setting for user signin and authorization.


Then, from the project's root directory:

```
cd src/firebase/connection
```

You will see a file named  `connection-example.js`. This file sets up the connection for your
firebase client and is used by `firebase.js` in the same folder. 

```
cp connection-example.js connection.js
```

Copy in your own firebase config in the `connection.js` 

If you want to test out the stripe API, you need to configure the **Stripe public key** as well. From the project's root directory:

```
cd src/components/stripe-button
cp stripe-public-key-example.js stripe-public-key.js
```

From your Stripe account, copy the public key into `stripe-public-key.js`

***Congratulations! 🎉🎉🎉*** You are done with all of the project setup! Now you can test out 
whether your configuration is correct by running the project. You should now be able
to access all of the project's functionality.

(**Note**: the configuration process feels a little cumbersome right now. We hope to put all of the configuration setup into .env file in the future to make the process a little easier. If you would like to make this happen, please check out this [issue](#)!


## Understanding User Authorization

In our current shop setup, users are able to log in and log out. Users are able to sign in with their **Google account** directly. Alternatively, they are also able to **sign up** using their personal email address and password.

We currently have two types of users: **admin user** and **normal user**.

- The normal user is able to access the general functionality of the shop, including adding items to cart and checking out.
- The admin user is able to access the **admin edit-product** and **admin checkout** page that are inaccessible to normal users. In particular:


  - **Admin edit-product page** enables you to add new products (with relevant product information) to Mongo Database. Other users will be able to see the new product once they refresh the page.


  - **Admin checkout page** keeps track all of the successful orders made by the all of the users. We use this page to know what products users have ordered in preperation for our delivery process.


  - ***Note***: The admin pages are still in development process (basic functionality already implemented). Help us make them better!
  

## User Authorization in Code

Our shop's signin logic is mostly handled by Firebase. In our `app.js`, the function onAuthStateChanged is an observer function defined by Firebase that is triggered whenever a user signs in or signs out.

```javascript
// Once the user's authentification status is changed
auth.onAuthStateChanged(async (user) => {
  if (user !== null) {
    const userRef = await createUserProfileDocument(user, [false]);
```

Note that in the function, we are calling a function called `createUserProfileDocument`. This function captures the user's information and stores it back to our firebase database, so that next time a user signs in, we are able to verify their identity. 

In particular, notice that the second parameter of the function is an array containing a boolean value. The value ***determines whether the user passed in will have the admin privelege or not***.
Normally, the default is false, since we don't want to grant a user the admin privelege.

In the case when you want to grant a user privelege (e.x. for your personal account), follow the following steps:

- make sure you have set up the connection for firebase
- run the server using `npm run build`
- change the paramter `[false]` to  `[true]` in `createUserProfileDocument` indicate you want the admin privelege for any incoming account registration
- register a **new** email account (either through google signin or normal signup, but make sure the account doesn't store in the database) using the application
- go to your [firebase console](https://console.firebase.google.com/) and make sure your user entry in the firestore collection `users` has the privelege field set to `true`
- reset the paramter from `[true]` to `[false]` in your `app.js`








