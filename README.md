### Prerequisites

Ensure you have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com) installed on your machine. If you're on a Mac, you can do this quite easily if you have [Homebrew](https://brew.sh/) installed using the command:

    brew install node yarn

### Building

    yarn webpack

To run tests:

    yarn jasmine

### Running

    node dist/server.js

You can then navigate to http://localhost:3000 to view the site.

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
