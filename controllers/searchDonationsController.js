const db = require('../models')

module.exports = {

  // GET all Donations of a specific item_CategoryID
  findAll: function(req, res) {
      db.Donation.findAll({
        where: { item_categoryID: req.params.item_categoryID }
      })
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err));
  }
};