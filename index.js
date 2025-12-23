const GetIntrinsic = require("es-intrinsic-cache")
const $Object = require("es-object-atoms")
const zero = require("@positive-numbers/zero")
const one = require("@positive-numbers/one")
const two = require("@positive-numbers/two")
const three = require("@positive-numbers/three")
const four = require("@positive-numbers/four")
const five = require("@positive-numbers/five")
const six = require("@positive-numbers/six")
const noop = require("yanoop").noop
const bail = require("bail")
const { Switch } = require("switch-in-fp")
const vm = require("node:vm")
const construct = require("construct-new")
const attempt = require("attempt-statement")
const trueValue = require("true-value")

const $BaseError = require("es-error-intrinsics/Error")
const $EvalError = require("es-error-intrinsics/EvalError")
const $RangeError = require("es-error-intrinsics/RangeError")
const $ReferenceError = require("es-error-intrinsics/ReferenceError")
const $SyntaxError = require("es-error-intrinsics/SyntaxError")
const $TypeError = require("es-error-intrinsics/TypeError")
const $URIError = require("es-error-intrinsics/URIError")

const captureStackTrace = GetIntrinsic("%Error.captureStackTrace%", trueValue())

const default_error = "ERROR!"

const ErrorType = $Object.freeze({
  BaseError: zero,
  EvalError: one,
  RangeError: two,
  ReferenceError: three,
  SyntaxError: four,
  TypeError: five,
  URIError: six,
})

exports.immediateError = function immediateError(message = default_error, errorType = ErrorType.BaseError) {
  var error

  Switch(errorType)
    .case(ErrorType.BaseError, function () {
      error = construct({ target: $BaseError, args: [message] })
    })
    .case(ErrorType.EvalError, function () {
      error = construct({ target: $EvalError, args: [message] })
    })
    .case(ErrorType.RangeError, function () {
      error = construct({ target: $RangeError, args: [message] })
    })
    .case(ErrorType.ReferenceError, function () {
      error = construct({ target: $ReferenceError, args: [message] })
    })
    .case(ErrorType.SyntaxError, function () {
      error = construct({ target: $SyntaxError, args: [message] })
    })
    .case(ErrorType.TypeError, function () {
      error = construct({ target: $TypeError, args: [message] })
    })
    .case(ErrorType.URIError, function () {
      error = construct({ target: $URIError, args: [message] })
    })
    .else(function () {
      attempt(function () {
        error = construct({ target: errorType, args: [message] })
      }).rescue(function () {
        error = construct({ target: $BaseError, args: [message] })
      }).else(noop).ensure(noop).end()
    })
    .execute()

  if (captureStackTrace) {
    captureStackTrace(error, immediateError)
  }

  const context = {
    error: error,
    bail: bail
  }

  vm.createContext(context)

  const script = construct({ target: vm.Script, args: [`bail(error)`, { filename: default_error }] })

  script.runInContext(context)
}

exports.ErrorType = ErrorType
