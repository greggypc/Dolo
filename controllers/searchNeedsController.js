const db = require('../models')

module.exports = {

  // GET all Donations of a specific item_CategoryID
  findAll: function(req, res) {
      db.Request.findAll({
        where: { item_CategoryID: req.params.item_CategoryID }
      })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  }
};