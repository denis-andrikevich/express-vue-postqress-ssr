import userRoute from './api/user/user.routes'

const routes = [
  {
    path: '/users',
    middleware: [],
    handler: userRoute
  }
]

export default routes
