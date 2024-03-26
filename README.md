# Dad Joke Generator Project

This repository contains a simple Dad Joke Generator project implemented in JavaScript. The primary objective of this project is to gain familiarity with configuring webpack, including transpiling TypeScript files and establishing a development environment.

## Project Overview

The project comprises a JavaScript file (`main.js`) responsible for fetching random dad jokes from the [icanhazdadjoke](https://icanhazdadjoke.com/) API using the `fetch` API. The API interaction is encapsulated within a class named `JokeAPiRepository`, which applies the singleton pattern to ensure only one instance of the class is created.

## Technologies Used

- JavaScript
- TypeScript
- Webpack
- HTML
- CSS

## Webpack Configuration

Webpack serves as a module bundler for JavaScript applications, facilitating bundling and building processes. Here are the loaders utilized in the webpack configuration:

- **ts-loader**: Transpiles TypeScript files to JavaScript, enabling webpack to comprehend and bundle TypeScript files.
- **style-loader**: Injects CSS styles into the DOM when a CSS file is imported into a JavaScript file.
- **css-loader**: Interprets `@import` and `url()` statements within CSS files, resolves them, and adds them as dependencies.
- **file-loader**: Handles file imports in JavaScript, such as images, by copying the file to the output directory and returning the public URL.

## How to Use

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run build`.
