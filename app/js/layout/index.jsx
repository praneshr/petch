import React from 'react'
import * as actions from '../actions/ui-actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RenderConfig from '../config/render-config'

class Layout extends React.Component {
  constructor(props) {
    super(props)
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


function mapStateToProps(states) {
  return { store: states }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)