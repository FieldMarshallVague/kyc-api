import express = require('express');
import { WebApi } from './web-api';
import { configure, getLogger } from 'log4js';

// logging

configure({
  appenders: {
    'out': { type: 'stdout', layout: { type: 'coloured' } },
    'app': { type: 'file', filename: 'application.log' }
  },
  categories: {
    'default': { appenders: ['out', 'app'], level: 'debug' },
  }
});

const log = getLogger();
log.debug("Starting Default Logger2...");

// server 

let port = Number(process.env.PORT) || 5001;
let api = new WebApi(express(), port);
api.run();

log.info(`listening on ${port}`);
