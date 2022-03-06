const db = require("../models/index");

const gettAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Tutorial.findAll();
      resolve({
        errCode: 0,
        errMessage: "New Tutorial created !",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const create = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.Tutorial.create({
        title: data.title,
        description: data.description,
        published: data.published ? data.published : false,
      });
      resolve({
        errCode: 0,
        errMessage: "New Tutorial created !",
        users,
      });
    } catch (error) {
      reject({
        errCode: 1,
        errMessage:
          error.message || "Some error occurred while retrieving tutorials.",
      });
    }
  });
};

module.exports = {
  create,
  gettAll,
};
