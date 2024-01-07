interface IErrorResponse {
  statusCode: number;
  message: string;
  errorMessage: string;
  errorDetails: Record<string, unknown> | null;
  stack: string | null;
}

export default IErrorResponse;
