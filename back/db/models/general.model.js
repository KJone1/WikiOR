const { Model } = require("objection");

class ERR extends Model {
  static get tableName() {
    return "errors";
  }
}

module.exports = ERR;
