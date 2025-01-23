import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import './ui.scss'

const AppLoading = () => {
  const antIcon = <LoadingOutlined className="loading-spin" spin />
  return <Spin indicator={antIcon} className="loading" />
}
export { AppLoading }
