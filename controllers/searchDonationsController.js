const db = require('../models')

module.exports = {

  // GET all Donations of a specific item_CategoryID
  findAll: function(req, res) {
      db.Donation.findAll({
        where: { item_CategoryID: req.params.item_CategoryID }
      })
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err));
  }
};