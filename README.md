# JavaScript Module Bundling Comparison

## Overview
- compares and contrasts the popular module bundlers of today (**October 2016**)
- see the underlying structural differences between each bundler

## Steps
- `npm run <script>` one of the scripts found in `package.json`
- `du -sh dist/*` to read the bundle output filesize

## Stats
```sh
524K  dist/bundle-browserify-rollup.js
528K  dist/bundle-browserify.js
560K  dist/bundle-jspm.js
4.0K  dist/bundle-rollup.js
476K  dist/bundle-webpack.js
```

##### Basically the same as Nolan Lawson's [Rollup Comparison](https://github.com/nolanlawson/rollup-comparison) but with a lodash dependency and an unused export.
