# MONey Spendee

## Description

MONey Spendee application is a money management application which allow users to sign up and record their transaction in daily life.

## Installation

_only for user who want to install the application in your local_.

### `CREATE DATABASE money_spendee_dev` 

create the database inside your local

### `sequelize db:migrate`

create table inside your database

### `sequelize db:seed:all`

seed file and insert default data inside your table

### `nodemon server.js`

run the server

## Link

[Deploy Link](https://money-spendee.netlify.app)
[Github Link](https://github.com/chonnikan-aue/money-spendee)

## ER Diagram

### Planning ERD

__Transaction table__.

![transactions](https://user-images.githubusercontent.com/116058313/210305619-bedb1a54-8ef7-4bdc-a810-bcc17041c1fa.JPG)

__Types table__.

![types](https://user-images.githubusercontent.com/116058313/210305631-eb4aab6d-79d3-44a1-ae3b-b403bd3d3915.JPG)

__Users table__.

![users](https://user-images.githubusercontent.com/116058313/210305639-9a08ccea-623d-422b-94ca-a2ae05f4ad59.JPG)

__Budgets table__.

![budgets](https://user-images.githubusercontent.com/116058313/210305586-26e93b9d-79ec-4965-91ad-ed22dc977901.JPG)

__Groups table__.

![groups](https://user-images.githubusercontent.com/116058313/210305603-f2d2f773-7872-47c7-ad55-1e8b4c5321b9.JPG)

__GroupUser table__.

![GroupUser](https://user-images.githubusercontent.com/116058313/210305606-59a82c5a-02b6-4fb4-8dfc-9ad99c0db030.JPG)

__Relationship__.

![relationship](https://user-images.githubusercontent.com/116058313/210305611-fcb6335e-e6a3-4832-9189-567dba512f5a.JPG)

__ERD__.

![ERD](https://user-images.githubusercontent.com/116058313/210305596-ae246a6f-ab8e-4bfc-8bc2-170ad8253499.JPG)

### Actual ERD

__Deposits__.

![Deposits](https://user-images.githubusercontent.com/116058313/210309667-906445c4-e9e7-41f4-a8f1-996d0b81f0ef.jpg)

__DepositTypes__.

![DepositTypes](https://user-images.githubusercontent.com/116058313/210309673-a3409b8c-1581-4256-b51c-c833910b0240.jpg)

__Users__.

![Users](https://user-images.githubusercontent.com/116058313/210309677-afc2d91c-1ea2-4de6-9063-cfaa478068cb.jpg)

__Withdraws__.

![Withdraws](https://user-images.githubusercontent.com/116058313/210309678-dab828d6-b839-4c60-a268-188d4bdc4858.jpg)

__withdrawTypes__.

![withdrawTypes](https://user-images.githubusercontent.com/116058313/210309681-d504ae5b-bf4a-4f5d-b8bb-1e24b873f0b5.jpg)

__Relationship__.

![relationship](https://user-images.githubusercontent.com/116058313/210309676-b803bec7-a4ec-4db7-b674-ff68f10d2469.jpg)

__ERD__.

![ERD](https://user-images.githubusercontent.com/116058313/210309674-c2808fa9-1814-4c07-a4db-b4afb25cac2d.jpg)


## Teachnology used

We use PSQL for working on the database and use sequelize to working CRUD function. Finally, we export as a JSON format and determine the authorization. 

## User stories

- As a user, I want to log my daily transactions, so that I can look them up later.
- As a user, I want to set the percentages on my expenses, savings, and investment per month, so that I can allocate my spendings correctly as planned.
- As a user, I want to see a summary report and dashboard of my monthly transactions, so that I can plan my next month’s spending.

### MVP Goal:

- [x] Create “types” table (Attributes: Income, Daily Expenses, Savings, Investment)
- [x] Create “transactions” table [CRUD: FULL CRUD]
- [x] Users can add fixed income amount per month [CRUD: UPDATE]
- [x] The transaction table will have the “withdrawFrom” column (savings, expenses)
- [x] Make the application responsive
- [ ] Every 1st of each month, the net amount (total income – total expenses = net amount) of the previous month will be added as the savings of the current month (insert in the transaction table).

### Strech Goal:

- [x] Users can specify and edit the preferred amount of money (as percentages) that they want to allocate for their expenses, savings, and investment per month [CRUD: READ, UPDATE]
- [x] Show dashboard on the homepage that summarizes every transaction of a user
- [x] User authorization (with sign up and log in pages) [CRUD: FULL CRUD]
- [x] Alert users when they are about to reach the limit of their maximum expenses per month
- [ ] Add filter and/or sort function inside the transaction table on the homepage to let users filter and/or sort data on the date/ name/ type of transaction they want to see
- [ ] Add a date range filter on dashboard view and summary view
- [ ] Group authorization (with sign up and log in pages) [CRUD: FULL CRUD]
    a. User can access and log in into group authorization only after logging in through the user authorization

## Approch

### Frontend application

We can create the application which is able to CRUD with our created database by interact from the front end website and users are also able to signup, login, signout. Our application is also responsive and has variety function such as dropdown, accordion, alert, etc.

### Backend application

We can create our own database that is able to CRUD from frontend and export the database as a API and JSON format. Our website is also define the authorization to access the database.

## What left?

### Frontend application

We want our app to have more features such as table filter, other dash board style and more dynamics.

### Backend application.

We want to create a group or event that allow many user the access and CRUD the same event
