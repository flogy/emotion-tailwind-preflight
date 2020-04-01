# emotion-tailwind-preflight

**💎 Merge the shiny TailwindCSS base styles into your CSS-in-JS project!**

You like the [base styles](https://tailwindcss.com/docs/adding-base-styles) from [TailwindCSS library](https://tailwindcss.com/)? But you also want to use the [Emotion](https://github.com/emotion-js/emotion) CSS-in-JS library? Then this library is for you.

The *emotion-tailwind-preflight* library contains the latest base styles from TailwindCSS, which they call **Preflight**.

The Preflight CSS is pulled from [TailwindCSS library](https://tailwindcss.com/) and parsed into emotion ready format.

[![npm](https://img.shields.io/npm/v/emotion-tailwind-preflight)](https://www.npmjs.com/package/emotion-tailwind-preflight)
[![GitHub license](https://img.shields.io/github/license/flogy/emotion-tailwind-preflight)](https://github.com/flogy/emotion-tailwind-preflight/blob/master/LICENSE)

## Usage

```sh
npm install --save emotion-tailwind-preflight
```


### JavaScript

```js
import { Global, css } from "@emotion/core";
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


## License

The [MIT License](LICENSE)


## Credits

The *emotion-tailwind-preflight* library is maintained and sponsored by the Swiss web and mobile app development company [Florian Gyger Software](https://floriangyger.ch).

Special thanks to [Infinum](https://infinum.co), the original creator of the quite similar library [emotion-normalize](https://github.com/infinum/emotion-normalize) on which this library is based on.
