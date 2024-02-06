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

// GET a single category
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
        id: req.params.id
        }
    })
    .then(categoryData => {
        if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
        }
        res.json(categoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;