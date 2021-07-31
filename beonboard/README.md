Static html pages with Webpack 5
## Prerequisites

- [Install `node` (comes with `npm`)](https://nodejs.org/). Suggested version expressed in [.nvmrc](./.nvmrc) file.

## Development

- `npm i` - install dependencies
- `npm start` - start development server
- `npm test` - run minimal tests (eg: lint javascript files)
- `npm run cy:run` - run Cypress functional/browser/e2e tests. Works only when running website locally (`npm start` or `npm run preview`)

## Production

- `npm run build` to prepare `html`, `css`, `js` files in `dist/` directory
- `npm run preview` - run build and serve production files locally

Production build is built on [Travis CI](https://travis-ci.com/ivarprudnikov/webpack-static-html-pages) and saved in [`gh-pages` branch](https://github.com/ivarprudnikov/webpack-static-html-pages/tree/gh-pages) which in turn is hosted through Github pages https://ivarprudnikov.github.io/webpack-static-html-pages/

## Credits

- @lifenautjoe and his [webpack-starter-basic](https://github.com/lifenautjoe/webpack-starter-basic)
