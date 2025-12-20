const { immediateError, ErrorType } = require('./index')
const assert = require('node:assert')

describe('immediateError utility', () => {

  // Basic Usage
  test('throws a regular Error with default message when no arguments are passed', () => {
    expect(() => immediateError()).toThrow(Error)
    expect(() => immediateError()).toThrow('ERROR!')
  })

  test('throws a regular Error with a custom message', () => {
    expect(() => immediateError('Aaaaah')).toThrow(Error)
    expect(() => immediateError('Aaaaah')).toThrow('Aaaaah')
  })

  // Native Error Types
  test.each([
    ['BaseError', ErrorType.BaseError, Error],
    ['EvalError', ErrorType.EvalError, EvalError],
    ['RangeError', ErrorType.RangeError, RangeError],
    ['ReferenceError', ErrorType.ReferenceError, ReferenceError],
    ['SyntaxError', ErrorType.SyntaxError, SyntaxError],
    ['TypeError', ErrorType.TypeError, TypeError],
    ['RangeError', ErrorType.URIError, URIError],
  ])('throws %s when specified', (name, type, constructor) => {
    expect(() => immediateError('test message', type)).toThrow(constructor)
  })
  // Custom Error Classes
  test('throws a custom user-defined Error class', () => {
    class MyCustomError extends Error {
      constructor(message) {
        super("Custom: " + message)
        this.name = "MyCustomError"
      }
    }

    expect(() => immediateError('Error!', MyCustomError)).toThrow(MyCustomError)
    expect(() => immediateError('Error!', MyCustomError)).toThrow('Custom: Error!')
  })
})