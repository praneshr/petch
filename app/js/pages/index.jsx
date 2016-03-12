import React from 'react'
import Tabs from '../components/tabs'
import config from '../config/tab-config'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="petch">
        <Tabs config={config} selected={this.props.selected} baseUrl="/news"/>
      </div>
    );
  }
}
