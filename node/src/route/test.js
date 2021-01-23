const router = require('express').Router();

const modelTest = require('../model/test');

router.get('/:id', async (req, res) => {
    const test = await modelTest.getTest(req.params.id);
    res.send(test);
});

router.post('/', async (req, res) => {
    const test = {
        name: req.body.name,
        value: req.body.value
    }

    try{
        const savedTest= await modelInterview.createTest(test);
        res.send(savedTest);
    } catch(err) {
          res.status(400).send(err);
    }
});

module.exports = router;