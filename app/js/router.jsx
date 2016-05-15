import ReactDOM from 'react-dom'
import React from 'react'
import page from 'page'
import Index from './store/index'


const renderLayout = (context) => {
  const target = document.getElementById('app')
  React.render(
    <Index {...context} />,
    target
  )
}

page.base('/news')
page('/', '/latest')

page('/latest', (context) => {
  renderLayout({ context, render: 'index' })
})

page('/search/:scope/', (context) => {
  renderLayout({ context, render: 'search' })
})

page({ hashbang: true })
