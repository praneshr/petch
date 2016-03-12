import ReactDOM from 'react-dom'
import React from 'react'
import page from 'page'
import Layout from './layout/layout'


const renderLayout = (context) => {
  const target = document.getElementById('app')
  React.render(
    <Layout {...context} />,
    target
  )
}

page.base('/news')

page('/', (context) => {
  renderLayout({context, render: 'index', selected: 1})
})
page('/today', (context) => {
  renderLayout({context, render: 'index', selected: 1})
})
page('/yesterday', (context) => {
  renderLayout({context, render: 'index', selected: 2})
})
page('/older', (context) => {
  renderLayout({context, render: 'index', selected: 3})
})

page({ hashbang: true })