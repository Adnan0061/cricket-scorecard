export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export class CustomError extends Error {
  code: string;
  status: number;

  constructor(error: ApiError) {
    super(error.message);
    this.code = error.code;
    this.status = error.status;
  }
}
