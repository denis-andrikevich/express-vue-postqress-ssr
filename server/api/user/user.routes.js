import express from 'express'
import Controller from './user.controller'

const router = express.Router()

router.get('/', (...args) => Controller.getUsers(...args))

export default router
