import ReactDom from 'react-dom'
import page from 'page'


const renderLayout = (context) => {
  const target = document.getElementById('app')
  ReactDom.render(
    <Layout {...context} />,
    target
  )
}
console.log('hello')