class UserController {
  getUsers (req, res, next) {
    const users = [
      {
        id: 1,
        name: 'Denis'
      },
      {
        id: 2,
        name: 'Vadim'
      },
      {
        id: 3,
        name: 'Oleg'
      }
    ]

    return res.status(200).json(users)
  }
}

const userCtrl = new UserController()
export default userCtrl
