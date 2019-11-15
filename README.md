# emotion-tailwind-preflight

Preflight file as used in [TailwindCSS base styles](https://tailwindcss.com/docs/adding-base-styles) for [Emotion](https://github.com/emotion-js/emotion) CSS-in-JS library.

The original CSS is pulled from [TailwindCSS library](https://tailwindcss.com/), and parsed into emotion ready format.

## Usage

```sh
npm install --save emotion-tailwind-preflight
```

### JavaScript

```js
import { Global, css } from "@emotion/core";
import emotionTailwindPreflight from 'emotion-tailwind-preflight';

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

## License

The [MIT License](LICENSE)

## Credits

emotion-tailwind-preflight is maintained and sponsored by the Swiss web and mobile app development company [Florian Gyger Software](https://floriangyger.ch).

Special thanks to [Infinum](https://infinum.co), the original creator of the quite similar library [emotion-normalize](https://github.com/infinum/emotion-normalize) on which this library is based on.
