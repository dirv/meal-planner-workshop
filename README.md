# meal-planner-workshop

This is material for a workhop teaching JavaScript, React and Test-Driven Development (TDD).

To get the most out of this workshop, *you will need working knowledge of git, GitHub and the command line*. If you're attending the workshop, please follow the Getting started section below before the workshop begins.

## Getting started

   1. Fork this repo on your own GitHub acccount.
   2. Clone your fork to your local machine.
   3. Ensure you meet the prerequisites by installing the software mentioned in the Prerequisites section below.
   4. Follow the steps in the Building section.

### Prerequisites

Ensure you have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com) installed on your machine. If you're on a Mac, you can do this quite easily if you have [Homebrew](https://brew.sh/) installed using the command:

    brew install node yarn

### Building

First of, install all dependencies:

    yarn install

Run the tests:

    yarn jasmine

You should see all tests passing (there will be a message saying "0 failures").

Now you can build the source using:

    yarn webpack

You should see a lot of green (maybe some yellow) but no red.

### Running

    node dist/server.js

You can then navigate to http://localhost:3000 to view the site.

## More information

### The server

In addition to the index page, the server responds to the following HTTP requests.

| Request | Description |
| ------- | ----------- |
| `GET  /recipes` | Get an array of recipe names |
| `POST /recipes` | Add a new recipe (see example JSON below) |
| `PUT  /recipe/:name` | Replace a recipe |
| `GET /ingredients` | Get an array of all ingredients |
| `GET /measures` | Get an array of all measures |

A recipe looks like this:

```json
{
  "name": "Toast",
  "ingredients": [{
    "name": "sliced bread",
    "amount": 2,
    "measure": "slice"
  },{
    "name": "butter",
    "amount": 1,
    "measure": "tablespoon"
  }],
  "instructions": "Cook bread in toaster, then spread butter. Serve warm.",
  "serves": 1,
  "preparationTimeInMins": 3
}
```
