# Project Documentation - React Store (E-Commerce)

Before you continue, the application is already deployed [here](https://react-store-frossler.netlify.app) if you want to try it out.

## Introduction

This is a e-commerce based application. Using API calls to bring the showed information so the user can interact and buy. It has category filtering and you can see the item details by clicking it. Product catalog is allocated into Firestore(Firebase). 

## Used Libraries
* [styled-components](https://styled-components.com/) (^5.3.3): Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

* [react-hot-toast](https://react-hot-toast.com/) (^2.1.1): Smoking hot Notifications for React. Lightweight, customizable and beautiful by default.

* [formik](https://formik.org/) (^2.2.9): Formik is the world's most popular open source form library for React and React Native. Formik is used in this cate to simulate an order & payment form. Data is stored into Firebase "sales" collection with unique ID. 

* [Firebase](https://firebase.google.com/) (^9.6.2): Firebase helps you build and run successful apps Backed by Google and loved by app development teams from startups to global enterprises.

## Components structure:
Unique responsability structure is implemented in this project. Three components intecract with eachother in order to perform the data flux. In some cases only two components are enough to do the logics, but same structure is applied. 

In example: 1st Component >> 2nd Component >> 3rd Component

1st Component make the API calls and make avalilable the data received. Then pass it to 2nd Component as "props" so this can do the mapping and filtering and finally 3rd Component will structure and show the data in the web browser. 

![image](https://user-images.githubusercontent.com/85909890/152883323-f5b01454-7c9a-40b6-8d81-be5c41c5cd4c.png)


## How do I try it?
1. Clone the repository:
```
git clone https://github.com/frossler/frossl-ecommerce
```
2. Using bash console go to project's root path: (replace 'projects_root_path' with correct path on your PC)
```
cd 'projects_root_path'
```
3. Install the needed libraries to run the project:
```
npm install
```
4. Once you have installed all dependencies just start develop server: 
```
npm start
```

## Pending Upgrades:

* Responsive UI for Tablet and Mobile. 
* Login via Auth.
* Improve Forms. Add payment methods. 
* Improve API call code for category filtering/showing. 

## Personal Information

My name is Fernando Rossler, nice to meet you! 
I'm a full stack developer in progress, living in Esperanza city, Santa Fe - Argentina. 
I'll be very glad if you have any suggestions or comments to my project. It helps me to develop my skills. 

You can find me on LinkedIn: [Fernando on LinkedIn](https://www.linkedin.com/in/fer-rossler-344405215/)

Thanks a lot for checking my project. 
