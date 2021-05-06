# test-single-spa
This is a simple single-spa microfrontend app built with React &amp; TypeScript. It's purpose is to demonstrate an error experienced whereby Webpack HMR only detect changes to our SCSS files the first time but thereafter fails to detect or re-render any further changes during local development.

# replicating the issue
To replicate the issue, simply run an `npm install` and then `npm run start:standalone`. Once running, navigate to the FormHeader.scss file and change the background colour. You will notice Webpack HMR re-renders the first set of changes but none thereafter.
