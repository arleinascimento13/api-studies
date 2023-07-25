export class AppError {
  public readonly message: string;
  public readonly statusCode: string;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
