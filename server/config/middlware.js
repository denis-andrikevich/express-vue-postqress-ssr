import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import compression from 'compression';
import errorHandler from 'errorhandler';
import morgan from 'morgan';

export default function (app) {

  const environment = process.env.NODE_ENV || 'development';

  if (environment === 'production') {
    app.use(compression())
  } else if (environment === 'development') {
    app.use(errorHandler())
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(methodOverride())
  app.use(morgan('combined'))
};