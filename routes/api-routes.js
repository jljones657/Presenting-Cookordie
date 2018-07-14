var db = require("../models");

module.exports = function(app) {
  

  //Route for creating Ingredients
  app.post("/api/ingredients/", function(req, res) {
    db.Ingredient.create(req.body).then(function(ingredient) {
      // res.json(dbRecipe);
      console.log(ingredient);
    });
  });

  //Route for getting Ingredients
  app.get("/api/ingredients", function(req, res) {
    db.Ingredient.findAll({}).then(function(ingredients) {
      res.json(ingredients)
    }).catch( err => res.json(err))
  });


  //Delete route for deleting ingredients
  // app.delete("/api/ingredients/:id", function(req, res){
  //   db.Ingredient.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(data) {
  //     res.json(data);
  //   });
  // });

  app.delete("/recipes/:id", function(req, res){
    db.Ingredient.destroy({
     where: {
       id: req.params.id
     }
   }).then(function(data) {
     res.json(data);
   });
   })

  // app.get("/api/recipes", function(req, res){
  //   db.Ingredient.findAll({
  //     include: [{
  //       model: db.Recipe,
  //       through: {
  //         where: { state: Sequelize.col("ingredient.state") }
  //       }
  //     }]
  //   })
  // });


  //find all the recipes associated with the entered ingredients
  // app.get("/api/recipes", (req, res) => {
  //   console.log('foo');
    // console.log(req.query);
    // db.Recipe.findAll({
        // where: {
        //     name: req.body.ingredient
        // },
        // include: [
        //     { model: db.Recipe },
        // ]
    // }).then(function(recipes){
    //   res.json(recipes);
    // }).catch( err => res.json(err));
    
    // .then((ingredient) => {
    //   // logic
    //     const results = {};

    //     const recipes = ingredient.Recipes;

    //     for (var i = 0; i < recipes.length; i++) {
    //       results[i] = recipes[i].name
    //     }

    //     res.json({
    //       recipes: recipes,
    //       results: results
    //     });
    //     console.log(results);
    //     // res.render("index", {info:results})
    // }).catch((err) => {
    //     res.json(err);
    // });

    
    // //Code that I want to use with handlebars
    
    
    
    
  // });

  // app.get("/", function(req, res){
  //   res.redirect("/recipes");
  // })
  app.get("/api/recipes/", function(req, res) {
   db.Recipe.findAll({
     where: {
       id: {
         $in : req.query.ingredients
       }
     }
   }).then(function(recipe) {
    // res.render("index", { recipe:recipe })
    //  console.log(recipe);
     res.json(recipe);
   }).catch(function(err) {
     console.error(err);
   });
  });

  // app.get("/recipes",function(req, res) {
  //   db.Recipe.findAll({
  //     include:[{
  //       model: db.Ingredient,
  //       // as: "IngredientsInRecipe",
  //       all: true
  //         // },{
  //         //   model: Recipe,
  //         //   as: "RecipeWithIngredients",
  //         //   all: true,
  //         //   through: {attributes:[]}
  
  //         // }
  //     }]
  //   }).then(function(recipe){
  //       res.render("index", { recipe:recipe })
  //       // console.log(recipe);
  //   })
  // })

}


// in our HTML doc
// {/* <input type="checkbox" class="ingredient-check" value="id">

// // in our JS document
// var ingredientsArray = [];

// $('.ingredient-check').on('change', function(e) {
//     var ingredientId = e.target.value;
//     ingredientsArray.push(ingredientId);
// });

// // ingredientsArray = [1, 2, 5, 8];

// $.ajax({
//   url: '/api/recipes/' + ingredientsArray[0] + '/' + ingredientsArray[1]
// }) */}