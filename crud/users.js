const models = require("../core/models");

// function for getting users from mongodb database
async function getUsersByTimestamp(skip, limit) {
  return await models.userModel.find().sort({_id:-1}).skip(skip).limit(limit);
}

async function getUserById(_id) {
  return await models.userModel.findById(_id);
}

module.exports = {
    getUsersByTimestamp: getUsersByTimestamp,
    getUserById: getUserById
};
