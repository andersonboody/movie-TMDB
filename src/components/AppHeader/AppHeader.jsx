import { Input } from 'antd'
import { TikTokOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons'

import AppCategories from '../AppCategories/AppCategories'
import './AppHeader.scss'
import logoIcon from '../../assets/images/logo.png'

const { Search } = Input

function AppHeader({ categories, onListData }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header__social-group">
            <ul className="header__social-group-list">
              <li className="header__social-group-item">
                <a href="#" className="header__social-group-link">
                  <TikTokOutlined className="icon icon--tiktok" />
                </a>
              </li>
              <li className="header__social-group-item">
                <a href="#" className="header__social-group-link">
                  <YoutubeOutlined className="icon icon--youtube" />
                </a>
              </li>
              <li className="header__social-group-item">
                <a href="#" className="header__social-group-link">
                  <InstagramOutlined className="icon icon--instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="header__logo">
            <img src={logoIcon} alt="Logo" />
          </div>
          <div className="header__search">
            <Search placeholder="Search..." loading />
          </div>
        </div>
        <div className="header-bottom">
          <AppCategories categories={categories} onListData={onListData} />
        </div>
      </div>
    </header>
  )
}

export default AppHeader
