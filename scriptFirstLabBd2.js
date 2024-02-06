//Copyright (C), 2023-2024, bl33h
//FileName: lab1
//Author: Sara Echeverria
//Version: I
//Creation: 18/01/2024
//Last modification: 20/01/2024

// 1
db.recipes.find() 

// 2
db.users.find()

// 3
db.recipes.insertOne(
    {
        title: "myRecipe",
        desc: "this is my recipe.",
        cook_time: 10
    }

)

// 4
db.recipes.find(    {
        title: "myRecipe",
        desc: "this is my recipe.",
        cook_time: 10
    }
)

// 5
db.recipes.find({}, {title: 1, cook_time: 1, _id: 0})

// 6
db.recipes.find({}, {title: 1, cook_time: 1, _id: 0}).sort({cook_time: -1})

// 7
db.recipes.update(
  { _id: ObjectId("5e6fd805fa98021236426a24") },
  {
    $push: { rating: 5 },
    $inc: { rating_avg: 0.5 }
  }
)
db.recipes.find({}, {title: 1, rating: 1, _id: 1, rating_avg:1})

// 8
db.recipes.update(
  { _id: ObjectId("5e6fd805fa98021236426a24") },
  { $pull: { ingredients: { name: "small flour tortillas" } } }
)

// 9
db.recipes.find({}, {title: 1, rating_avg: 1, _id: 0}).sort({rating_avg: -1}).skip(2).limit(1)

// 10
db.recipes.find({ comments: { $exists: true, $not: { $size: 0 } } }, { title: 1, comments: 1, _id: 0 })

// 11
db.recipes.find({ type: "Dessert" }, { title: 1, type: 1, _id: 0 })

// 12
db.recipes.find({ type: { $ne: "Easy" } }, { title: 1, type: 1, _id: 0 })

// 13
db.users.insertMany([
  {
    "firstName": "Elena",
    "lastName": "Gria",
    "email": "elenag@gmail.com",
    "password": "password"
  },
  {
    "firstName": "Nina",
    "lastName": "Uvu",
    "email": "ninau@gmail.com",
    "password": "password1"
  },
  {
    "firstName": "Romina",
    "lastName": "Saltzman",
    "email": "rominas@gmail.com",
    "password": "password2"
  }
])

// 14
db.users.update(
  { firstName: "Elena" },
  { $set: { favorite_recipe: "Chicken Soft Tacos" } }
)

db.users.update(
  { firstName: "Nina" },
  { $set: { favorite_recipe: "Pancakes" } }
)

db.users.update(
  { firstName: "Romina" },
  { $set: { favorite_recipe: "Brown Sugar Meatloaf" } }
)

// 15
db.users.distinct("firstName")

// 16
db.users.find({ email: /@gmail.com$/i }) // con gmail
db.users.find({ email: /@example.com$/i }) // con example

// 17
db.users.updateMany(
  { email: /@gmail.com$/ },
  { $set: { actividad: true } }
)

// 18
db.users.updateMany(
  { email: { $in: [/grace@navy.mil/i, /none@example.com/i] } },
  { $set: { actividad: false } }
)

// 19
db.recipes.updateMany(
{"ingredients.quantity.unit": "lbs"},
{$set: {"ingredients.$[elem].quantity.unit": "kg"}},
{arrayFilters: [{"elem.quantity.unit": "lbs"}]})

// 20
db.users.deleteMany({ actividad: false })
