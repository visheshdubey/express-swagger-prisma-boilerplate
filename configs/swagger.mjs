import swaggerAutogen from 'swagger-autogen';
// import { version } from '../package.json' assert { type: 'json' };

import { readFileSync } from 'fs';

const packageJsonPath = new URL('../package.json', import.meta.url);
const packageJsonContent = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const version = packageJsonContent.version;

const doc = {
  info: {
    version: version, // by default: '1.0.0'
    title: 'HyHeart - Backend Documentation', // by default: 'REST API'
    description: '', // by default: ''
  },
  servers: [
    {
      url: 'http://localhost:8000', // by default: 'http://localhost:3000'
      description: 'Main Server', // by default: ''
    },
    // { ... }
  ],
  tags: [
    // by default: empty Array
    // {
    //   name: 'Home', // Tag name
    //   description: 'It does nothing!', // Tag description
    // },
    // { ... }
  ],
  components: {}, // by default: empty object
};

const outputFile = '../src/generated/swagger-output.json';
const routes = ['./src/index.ts'];

// const options = {
//   openapi:          <string>,     // Enable/Disable OpenAPI.                        By default is null
//   language:         <string>,     // Change response language.                      By default is 'en-US'
//   disableLogs:      <boolean>,    // Enable/Disable logs.                           By default is false
//   autoHeaders:      <boolean>,    // Enable/Disable automatic headers recognition.  By default is true
//   autoQuery:        <boolean>,    // Enable/Disable automatic query recognition.    By default is true
//   autoBody:         <boolean>,    // Enable/Disable automatic body recognition.     By default is true
//   writeOutputFile:  <boolean>     // Enable/Disable writing the output file.        By default is true
// };

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);

//! This dosen't works
// swaggerAutogen()(outputFile, routes, doc).then(async () => {
//   await import('../src/index'); // Your project's root file
// });
