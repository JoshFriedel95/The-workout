module.exports = {
    createReview: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {title, content} = req.body
        const date = new Date

        if(!id){
            res.status(403).send('Please log in to access this feature')
        }else{
            db.vids.post_comment([id, title, content, date])
        }
        res.sendStatus(200)
    },
    readReviews: async (req,res) => {
        const db = await req.app.get('db')
        db.vids.read_all_comments()
        .then(reviews => res.status(200).send(reviews))
    },
    readReview: async(req,res) => {
        const db = await req.app.get('db')
        db.vids.specific_review()
        .then(review => res.status(200).send(review))
    },
    editReview: (req,res) => {
        req.app.get('db').vids.edit_comment(req.params.id, req.body.content)
        .then(() => res.sendStatus(200))
    },
    deleteReview: (req,res) => {
        req.app.get('db').vids.delete_comment(req.params.id)
        .then(_ => res.sendStatus(200))
    }
}