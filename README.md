# ESPI Storybook Starter

This repository can be used alongside React projects to develop and documented all shared UI components in a separate environment.

## How to install

If not already set up, install [nvm](https://github.com/creationix/nvm) and [yarn](https://yarnpkg.com/en/docs/install).


Then navigate to the folder you cloned this project into and enter:
```shell
nvm use && yarn 
```
This will install all necessary dependencies.

## How to develop

Clone this repository and start adding components. On the repository for the web site that will include the components, add this repository as a dependency in your `package.json`. If you don't publish your component library via `npm`, you can [link to the Git Repository directly](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies).


### Adding a new Component

All components should be placed in the folder `/components` in their own subfolder.

A component typically consists of:

* A `componentName.jsx` file containing the React component as a default export. Be sure to include [prop types and default props](https://reactjs.org/docs/typechecking-with-proptypes.html) for the component.
* A `componentName.stories.js` file containing the [stories](https://storybook.js.org/basics/writing-stories/) for this component. A story reflects a variant of the component that is documented on an individual page in Storybook.
* A `componentName.test.js` file containing all unit tests for the component
* A `README.md` containing the documentation for this component in Markdown format
* A `componentName.scss` file containg all styles for the components
* A file containing the snapshots generated from the stories of this component. This will be taken care of automatically and placed in a separate folder so you don't need to care about it.

_(Replace componentName with the name of your component written in camel case accordingly)_

__Please ensure to follow these naming conventions as all related build processes are set up to recognize files following the naming scheme.__ If you did successfully, a documentation page for the component will show up when you run Storybook. 

In order to import your React component easily in other repositories, add it as named export to the `components/index.js` file. Optionally, you can also add an `index.js` file in your component subfolder.

In your target application, you can then import the component like this:

```javascript
import { Button } from 'espi-storybook-starter'; // replace the name of your repository accordingly
```

### Available Tasks

* `yarn storybook`: run local server with the Storybook component library
* `yarn build-storybook`: build static production version of component library to `./build/storybook`
* `yarn test`: run unit tests and show coverage
* `yarn lint`: lint JS code
* `yarn lint:styles`: lint SCSS code
* `yarn sassdoc`: generate SCSS documentation to `./build/sassdoc`
* `yarn update-snapshots`: [update jest snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html) in case you intentionally changed the markup of your components

### Pre-commit Hooks

When attempting to commit files in this repository, some tasks will automatically run to ensure a consistently high level of code quality:

* __JavaScript files (.js and .jsx):__
  * runs `eslint` and automatically fixes auto-fixable issues ([see related JS guidelines here](https://github.com/airbnb/javascript))
  * runs `prettier` and auto-formats your code ([see what it does here](https://github.com/prettier/prettier))
  * runs all unit tests concerning the committed files with `jest`

* __SASS files (.scss):__
  * runs `stylelint` and automatically fixes auto-fixable issues ([see related SASS guidelines here](https://sass-guidelin.es/))

If any of the tasks fail (which means your code does not lint or unit tests are failing), your commit will be aborted.

### Modern JavaScript Transpilation

You can use any modern JavaScript in your components that can be automatically transpiled. The Babel configuration is set up to recognize ES2017 and beyond. Be aware that if you use non-transpilable modern JavaScript functions like `Object.entries` or similiar, you need to [manually](https://github.com/babel/babel/tree/master/packages/babel-polyfill) or [automatically](https://polyfill.io/v2/docs/) include a polyfill in your target repository so that browsers can understand your code.

