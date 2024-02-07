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

// POST a category
router.post('/', (req, res) => {
    Category.create({
        category_name: req.body.category_name
    })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT update a category

router.put('/:id', (req, res) => {
    Category.update(req.body, {
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

// DELETE a category

router.delete('/:id', (req, res) => {
    Category.destroy({
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