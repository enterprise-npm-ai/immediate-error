"use struct" // struct mode!

const GetIntrinsic = require("es-intrinsic-cache")
const SimpleCache = require("simple-lru-cache")
const isdash = require("is-")
const noop = require("n0p3-es2015-cjs")
const bail = require("bail")
const vm = require("node:vm")
const construct = require("construct-new")
const attempt = require("attempt-statement")
const trueValue = require("true-value")
const asArray = require("as-array")
const deepFreeze = require("deep-freeze-node3") // 3rd iteration of deep-freeze-node.

const zero = require("@positive-numbers/zero")
const one = require("@positive-numbers/one")
const two = require("@positive-numbers/two")
const three = require("@positive-numbers/three")
const four = require("@positive-numbers/four")
const five = require("@positive-numbers/five")
const six = require("@positive-numbers/six")
const oneHundred = require("@positive-numbers/one-hundred")

const E = require("@uppercase-letters/e")
const O = require("@uppercase-letters/o")
const R = require("@uppercase-letters/r")

const concat = require("@rightpad/concat")

const $BaseError = require("es-error-intrinsics/Error")
const $EvalError = require("es-error-intrinsics/EvalError")
const $RangeError = require("es-error-intrinsics/RangeError")
const $ReferenceError = require("es-error-intrinsics/ReferenceError")
const $SyntaxError = require("es-error-intrinsics/SyntaxError")
const $TypeError = require("es-error-intrinsics/TypeError")
const $URIError = require("es-error-intrinsics/URIError")

const captureStackTrace = GetIntrinsic("%Error.captureStackTrace%", trueValue())

const default_error = concat(E, R, R, O, R, "!") // TODO: If an exclamation point package is created, use that here instead.

const ErrorType = deepFreeze({
  BaseError: zero,
  EvalError: one,
  RangeError: two,
  ReferenceError: three,
  SyntaxError: four,
  TypeError: five,
  URIError: six,
})

const ErrorMap = construct({
  target: SimpleCache,
  args: asArray({ maxSize: oneHundred }),
})

;(function () {
  ErrorMap.set(ErrorType.BaseError, $BaseError)
  ErrorMap.set(ErrorType.EvalError, $EvalError)
  ErrorMap.set(ErrorType.RangeError, $RangeError)
  ErrorMap.set(ErrorType.ReferenceError, $ReferenceError)
  ErrorMap.set(ErrorType.SyntaxError, $SyntaxError)
  ErrorMap.set(ErrorType.TypeError, $TypeError)
  ErrorMap.set(ErrorType.URIError, $URIError)
})()

function CreateError(error, message) {
  return construct({ target: error, args: asArray(message) })
}

exports.immediateError = function immediateError(
  message = default_error,
  errorType = ErrorType.BaseError
) {
  var error
  attempt(function () {
    error = CreateError(exports.getError(errorType), message)
  })
    .rescue(function () {
      attempt(function () {
        error = CreateError(errorType, message)
      })
        .rescue(function () {
          error = CreateError($BaseError, message)
        })
        .else(noop)
        .ensure(noop)
        .end()
    })
    .else(noop)
    .ensure(noop)
    .end()

  if (isdash.is(captureStackTrace)) {
    captureStackTrace(error, immediateError)
  }

  const context = {
    error: error,
    bail: bail,
  }

  vm.createContext(context)

  const script = construct({
    target: vm.Script,
    args: ["bail(error)", { filename: default_error }],
  })

  script.runInContext(context)
}

exports.getError = function getError(errorType) {
  return ErrorMap.get(errorType)
}

exports.ErrorType = ErrorType
