import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {searchText: '', listItems: initialHistoryList}

  onChangeEvent = event => {
    this.setState({searchText: event.target.value})
  }

  onDeleteEvent = event => {
    this.setState(prevState => ({
      searchText: prevState.searchText,
      listItems: prevState.listItems.filter(
        item => item.id !== parseInt(event.target.id),
      ),
    }))
  }

  getItems = searchFilteredItems => {
    if (searchFilteredItems.length !== 0) {
      return searchFilteredItems.map(history => (
        <li className="item-main" key={history.id}>
          <div className="item">
            <p className="time">{history.timeAccessed}</p>
            <img src={history.logoUrl} alt="domain logo" className="logo" />
            <p className="title">{history.title}</p>
            <p>{history.domainUrl}</p>
          </div>
          <button
            testid="delete"
            type="button"
            className="buttony"
            id={history.id}
            onClick={this.onDeleteEvent}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="bin"
              alt="delete"
              id={history.id}
              onClick={this.onDeleteEvent}
            />
          </button>
        </li>
      ))
    }
    return <p>There is no history to show</p>
  }

  render() {
    const {searchText, listItems} = this.state
    const searchFilteredItems = listItems.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    )

    return (
      <div className="main">
        <div className="top-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="search"
              onChange={this.onChangeEvent}
              placeholder="Search history"
            />
          </div>
        </div>
        <ul className="container">{this.getItems(searchFilteredItems)}</ul>
      </div>
    )
  }
}

export default App
