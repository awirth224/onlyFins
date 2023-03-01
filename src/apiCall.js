const getFish = (path) => {
  const encoded = path.split().slice(11)
  const species = encoded || ''
  return fetch(`https://www.fishwatch.gov/api/species/${species}`)
    .then(response => response.json())
}


export default getFish