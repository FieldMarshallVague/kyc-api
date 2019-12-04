import * as express from 'express';

let responseHeaders: express.RequestHandler = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {

  response.setHeader("Content-Type", "application/json");
  
  next();
}

export = responseHeaders;