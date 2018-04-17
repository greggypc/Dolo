const db = require('../models')

module.exports = {

  // GET all Donations of a specific user
  findAll: function(req, res) {
      db.Donation.findAll({
        where: { uid: req.params.uid }
      })
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err));
  },

  // CREATE a Donation
  create: function(req, res) {
    db.Donation.create({
      name: req.body.name,
      description: req.body.description,
      uid: req.body.uid,
      //uid: 3,
      item_categoryID: req.body.item_categoryID,
      type: req.body.type
    })
    .then(dbDonation => res.json(dbDonation))
    .catch(err => res.status(422).json(err));
  },

  // PUT updating Donation
  update: function(req, res) {
    db.Donation.update({
      description: req.body.description,
      name: req.body.name,
      item_categoryID: req.body.item_categoryID
    },
      { where: { id: req.params.id }
      })
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err));
  },

  // DELETE Donation
  destroy: function(req, res) {
    db.Donation.destroy({
      where: { id: req.params.id }
    })
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err));
  }

};