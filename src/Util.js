const cleanData = (data => {
  const cleanFish = data.map(fish => ({
    name: fish["Species Name"],
    background: fish["Quote Background Color"],
    benefits: fish["Health Benefits"],
    color: fish["Color"],
    gallery: fish["Image Gallery"],
    id: (id || 0) + 1,
    illustration: fish["Species Illustration Photo"],
    location: fish["Location"],
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