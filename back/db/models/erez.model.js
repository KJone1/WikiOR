const { Model } = require("objection");

class ERZ extends Model {
  static get tableName() {
    return "erez";
  }
}

module.exports = ERZ;
