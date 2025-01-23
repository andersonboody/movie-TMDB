import { getNameAndIdItem } from '../../utils/utils'
import './AppItem.scss'

export const AppItem = ({ data }) => {
  const getUrlEnd = getNameAndIdItem(data.url)
  return (
    <div className="card">
      <img src={`https://starwars-visualguide.com/assets/img/${getUrlEnd}.jpg`} alt="photo" className="card__img" />
      <div className="card__description">
        <p className="card__text">
          Имя - <span className="card__text--light">{data.name}</span>
        </p>
        <p className="card__text">
          Гендер - <span className="card__text--light">{data.gender}</span>
        </p>
        <p className="card__text">
          Цвет волос - <span className="card__text--light">{data.hair_color}</span>
        </p>
        <p className="card__text">
          Вес - <span className="card__text--light">{data.mass}</span>
        </p>
      </div>
    </div>
  )
}
