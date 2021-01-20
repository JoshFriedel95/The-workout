const bcrypt = require('bcryptjs')
module.exports = {
    register: async(req,res) => {
        const db = req.app.get('db')
        const {email, username, password, profile_pic} = req.body

        const [existingUser] = await db.users.find_users_by_username([username])
        if(existingUser){
            return res.status(409).send('Username is taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.users.create_users([email, username, hash, profile_pic])
        req.session.user = newUser

        res.status(200).send(newUser)
    },
    login: async(req,res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const [existingUser] = await db.users.find_users_by_username([username])

        if(!existingUser){
            return res.status(404).send('User does not exist')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password)
        if(!isAuthenticated){
            return res.status(403).send('Incorrect username or password')
        }
        delete existingUser.password
        req.session.user = existingUser
        res.status(200).send(existingUser)
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        }else{
            res.status(404).send('No session found')
        }
    },
    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}