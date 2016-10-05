# JavaScript Module Bundling Comparison

## Overview
- compares the popular module bundlers of today (**October 2016**)
  using the latest versions (includes betas)
- see the underlying structural differences and similarities between each bundler
- `import { get } from 'lodash'` imports every lodash function along with it, while
  `import get from 'lodash/get'` imports just the one function. This is the reason why
  both main and direct importing are tested.

## The program
1. `src/index.js` imports fn1()...8() using ES6 modules
2. executes fn1()...8()
3. all functions call `lodash.get()`
4. fn9() is imported and called from fn8()
5. fn10() is imported but not called from fn8() (tree-shakeable)
6. `console.log`s fn1()...9()

## Stats (ordered by size desc)
### Main import
```sh
bundle-jspm.js 554K
bundle-browserify.js 525K
bundle-browserify-rollup.js 523K
bundle-webpack.js 473K
bundle-rollup.js NONE (cannot import lodash directly)
```
### Direct import
```sh
bundle-jspm.js 45K
bundle-webpack.js 43K
bundle-browserify.js 37K
bundle-browserify-rollup.js 30K
bundle-rollup.js 29K
```

## Notes
- Rollup struggles with non-ES6 modules; `import { get } from 'lodash'` does not load `get` into the
  bundle, but `import { get } from 'lodash-es'` does.

## To run
- `npm run <script>` one of the scripts found in `package.json`
- `ls -lah -S -R dist/* | awk '{print $9, $5}'` to read the bundle filesizes, ordered by size desc

##### Basically Nolan Lawson's [Rollup Comparison](https://github.com/nolanlawson/rollup-comparison), but with a lodash dependency and an unused export.
