import { useState } from 'react'

import { AppItem } from '../AppItem/AppItem'
import './AppList.scss'
import { getItemData } from '../../services/services'

export const AppList = ({ dataList }) => {
  const [dataItem, setDataItem] = useState([])

  const getDataItem = (value) => {
    getItemData(value).then((data) => setDataItem(data))
  }

  const getNameData = dataList.map((elem, index) => {
    return (
      <li className="list-group__item" key={index}>
        <button className="list-group__link" onClick={() => getDataItem(elem.url)}>
          {elem.name}
        </button>
      </li>
    )
  })
  return (
    <article className="list-data">
      <div className="list-data__list-group list-group">
        <ul className="list-group__list">{getNameData}</ul>
      </div>
      <div className="list-data__list-person list-person">
        <AppItem data={dataItem} />
      </div>
    </article>
  )
}
