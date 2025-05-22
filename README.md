# Create a npm library

This small project shows how to work with npm libraries locally. It's very useful for building your own libraries or for testing existing libraries.
And to learn how they work for knowledge or just for contribution. This example comes from Fernando Herrera from his YouTube channel (Recommended).

## Some steps:

- First we create the npm package, add the libraries we will be using for example eslint, typescript, etc..
- Then we build the library functionality and create different build distributions.
- Then we link the package locally by using `npm link` to link the package locally into our system.

## Test package

Once we have the package finished and linked locally we can test it in a project and link the package to the project
by running `npm link package-name` then we can import the package into our local project.

We can also watch the package changes by using `-- --watch` flag within our build command.
