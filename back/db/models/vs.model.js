const { Model } = require("objection");

class VS extends Model {
  static get tableName() {
    return "vs";
  }
}

module.exports = VS;
