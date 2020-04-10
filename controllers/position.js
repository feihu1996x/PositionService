const Position = require('../models/postion');

// Create
exports.createPosition = async (req, res) => {
    const position = new Position(
        {
            account: req.body.account,
            stock: req.body.stock,
            quantity: req.body.quantity,
            price: req.body.price
        }
    );
    try {
        await position.save();
        res.send('仓位记录添加成功');
    } catch (err) {
        console.error(err)
    }
}

// Read
exports.queryPosition = async (req, res) => {
    try {
        const result = await Position.find({
            account: req.params.account
        });
        res.send(result)
    } catch (err) {
        console.error(err)
    }
}

// Update
exports.updatePosition = async (req, res) => {
    try {
        await Position.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }
        );
        res.send('仓位记录更新成功')    
    } catch (err) {
        console.error(err)
    }
}

// Delete
exports.deletePosition = async (req, res) => {
    try {
        await Position.findByIdAndRemove(req.params.id);
        res.send('仓位记录删除成功');
    } catch (err) {
        console.error(err)
    }
}
