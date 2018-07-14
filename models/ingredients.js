module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
      name: DataTypes.STRING,
  }, {
    // disable timestamps
    timestamps: false
  });

  Ingredient.associate = function(models){
    Ingredient.belongsToMany(models.Recipe, {
        through: "recipe_ingredients", foreignKey: "ingredientId"
    });
  };

  return Ingredient;
};