const db = require('../models')

module.exports = {

  // GET all Needs of a specific user
  findAll: function(req, res) {
      db.Need.findAll({
        where: { uid: req.params.uid }
      })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  },

  // CREATE a Need
  create: function(req, res) {
    db.Need.create({
      name: req.body.name,
      description: req.body.description,
      uid: req.body.uid,
      //uid: 3,
      item_categoryID: req.body.item_categoryID,
      type: req.body.type
    })
    .then(dbNeed => res.json(dbNeed))
    .catch(err => res.status(422).json(err));
  },

    // GET a Need to edit
    findById: function(req, res) {
      db.Need.findById({
        where: { id: req.params.id }
      })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  },

  // PUT updating Need
  update: function(req, res) {
    db.Need.update({
      description: req.body.description,
      name: req.body.name,
      item_categoryID: req.body.item_categoryID
    },
      { where: { id: req.params.id }
      })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  },

  // DELETE Need
  destroy: function(req, res) {
    db.Need.destroy({
      where: { id: req.params.id }
    })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  }

};