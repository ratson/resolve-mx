# resolve-mx

Resolve mail exchange records as promise.

## Installation

```
npm install resolve-mx --save
```

## Usage

<!-- eslint-disable strict,no-console -->

```js
const resolveMx = require('resolve-mx')

resolveMx('npmjs.com').then(records => {
  console.log(records)
})
/*
[ { exchange: 'aspmx.l.google.com', priority: 10 },
  { exchange: 'alt1.aspmx.l.google.com', priority: 20 },
  { exchange: 'alt2.aspmx.l.google.com', priority: 30 },
  { exchange: 'aspmx2.googlemail.com', priority: 40 },
  { exchange: 'aspmx3.googlemail.com', priority: 50 } ]
*/
```
