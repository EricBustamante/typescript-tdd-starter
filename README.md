# Guide to Setup Typescript Project for TDD
Describes how to start a Test-Driven Development (TDD) project using Typescript with the essential components.

## Setup

1. Install Node and NPM, preferably the LTS version. See [How to install Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).
2. Create a `package.json` file. The [npm-init](https://docs.npmjs.com/cli/v10/commands/npm-init) command is recommended, example: `npm init -y`.
3. Install the development dependencies: `npm i -D @tsconfig/node20 @types/chai @types/mocha @types/node @types/sinon chai@4 mocha sinon ts-node typescript`.
4. Configure the `tsconfig.json` file to extend the installed `@tsconfig/node20` base file. **NOTE**: Change this dependency according to your Node.js version, see [tsconfig/bases](https://github.com/tsconfig/bases).
5. Configure the `test` and `test:watch` scripts in the `package.json` file.
6. (Optional) Use the example `src` and `spec` files to verify that the setup was correct. Additionally, Mocha can be set up using the example `.mocharc.yaml` included in this repository.

**IMPORTANT**: For Chai.js version 4 is used because version 5 requires ESM, which is not compatible with some features of Mocha such as Watch Mode. See [Mocha - Current Limitations](https://mochajs.org/#current-limitations).

## Verify

Execute a single test run with: `npm test`.

It is recommended to develop following TDD by executing `npm run test:watch`. This allows for a faster testing cycle.