# Use node v14

## Instructions

If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm), execute:

```shell
nvm install
nvm use
```

Or:

```shell
fnm install
fnm use
```

To install and launch the project, run these commands:

```shell
yarn
yarn start
```

### How to Use

- Open the `public/index.html` file and replace:

`<title>John Smith</title>` with `<title>Your Name</title>`.

- Open the `src/portfolio.js` file and make the necessary changes.

### Deployment

- In the `package.json` file, update:

`"homepage": "https://rjshkhr.github.io/cleanfolio"`

to `"homepage": "https://yourusername.github.io"`.

- Push the changes to your repository.

- To build and deploy, run the following commands:

```shell
yarn build
yarn deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
