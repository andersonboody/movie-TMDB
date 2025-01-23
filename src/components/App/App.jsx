import { useEffect, useState } from 'react'

import { getCategories, getDataList } from '../../services/services'
import AppHeader from '../AppHeader/AppHeader'
import AppCarousel from '../AppCarousel/AppCarousel'
import { AppList } from '../AppList/AppList'

function App() {
  const [categories, setCategories] = useState([])
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(Object.keys(result)))
  }, [])

  const getListData = async (value) => {
    const data = await getDataList(value)
    setDataList(data.results)
  }

  return (
    <>
      <AppHeader categories={categories} onListData={getListData} />
      <main>
        <div className="container">
          <AppCarousel />
          <AppList dataList={dataList} />
        </div>
      </main>
    </>
  )
}

export default App
