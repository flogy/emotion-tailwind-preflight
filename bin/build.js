#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const tailwindcssBase = path.join('./node_modules/tailwindcss', 'dist/base.css');
const readStream = fs.readFileSync(tailwindcssBase, 'utf8');
const regex = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
const preflight = readStream.replace(regex, '').replace(/^\s*\n/gm, '');

const contents = `import { css } from '@emotion/core';

const preflight = css\`
${preflight}\`;

export default preflight;`;

fs.writeFileSync('./src/index.js', contents);
