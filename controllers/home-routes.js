const router = require('express').Router();
// I can do this because of the index file within models folder
// we need models so that data is also rendered
const {Comments, Post, User} = require('../models');

router.get('/', (req, res) => {
    // we are using try so that if it breaks the entire app can still run
    try {
        const data = Post.findAll ({
            include: [User],
        });
        console.log (data);
        // creating a clean array off of the data variable array
        const posts = data.map((post) => {
            // converting every item in the data array into a workable object
            plain: true;
        } );
        console.log(posts);
        // handlebar will render the data
        res.render('posts', {posts})
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/post/:id', (req, res) => {
    Post.findByPk(req.params.id, {
        include: [User]
    })
    console.log(req);
})

module.exports = router;