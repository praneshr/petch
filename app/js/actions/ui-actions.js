import actions from './actions'
import config from '../config/api-config'
import $ from 'jquery'

export function latest(latest) {
  return { type: actions.LATEST, latest}
}

export function searchBox(open) {
  return { type: actions.SEARCH_BOX, open}
}

export function getLatest() {
  return (dispatch, state) => {
    $.get(`${config.host}${config.latest}`)
    .done((data) => {
      dispatch(latest(data))
    })
    .fail((e) => {
      console.log(e)
    })
  }
}
