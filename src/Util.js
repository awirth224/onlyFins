const cleanData = (data => {
  const cleanFish = data.map(fish => ({
    name: fish["Species Name"],
    gallery: fish["Image Gallery"],
    illustration: fish["Species Illustration Photo"],
    path: fish["Path"],
    calories: fish["Calories"],
    carbohydrates: fish["Carbohydrates"],
    cholesterol: fish["Cholesterol"],
    fat: fish["Fat, Total"],
    fiber: fish["Fiber, Total Dietary"],
    protein: fish["Protein"],
    serving: fish["Serving Weight"],
    sodium: fish["Sodium"],
    sugar: fish["Sugars, Total"],
    taste: fish["Taste"],
    texture: fish["Texture"]
  }))
  return cleanFish
})

export default cleanData