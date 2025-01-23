import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/'

const getCategories = async () => {
  try {
    const result = await axios.get(baseUrl)
    return result.data
  } catch (error) {
    return error
  }
}

const getPlanet = async () => {
  try {
    const result = await axios.get(`${baseUrl}planets/`)
    return result.data
  } catch (error) {
    return error
  }
}

const getDataList = async (value) => {
  try {
    const result = await axios.get(`${baseUrl}${value}/`)
    return result.data
  } catch (error) {
    return error
  }
}

const getItemData = async (value) => {
  try {
    const result = await axios.get(value)
    return result.data
  } catch (error) {
    return error
  }
}

export { getCategories, getPlanet, getDataList, getItemData }
