This folder contains configuration files for the Storybook, such as:

* `config.js`: this file contains the configuration of Storybook and all add-ons
* `addons.js`: all globally used storybook addons need to be imported here. Beware that the order of the 
* `.babelrc`: Storybook's own Babel config which is different from the own in the root folder that we need to transpile our components so that Node / npm can consume them
* `webpack.config.js`: a custom extension of Storybook's webpack config that we need to transpile our SCSS
import influences the order of the tabs in Storybook's bottom panel
* `storyshots.test.js`: this gets run by Jest and creates snapshots of all stories, the snapshots are placed in the subfolder `\_\_snapshots\_\_'
