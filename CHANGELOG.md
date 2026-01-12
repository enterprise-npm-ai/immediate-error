# Changelog

All notable changes to this project will be documented in this file.
Noitce: ai generated this changelog, so it might not be completely accurate.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [10.0.2]
- Removed `number-zero` dependency

## [10.0.0]
### Added
- Domain specific errors: `FruitConsumptionError`, `VegetablesCannotTalkError`, and `PersonNotHungryError`

## [9.0.1]
### Changed
- This changelog
- package.json description

## [9.0.0]
### Added
- `getError` function to get robustly cached errors

### Changed
- Internal logic to get errors to be more robust
- Removed dependency problem

## [8.1.0]
### THIS VERSION IS DEPRECATED: Dependency problem

### Added
- This changelog

## [8.0.0] 
### THIS VERSION IS DEPRECATED: Dependency problem

### Added
- "use struct" directive for struct mode
- Dependencies: `is-`, `n0p3-es2015-cjs`, `deep-freeze-node3`, `@uppercase-letters/e`, `@uppercase-letters/o`, `@uppercase-letters/r`, `@rightpad/concat`, `as-array`
- `CreateError` helper function
- Improved error construction using functional programming utilities

### Changed
- Default error message now constructed using `concat` with uppercase letters
- Updated dependencies versions
- Simplified test file

### Removed
- `es-object-atoms`, `true-value`, `yanoop` dependencies

## [7.2.0] 
### THIS VERSION IS DEPRECATED: Dependency problem

### Changed
- Minor adjustment in vm.Script args formatting

### Updated
- `@positive-numbers/zero` to `^4.0.0`

## [7.1.0] 

### Changed
- Replaced `get-intrinsic` with `es-intrinsic-cache`

## [7.0.0] 

### Added
- Support for `EvalError` and `URIError`
- `es-error-intrinsics` for better error handling
- `bail` for error throwing
- Stack trace capture using `Error.captureStackTrace`

### Changed
- Error types: Removed `AggregateError`, `AssertionError`, `NativeAssertionError`; Added `EvalError`, `URIError`
- Updated API to use `bail` in vm context
- Repository URL changed to `in-fp`
- Author changed to "10x'ly Made"

### Removed
- `assert-fn`, `es-object-atoms`, `number-zero` dependencies
- Some keywords from package.json

### Updated
- Tests to reflect new error types

## [6.4.0] 

### Added
- Functional programming refactor using `switch-in-fp`, `construct-new`, `attempt-statement`
- `@positive-numbers/*` dependencies for numbers
- Jest tests
- TypeScript definitions (`index.d.ts`)

### Changed
- Major code refactor to FP style
- Dependencies updated to scoped packages
- Description changed to "throw errors in fp"
- Test script added
- Keywords updated with FP and other terms

### Removed
- Old dependencies replaced with new ones

## [6.3.0] 

### Changed
- Code formatting and indentation
- License changed to "Unlicense"
- Removed some dependencies: `if`, `noop10`, `se7en`, `the-number-one`, `two`, `vanilla-javascript`

### Removed
- "why?" section from README

## [6.2.0] 

### Changed
- Simplified code structure
- Updated vm script logic
- Removed dependencies: `bail`, `esm-wallaby`, `picocolors`

### Added
- `has-self-equality`, `noop10` dependencies

## [6.1.0]
### THIS VERSION IS DEPRECATED: Versions 5.0.0 through 6.1.0 are deprecated due to an internal Node.js error caused by esm-wallaby. Please upgrade to a newer version.

### Added
- `AggregateError` support
- Updated README with `AggregateError` example
- Updated TypeScript definitions

## [6.0.0] 
### THIS VERSION IS DEPRECATED: Versions 5.0.0 through 6.1.0 are deprecated due to an internal Node.js error caused by esm-wallaby. Please upgrade to a newer version.

### Added
- `AggregateError` to error types
- `get-intrinsic` for intrinsics

### Changed
- Error types mapping
- Removed some dependencies: `jquery*`, `successor`, `vanilla-javascript`

### Updated
- `es-errors` to `^1.3.0`

## [5.1.1] 
### THIS VERSION IS DEPRECATED: Versions 5.0.0 through 6.1.0 are deprecated due to an internal Node.js error caused by esm-wallaby. Please upgrade to a newer version.

### Changed
- Replaced `cli-color` with `picocolors`

## [5.1.0] 
### THIS VERSION IS DEPRECATED: Versions 5.0.0 through 6.1.0 are deprecated due to an internal Node.js error caused by esm-wallaby. Please upgrade to a newer version.

### Changed
- Description updated to "Throw errors, better."

## [5.0.0] 
### THIS VERSION IS DEPRECATED: Versions 5.0.0 through 6.1.0 are deprecated due to an internal Node.js error caused by esm-wallaby. Please upgrade to a newer version.

### Added
- `esm-wallaby` for ESM requiring
- `bail` for error throwing

### Changed
- Updated vm script to use `bail` with random logic

## [4.0.0] 

### Added
- ES modules export style
- Support for custom error classes
- `es-errors` for proper error constructors
- TypeScript definitions
- More error types: `BaseError`, `AssertionError`, `AggregateError`, `NativeAssertionError`

### Changed
- Major API change: `immediateError(message, errorType)`
- Removed `fox` dependency
- Updated README with new usage
- License to "Unlicense"

### Removed
- Old dependencies

## [3.1.3] 

### Added
- `FuckingError` class
- More number dependencies for error type values
- Updated README with `FuckingError` example

## [3.1.2] 

### Changed
- Removed console.log from vm script

## [3.1.1] 

### Removed
- `integer-value-positive-zero` dependency

## [3.1.0] 

### Added
- Many new dependencies for numbers, jQuery, etc.
- Complex vm context with random error throwing
- Updated README

### Changed
- Default message to aggressive one
- Error creation using packages for numbers

## [3.0.0] 

### Added
- Repository, keywords, author info
- Many dependencies: `vanilla-javascript`, `vapor-js-npm`, etc.
- vm context for error throwing

### Changed
- Description to "Immediate-error"
- Major code changes with more complexity

## [2.1.0] 

### Added
- ERROR object with multiple error types
- eval-based error throwing

### Changed
- License to "UNLICENSED"
- Removed dependencies

### Updated
- README with more examples

## [2.0.0] 

### Changed
- Simplified to throw `new Error(message)` with default message (logic that makes sense)
- Updated README example

## [1.0.1] 

### Changed
- Author to "tj-commits/87f"

## [1.0.0] 

### Added
- README.md with usage
- Self-dependency (circular?)

### Changed
- Version to 1.0.0

## [0.0.1] 

### Added
- Initial release
- Basic index.js that requires 'fox', which is a pure ESM module, so it would throw an error since the package is CommonJS
- package.json with basic info