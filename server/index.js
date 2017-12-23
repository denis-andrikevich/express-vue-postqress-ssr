import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import middlewares from './config/middlware'
import routes from './routes'

class App {
  constructor () {
    this.app = express()
    this.host = process.env.HOST || '127.0.0.1'
    this.port = process.env.PORT || 3000
    this.config = require('../nuxt.config')
    this.config.dev = !(process.env.NODE_ENV === 'production')
    this.nuxt = new Nuxt(this.config)
  }

  start () {
    middlewares(this.app)

    this.app.set('port', this.port)
    this.initRoutes()
    this.app.use(this.nuxt.render)

    if (this.config.dev) {
      const builder = new Builder(this.nuxt);
      builder.build()
    }

    this.app.listen(this.port, this.host)
    console.log('Server listening on ' + this.host + ':' + this.port) // eslint-disable-line no-console
  }

  initRoutes () {
    routes.forEach(route => {
      console.log(route)
      console.log(route.middleware)
      console.log(route.handler)
      this.app.use(`/api${route.path}`, route.middleware, route.handler)
    })
  }

}

const app = new App()
app.start()
