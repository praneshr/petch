import React from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import $ from 'jquery'
import page from 'page'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.onSearchTerm = this.onSearchTerm.bind(this)
  }

  onSearchTerm(e) {
    if (e.keyCode >= 32 && e.keyCode <= 126) {
      if (!this.props.store.searchBox) {
        React.findDOMNode(this.refs.searchInput).value = ''
        React.findDOMNode(this.refs.searchInput).focus()
        this.props.actions.searchBox(true)
      }
    } else if (e.keyCode === 27 || e.keyCode === 13) {
      const value = React.findDOMNode(this.refs.searchInput).value
      React.findDOMNode(this.refs.searchInput).blur()
      this.props.actions.searchBox(false)
      if (e.keyCode === 13 && value.length > 0) {
        page(`/search/latest?q=${value}`)
      }
    }
  }

  componentWillMount() {
    $(document)
    .keydown(this.onSearchTerm)
  }

  render() {
    return (
      <div className={cn('search-box', { visible: this.props.store.searchBox })}>
        <span className="close-icon pull-right" onClick={this.onSearchTerm.bind(null, { keyCode: 27 })}>
          <img src="/img/close.svg" alt=""/>
        </span>
        <div className="animation-container">
          <div className="input-block">
            <input
              placeholder="Type a search term..."
              type="text"
              id="search"
              ref="searchInput"/>
          </div>
          <div className="trending">
            <h2>popular searches</h2>
            <div className="searches">
              <div className="block">
                <span id="term">hello</span>
                <span id="term">hellodsfsd</span>
                <span id="term">hellosdfsdfs</span>
              </div>
              <div className="block">
                <span id="term">he</span>
                <span id="term">hellowedfgdfggfhgh</span>
                <span id="term">hellowedfgdfggfhgh</span>
                <span id="term">hellowedfgdfggfhgh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {
};
