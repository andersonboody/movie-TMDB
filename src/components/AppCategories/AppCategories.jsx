import './AppCategories.scss'

const AppCategories = ({ categories, onListData }) => {
  const element = categories.map((elem, index) => {
    return (
      <li key={index} className="header__categories-item">
        <button onClick={() => onListData(elem)} className="header__categories-link">
          {elem}
        </button>
      </li>
    )
  })

  return (
    <>
      <ul className="header__categories">{element}</ul>
    </>
  )
}

export default AppCategories
