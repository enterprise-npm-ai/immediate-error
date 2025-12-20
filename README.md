# `immediate-error`

This is a utility to throw an error in FP.

## Installation
```bash
$ npm install immediate-error
```

## Usage

```javascript

const { immediateError, ErrorType } = require('immediate-error')

immediateError() // this will throw a regular Error with the default message of "ERROR!"

immediateError('Aaaaah') // this will throw a regular Error with the message "Aaaaah"

immediateError('Aaaaah', ErrorType.BaseError) // does the same thing as above

immediateError('Range error', ErrorType.RangeError) // throws a RangeError

immediateError('Reference error', ErrorType.ReferenceError) // throws a ReferenceError

immediateError('Syntax error', ErrorType.SyntaxError) // throws a SyntaxError

immediateError('type error', ErrorType.TypeError) // throws a TypeError

class MyCustomError extends Error {
  constructor (message) {
    super("Custom: " + message)
  }
}

immediateError('Error!', MyCustomError) // throws a MyCustomError with the message "Error!" which in turn prints out "Custom: Error!" because we used our own error class

```
## License
Unlicense