#Math.round10 polyfill

Inspired by [Decimal rounding polyfill by MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Decimal_rounding).

##Installation

Install using npm:

```bash
$ npm install round10
```

##Usage

Use in your project:

```bash
$ npm install --save round10
```

and in your code:

```javascript
require('round10').polyfill();
Math.round10(55.55, -1); // 55.6
```

##Check out the code:

```bash
$ git clone git@github.com:jhohlfeld/round10.git
$ cd round10
$ npm install
```

Test using [mocha](http://mochajs.org/):

```bash
$ npm install -g mocha
$ mocha test/test.js
```