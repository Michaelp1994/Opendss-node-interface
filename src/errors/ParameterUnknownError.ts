export class ParameterUnknownError extends Error {
  name: string;
  message: string;
  cause: any;
  constructor(message?: string) {
    super();
    if (message) this.message = message;
    // Object.setPrototypeOf(this, ParameterUnknownError.prototype);
  }
}
