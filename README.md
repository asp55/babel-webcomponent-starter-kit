# babel-webcomponent-starter-kit
A set of files to jump start building webcomponents

Uses Babel + babel-plugin-transform-html-import-to-string & babel-plugin-transform-scss-import-to-string to simplify the process of building web components.

Takes source files  `[index.js, template.html, styles.scss ]` and compiles them into a single javascript file containing the definition of your webcomponent.

# Getting Started 

1) Copy these files
2) Install dependencies
`yarn install`
3) Get building

When you're ready to compile, use the build script
`yarn build`
and your component will be compiled into index.js

If you want to live preview your changes, use the start script to watch for changes and live reload in browser.
`yarn start`