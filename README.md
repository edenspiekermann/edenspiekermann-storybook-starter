# ESPI React UI Library

This repository can be used alongside React projects to develop and documented all shared UI components in a separate environment.

Furthermore, we will port resuable components from the [espi-ui-library](https://github.com/edenspiekermann/espi-ui-library) to React and add them here to have a well-tested foundation of components for your next React project.

## How to install

If not already set up, install [nvm](https://github.com/creationix/nvm) and [yarn](https://yarnpkg.com/en/docs/install).


Then navigate to the folder you cloned this project into and enter:
```
nvm use && yarn 
```
This will install all necessary dependencies.

## How to develop

* `yarn storybook`: run local server with component library
* `yarn build-storybook`: build static production version of component library to `./build/storybook`
* `yarn test`: run unit tests and show coverage
* `yarn lint`: lint JS code
* `yarn lint:styles`: lint SCSS code
* `yarn sassdoc`: generate SCSS documentation to `./build/sassdoc`
* `yarn update-snapshots`: [update jest snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html) in case you intentionally changed the markup of your components

### Pre-commit Hooks

When attempting to commit files in this repository, some taks will automatically run to ensure a consistently high level of code quality:

* __JavaScript files (.js and .jsx):__
  * runs `eslint` and automatically fixes auto-fixable issues ([see related JS guidelines here](https://github.com/airbnb/javascript))
  * runs `prettier` and auto-formats your code ([see what it does here](https://github.com/prettier/prettier))
  * runs all unit tests concerning the committed files with `jest`

* __SASS files (.scss):__
  * runs `stylelint` and automatically fixes auto-fixable issues ([see related SASS guidelines here](https://sass-guidelin.es/))

If any of the tasks fail (which means your code does not lint or unit tests are failing), your commit will be aborted.
