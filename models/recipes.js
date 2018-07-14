module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
      name: DataTypes.STRING,
  }, {
    // disable timestamps
    timestamps: false
  });

  Recipe.associate = function(models) {
    Recipe.belongsToMany(models.Ingredient, {
      through: "recipe_ingredients", foreignKey: "recipeId"
    });
  };
      
  return Recipe;
};



// db.Recipe
//   .findOne({ 
//       where :{
//         id: req.params.id
//       }, 
//       include: [ db.Ingredients ]
//     })
//   .then( recipe => {
//     // recipe.Ingedients
//   } )



// I think this code is breaking the sequelize connection
// allowNull: false,
//       validate: {
//         len: [1, 20]
//       }
//     },
//     addIngredient: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true
//     }
//   }, {
//     // disable timestamps
//     timestamps: false
//   }

//   );