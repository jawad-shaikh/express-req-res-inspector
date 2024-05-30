declare module 'express-req-res-inspector' {
    import { Request, Response, NextFunction } from 'express';
  
    interface LogRequestOptions {
      requestTime?: boolean;
      requestUrl?: boolean;
      requestBody?: boolean;
      responseStatus?: boolean;
      responseTime?: boolean;
    }
  
    type LogRequest = (options?: LogRequestOptions) => (req: Request, res: Response, next: NextFunction) => void;
  
    const logRequest: LogRequest;
    export = logRequest;
  }