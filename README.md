# Express Angular Node (EAN) Test API

The purpose of this project is to create a small web service that serves up a simple API for testing purposes. A further goal is to build it using Node.js and Express as a learning opportunity.

## Implementation

This project is comprised of a Node.js/Express web service and an Angular 4 front end.

## Prerequisites

* [Node.js](https://nodejs.org/en/) (v6.11.1)
* [Angular CLI](https://github.com/angular/angular-cli) (v1.2.1)

## Installation

Run `npm install` to install the node module dependencies.

## Build

Run `ng build` to build the Angular portion of the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Usage

To lauch the app run `npm start`.

## API

The web service has one endpoint:

### GET /api/teams

#### Input

This endpoint accepts no parameters

#### Output

A list of teams. Each team contains:

* Id (integer)
* Name (string)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
