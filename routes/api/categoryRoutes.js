const router = require('express').Router();
const Category = require('../../models/Category');


// GET all categories
router.get('/', (req, res) => {
    Category.findAll()
        .then(categoryData => res.json(categoryData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

module.exports = router;