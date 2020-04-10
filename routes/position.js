const express = require('express');
const router = express.Router();

const positionController = require('../controllers/position');

router.post('/create', positionController.createPosition);
router.get('/:account', positionController.queryPosition);
router.put('/:id/update', positionController.updatePosition);
router.delete('/:id/delete', positionController.deletePosition);

module.exports = router;
