# Aglet Cartographer

Map making lib for [Aglet.io](http://aglet.io)

## Get Started

**install the package:**
`yarn add @aglet/cartographer`

<!-- ### Usage -->
<!-- better docs needed -->

## Development

This project requires [Node.js](https://nodejs.org/en/). Ensure that you have node 8 or greater installed.

Clone repo: `git clone git@github.com:luetkemj/aglet-cartographer.git`

Install dependencies: `yarn`

This project uses [Storybook](https://storybook.js.org/) for development.

Start storybook: `yarn dev`

Navigate to `localhost:6006`

### Building

This project uses babel to transpile all javascript to es5 syntax and webpack to build a dist directory for publication.

Build for production: `yarn build`

Running the build script will remove the existing dist directory, run all linters and tests, and run webpack to build an es5 transpiled, uglified, bundle located in the dist directory.

## Tests

This project uses jest for unit tests, code coverage reports, and component snap shots.

To run tests in watch mode: `yarn test:watch`

To run lint all code and run all tests: `yarn test`

## Style guide

This project uses [eslint-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). Custom rules can be found in the [.eslintrc](https://github.com/luetkemj/aglet-cartographer/blob/master/.eslintrc) file included in this project.

eslint: `yarn lint:eslint`

This project uses [sass-lint](https://github.com/sasstools/sass-lint). Custom rules can be found in the [.sass-lint.yml](https://github.com/luetkemj/aglet-cartographer/blob/master/.sass-lint.yml) file included in this project.

sass-lint `yarn lint:sass-lint`

eslint and sass-lint: `yarn lint`

## Contributing

Contributions are welcome.

Find a bug? Open an [issue](https://github.com/luetkemj/aglet-cartographer/issues)!

Working on your first Pull Request? You can learn how from this free series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Licensing

[MIT License](https://github.com/luetkemj/aglet-cartographer/blob/master/LICENSE)
