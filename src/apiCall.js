const getFish = () => {
  return fetch('https://www.fishwatch.gov/api/species')
    .then(response => response.json())
}

export default getFish