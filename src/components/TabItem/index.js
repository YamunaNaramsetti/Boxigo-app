import './index.css'

const TabItem = props => {
  const {activeTab, onChangeActiveTab, tabDetails} = props

  const activeClasses = activeTab ? 'active-tab-styles' : ''

  const onClickTab = () => {
    onChangeActiveTab(tabDetails.tabId)
  }

  return (
    <div className={`nav-tab ${activeClasses}`} onClick={onClickTab}>
      <p className="nav-tab-icon">{tabDetails.icon}</p>
      <p className="nav-tab-name">{tabDetails.tabName}</p>
    </div>
  )
}

export default TabItem
