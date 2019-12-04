import * as express from 'express';
import { getLogger } from 'log4js';
import { WebHookService } from '../services/web-hook.service';

const cors = require('cors');
var whitelist = ['http://localhost:4200', 'http://localhost:5001']
var corsOptionsDelegate = function (req: any, callback: any) {
  let corsOptions: any;
  console.log('running cors delegate');

  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
      'origin': true,
      'optionsSuccessStatus': 200
    };
  } else {
    corsOptions = { origin: false };
    console.error('Not allowed by CORS');
  }

  callback(null, corsOptions);
}

// logs

const log = getLogger("default");
log.debug("Starting 'default' Logger...");

const webHookService = new WebHookService(log);

// routing
let router = express.Router();

// get

router.get('/', cors(corsOptionsDelegate), (request: express.Request, response: express.Response) => {
  const temp = webHookService.get("1");
  response.send(temp);
});

// post

router.post('/create', cors(corsOptionsDelegate), (request: express.Request, response: express.Response) => {
  const temp = webHookService.create(request.body);
  response.send(temp);
});

export = router;