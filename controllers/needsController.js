const db = require('../models')

module.exports = {

  // GET all Needs of a specific user
  findAll: function(req, res) {
      db.Request.findAll({
        where: { uid: req.params.uid }
      })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  },

  // CREATE a Need
  create: function(req, res) {
    db.Request.create({
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
    findOne: function(req, res) {
      db.Request.findOne({
        where: { id: req.params.id }
      })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  },

  // PUT updating Need
  update: function(req, res) {
    db.Request.update({
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
    db.Request.destroy({
      where: { id: req.params.id }
    })
      .then(dbNeed => res.json(dbNeed))
      .catch(err => res.status(422).json(err));
  }

};