import { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import axios from 'axios'

import './AppCarousel.scss'
import { getPlanet } from '../../services/services'
import { AppLoading } from '../ui/ui'
import { getIdItem } from '../../utils/utils'

const AppCarousel = () => {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPlanet = async () => {
      setLoading(true)
      try {
        const resolve = await getPlanet()
        const planetData = resolve.results.slice(0, 5)

        const getPeopleAndFilms = await Promise.all(
          planetData.map(async (elem) => {
            const arrNamePeople = await Promise.all(
              elem.residents.map(async (url) => {
                const resultName = await axios.get(url)
                return resultName.data.name
              })
            )
            const arrNameFilm = await Promise.all(
              elem.films.map(async (url) => {
                const resultTitle = await axios.get(url)
                return resultTitle.data.title
              })
            )
            return { ...elem, residents: [...arrNamePeople], films: [...arrNameFilm] }
          })
        )
        setPlanets(getPeopleAndFilms)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPlanet()
  }, [])

  const planetItem = planets.map((elem, index) => {
    return (
      <div key={index}>
        <div className="carousel__item">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${getIdItem(elem.url)}.jpg`}
            alt="planet"
            className="carousel__img"
          />
          <div className="carousel__details">
            <div>
              <p className="carousel__details-name">
                Имя планеты - <span className="carousel__details-name--light">{elem.name}</span>
              </p>
              <p className="carousel__details-name">
                Диаметр планеты - <span className="carousel__details-name--light">{elem.diameter}</span>
              </p>
              <p className="carousel__details-name">
                Население планеты - <span className="carousel__details-name--light">{elem.population}</span>
              </p>
            </div>
            <div className="carousel__details-data">
              <p>Известные люди на планете:</p>
              {(elem.residents.length === 0) & <p>Еще нет, но скоро будут!</p>}
              {elem.residents.map((resident, index) => (
                <span className="carousel__details-data-name" key={index}>
                  {resident}
                </span>
              ))}
            </div>
            <div className="carousel__details-data">
              <p>Планета встречалась в фильмах: </p>
              {elem.films.map((film, index) => (
                <span className="carousel__details-data-name" key={index}>
                  {film}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="container">
      {loading && <AppLoading />}
      {planets.length > 0 && (
        <article className="carousel">
          <div className="carousel__list">
            <Carousel className="carousel__tags" autoplay>
              {planetItem}
            </Carousel>
          </div>
        </article>
      )}
    </div>
  )
}

export default AppCarousel
