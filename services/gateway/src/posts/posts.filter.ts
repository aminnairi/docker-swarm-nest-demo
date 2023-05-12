import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";

export class PostsExceptionFilter implements ExceptionFilter {
  public catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    response.status(400).json({
      error: exception.response.data.message[0]
    });
  }
}
