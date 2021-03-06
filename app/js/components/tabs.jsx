import React from 'react'
import cn from 'classnames'
import $ from 'jquery'

export default class tabs extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const config =  this.props.config
    const selected = this.props.selected
    const headerTitles = config.map((item, i) => {
      return (
        <div className={cn('tab col-md-2', `tab-${i}`, item.title.toLowerCase(), { selected: (selected - 1) === i })} key={i}>
          <a className="tab-link" href={encodeURI(`${this.props.baseUrl}/${item.title.toLowerCase()}?q=${this.props.query}`)}>
            {item.title}
          </a>
        </div>
      )
    })
    const TabBody =  config[selected - 1]
      ? config[selected - 1].component
      : <div className="content-not-found">Tab body undefined</div>
    return (
      <div className="tabs">
        <div className="row tab-header">
          {headerTitles}
          <div className="line"></div>
        </div>
        <div className="tab-body">
          <TabBody {...this.props}/>
        </div>
      </div>
    );
  }
}
