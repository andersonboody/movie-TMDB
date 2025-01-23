const getIdItem = (value) => {
  const idItem = parseInt(value.match(/\d+/))
  return idItem
}

const getNameAndIdItem = (value) => {
  try {
    return new URL(value).pathname.replace('/api/', '').slice(0, -1)
  } catch (err) {
    return err
  }
}

export { getIdItem, getNameAndIdItem }
