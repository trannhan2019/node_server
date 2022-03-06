const db = require('../models/index');
const { Op } = require('sequelize');
//const tutorialService = require('../services/tutorialService')

//CODE MAU HOI DAN IT
// const getAll = async (req, res) => {
//   let result = await tutorialService.getAll;
//   return res.json(result);
// };

// const create = async (req, res) => {
//   let result = await tutorialService.create(req.body);
//   return res.json(result);
// };

//CODE MAU BEZKODER
const getAll = (req, res) => {
  const title = req.query.title;
  let condition = title
    ? { title: { [Op.like]: `%${title}%` } }
    : null;
  db.Tutorial.findAll({ where: condition })
    .then((data) => {
      res.status(200).send({
        errCode: 0,
        errMessage: 'OK',
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        errCode: 1,
        errMessage:
          err.message ||
          'Some error occurred while retrieving tutorials.',
      });
    });
};

const create = (req, res) => {
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  db.Tutorial.create(tutorial)
    .then((data) => {
      res.send({
        errCode: 0,
        errMessage: 'OK',
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        errCode: 1,
        errMessage:
          err.message ||
          'Some error occurred while creating the Tutorial.',
      });
    });
};

const edit = (req, res) => {
  let id = req.params.id;
  db.Tutorial.update(
    {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((data) => {
      res.send({
        errCode: 0,
        errMessage: 'OK',
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        errCode: 1,
        errMessage:
          err.message ||
          'Some error occurred while update the Tutorial.',
      });
    });
};

module.exports = {
  create,
  getAll,
  edit,
};
