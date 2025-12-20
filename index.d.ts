export enum ErrorType {
  BaseError = 0,
  EvalError = 1,
  RangeError = 2,
  ReferenceError = 3,
  SyntaxError = 4,
  TypeError = 5,
  URIError = 6
}

export type CustomError = {
  new (message: string): never
}

export function immediateError(
  message: string, 
  errorType?: ErrorType | CustomError
): never