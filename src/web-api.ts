import * as express from 'express';
import router from './routes/api-router';
import requestLogger from './request-logger';
import responseHeaders = require('./response-headers');

const cors = require('cors');
// var whitelist = ['http://localhost:4200', 'http://localhost:5001']
// var corsOptions = {
//   origin: function (origin: any, callback: any) {
//     console.log(origin);
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   optionsSuccessStatus: 200
// }

export class WebApi {
  /**
   * @param app - express application
   * @param port - port to listen on
   */
  constructor(private app: express.Express, private port: number) {
    this.configureMiddleware(app);
    this.configureRoutes(app);
  }

  /**
   * @param app - express application
   */
  private configureMiddleware(app: express.Express) {
    // app.use(cors(corsOptions));
    app.use(cors());
    app.use(requestLogger);
    app.use(responseHeaders);
    app.use(express.json({limit: '1mb'}));
  }

  private configureRoutes(app: express.Express) {
    app.use("/api", router);
  }

  public run() {
    this.app.listen(this.port);
  }
}