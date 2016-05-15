import React from 'react'
import Tabs from '../components/tabs'
import config from '../config/tab-config'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scopeMap = {
      latest: 1,
      yesterday: 2,
      older: 3,
    }
    return (
      <div className="petch">
        <Tabs
          config={config}
          selected={scopeMap[this.props.context.params.scope.toLowerCase()]}
          baseUrl="/news#!/search"
          query={this.props.context.querystring.split('=')[1]}/>
      </div>
    );
  }
}
