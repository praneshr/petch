import React from 'react'
import RenderConfig from '../config/render-config'

export default class layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Page = RenderConfig[this.props.render].component
    return (
      <div className="petch-layout">
        <Page {...this.props}/>
      </div>
    );
  }
}
