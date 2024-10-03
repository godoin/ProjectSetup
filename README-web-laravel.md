# Laravel PHP Setup

## Objective

This branch provides a basic Laravel PHP project setup with pre-configured components and boilerplate code to kickstart my Laravel development.

## Features

- [ ] Authentication
    - [ ] Single Auth (e.g., user and guest roles)
    - [ ] Multi-Auth (e.g., user, admin or more roles).
        - [ ] Separate registration and login for different roles.
        - [ ] Middleware and authorization.
        - [ ] Guard configuration for each role.
- [ ] Frontend Scaffolding
    - [ ] Common UI Components
    - [ ] API Helpers
    - [ ] more?
- [ ] Backend Scaffolding
    - [ ] Single Auth 
        - [ ] User Model
        - [ ] User Database and Controller
        - [ ] Middleware and authorization.
        - [ ] CRUD Operations for user management
    - [ ] Multi Auth
        - [ ] Seperate Models.
        - [ ] Seperate Database and Controller
        - [ ] Middleware and authorization.
        - [ ] CRUD Operations for User Management.
    - [ ] User Profile 
        - [ ] View and Update Information.


## Requirements

-   PHP >= 8.10
-   Windows >= 8.1

## Installation

-   Open terminal and clone this repository using `git clone https://github.com/godoin/ProjectSetup` or `gh repo clone godoin/ProjectSetup`
-   Switch the repository using `git switch laravel-setup`.
-   Clone it to /htdocs (for xampp) or /www (for laragon)
-   Copy the `.env.example` and rename to `.env`
-   Fill the `.env` variables.
-   Generate the app key using `php artisan key:generate`
-   Ensure the following are active `mysql` and apache` are active.
-   Run database migrations using `php artisan migrate`
-   Run the server using `php artisan serve` and open using `http:127.0.0.1:8000`
-   If ever you do encounter routing, view or db problems use the following:
    -   use `php artisan optimize`
    -   use `php artisan migrate:fresh`
    -   rerun `php artisan serve`

## License

This project is under the MIT License.
