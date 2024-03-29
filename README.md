# emotion-tailwind-preflight

**💎 Merge the shiny TailwindCSS base styles into your CSS-in-JS project!**

You like the [base styles](https://tailwindcss.com/docs/adding-base-styles) from [TailwindCSS library](https://tailwindcss.com/)? But you also want to use the [Emotion](https://github.com/emotion-js/emotion) CSS-in-JS library? Then this library is for you.

The *emotion-tailwind-preflight* library contains the latest base styles from TailwindCSS, which they call **Preflight**.

The Preflight CSS is pulled from [TailwindCSS library](https://tailwindcss.com/) and parsed into emotion ready format.

[![npm](https://img.shields.io/npm/v/emotion-tailwind-preflight)](https://www.npmjs.com/package/emotion-tailwind-preflight)
[![GitHub license](https://img.shields.io/github/license/flogy/emotion-tailwind-preflight)](https://github.com/flogy/emotion-tailwind-preflight/blob/master/LICENSE)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/flogy/emotion-tailwind-preflight)

## Usage

```sh
npm install --save emotion-tailwind-preflight
```


### JavaScript

```js
import { Global, css } from "@emotion/react";
import emotionTailwindPreflight from "emotion-tailwind-preflight";

// ...

<Global
  styles={css`
    ${emotionTailwindPreflight}
    html,
    body {
      padding: 0;
      margin: 0;
      background: white;
      min-height: 100%;
      font-family: Helvetica, Arial, sans-serif;
    }
  `}
/>
```


## What do the base styles do

The TailwindCSS base styles are an opinionated set of CSS styles to smooth over cross-browser inconsistencies. They for example remove all default margins. Check out the [TailwindCSS documentation](https://tailwindcss.com/docs/preflight/) to see all detailed configurations.


## Development

### Gitpod

This repository supports the online IDE [Gitpod](https://gitpod.io/).


### Migrate to the latest Tailwind CSS base styles

Running `npm run update` will update to the latest Tailwind CSS version and copy the base styles to the `./src/index.js` file.

After that, a new build can be created using `npm run build` and released.


## License

The [MIT License](LICENSE)


## Credits

The *emotion-tailwind-preflight* library is maintained and sponsored by the Swiss web and mobile app development company [Florian Gyger Software](https://floriangyger.ch).

Special thanks to [Infinum](https://infinum.co), the original creator of the quite similar library [emotion-normalize](https://github.com/infinum/emotion-normalize) on which this library is based on.

If this library saved you some time and money please consider [sponsoring me](https://github.com/sponsors/flogy), so I can build more libraries for free and actively maintain them for you. Thank you 🙏
