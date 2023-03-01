const getAllFish = () => {
  return fetch('https://www.fishwatch.gov/api/species')
    .then(response => response.json())
}

const getSingleFish = (path) => {
  const endpoint = path.split("/")[1]
  return fetch(`https://www.fishwatch.gov/api/species/${endpoint}`)
    .then(response => response.json())
}

export {getAllFish, getSingleFish}