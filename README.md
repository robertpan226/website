## Bootstrap

A bare bones web app featuring React, Flow, Babel, and Webpack.

### Features

- Setup with React
- Flow typing
- Package with Babel + Webpack
- JavaScript syntax transforms with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- Automated `index.html` with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- Development:
  - Live reloading server using [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- Production:
  - Minified JavaScript with [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)

### Building

```sh
npm start     # Run webpack-dev-server at localhost:8080
npm run build # Create production build into ./build
npm run serve # Serve ./build at localhost:8080
npm run test  # Run flow check
```

### Why?

I got tired of having to do the same setup when starting a new web app project. This repo is essentially my custom version of [create-react-app](https://github.com/facebook/create-react-app).
