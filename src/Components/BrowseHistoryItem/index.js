import './index.css'

const BrowseHistoryItem = props => {
  const {eachhistoryDetailes, onDeleteHistoryItem} = props
  // console.log(eachhistoryDetailes)
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachhistoryDetailes

  const deleteHistoryItem = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="browse-history-item">
      <div className="browse-history-content-container">
        <p className="time">{timeAccessed}</p>
        <div className="img-logo-and-title-container">
          <img src={logoUrl} alt="domain logo" className="img" />
          <div className="title-and-domain-url-container">
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="button"
        data-testid="delete"
        type="button"
        onClick={deleteHistoryItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default BrowseHistoryItem
