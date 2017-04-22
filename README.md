[![Build Status](https://travis-ci.org/pponugo/react-dev-ops.svg?branch=master)](https://travis-ci.org/pponugo/react-dev-ops)

# React - [SAMPLE] Asset Library
---

### Build Commands

- #### Install - ` npm install `
    - Install minimum dependencies that are required for development only.

- #### Lint - ` gulp lint `
    - Lint JS files (` gulp lint:scripts `)
    - Lint JSON Schema files
    - Lint SCSS/SASS files (` gulp lint:styles `)

- #### Formatting - `gulp format`
    - Auto correct lint errors and code format/style JS files
    - Auto correct format/style JSON Schema files
    - TODO - Auto format SCSS/SASS files

- #### Clean  - `gulp clean`
    - Clean all the build generated artifacts

- #### Test  - `gulp test`
    - Run the Unit Tests
    - Generate Code Coverage Report

- #### Build (JS) - `gulp buildJS`
    - Clean, format, lint and build JS

- #### Build (SCSS) - `gulp buildCSS`
    - Clean, lint and pre-process CSS

- #### Build - `gulp build`
    - Build JS and CSS

- #### Build Everything - `gulp buildALL`
    - Clean, format, lint, build, analyze and test all assets

- #### Analyze - `gulp analyze`
    - Count Number of CSS selectors
    - Analyze bundle size

- #### Publish - `gulp publish`
    - Build, Test and Analyze assets
    - Publish Node Modules to NPM/Sinopia

- #### Publish - `gulp republish`
    - Build, Test and Analyze assets
    - Unpublish Node Modules to NPM/Sinopia
    - Publish Node Modules to NPM/Sinopia

- #### Publish - `publish-server-only`
    - Build, Test and Analyze assets
    - Auto increment NPM version
    - Create GIT TAG with current version number
    - Publish Node Modules to NPM/Sinopia/Artifactory
    - Push latest code / tag to GIT repo
