import {Component} from 'react'

import './index.css'

import BrowseHistoryItem from '../BrowseHistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowseHistory extends Component {
  state = {searchInputValue: '', browseHistoryDetailesList: initialHistoryList}

  onChangeSearchInputHistory = event => {
    const {searchInputValue} = this.state
    this.setState({searchInputValue: event.target.value})
  }

  onDeleteHistoryItem = id => {
    const {browseHistoryDetailesList} = this.state
    const searchInputResults = browseHistoryDetailesList.filter(
      eachhistory => eachhistory.id !== id,
    )

    this.setState({browseHistoryDetailesList: searchInputResults})
  }

  render() {
    const {searchInputValue, browseHistoryDetailesList} = this.state

    const searchResultHistory = browseHistoryDetailesList.filter(eachhistory =>
      eachhistory.title.toLowerCase().includes(searchInputValue.toLowerCase()),
    )

    console.log(searchResultHistory.length)

    return (
      <div className="app-container">
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-img"
          />
          <div className="search-history-container">
            <div className="history-inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-img"
              />
              <hr />
              <input
                value={searchInputValue}
                type="search"
                placeholder="Search history"
                className="input-element"
                onChange={this.onChangeSearchInputHistory}
              />
            </div>
          </div>
        </div>
        <div className="browse-history-list">
          {searchResultHistory.length > 0 ? (
            <ul className="history-list">
              {searchResultHistory.map(eachhistory => (
                <BrowseHistoryItem
                  key={eachhistory.id}
                  eachhistoryDetailes={eachhistory}
                  onDeleteHistoryItem={this.onDeleteHistoryItem}
                />
              ))}
            </ul>
          ) : (
            <div className="no-history-container">
              <p className="no-history">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BrowseHistory
