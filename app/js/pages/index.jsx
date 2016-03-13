import React from 'react';
import ReactSlick  from 'react-slick'
import _ from 'lodash'

export default class index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getLatest()
  }

  render() {
    if (_.isEmpty(this.props.store.latest)) {
      return false
    }
    const settings = {
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      autoplay: true,
      className: 'latest-news',
      focusOnSelect: true,
      speed: 500,
      autoplaySpeed: 5000,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    const latest = this.props.store.latest.results.map((obj, i) => {
      const style = {
        backgroundImage: `url(${obj.image})`,
        width: window.innerWidth,
      }
      return (
        <div className="latest-news">
          <div className="image" style={ style }></div>
          <div className="title">
            <h1>{obj.title}</h1>
          </div>
        </div>
      )
    })
    return (
      <div className="petch-home">
        <div className="container">
          <div className="slider">
            <ReactSlick {...settings}>
              {latest}
            </ReactSlick>
          </div>
        </div>
      </div>
    );
  }
}
