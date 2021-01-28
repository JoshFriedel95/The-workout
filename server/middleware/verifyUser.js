module.exports = {
    isAuthenticated(req, res, next) {
    if(req.session.user && req.session.user.isAuthenticated){
        res.status(403).send({err:'Please log in to use this feature'})
    } else {
        return next()
    }
  }  
}