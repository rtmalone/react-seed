const React = require('react');
const ReactDOM = require('react-dom');

function App () {
  return (
    <div className='app'>
      <h3>Hey, look at that! You got it running...</h3>
      <h1>Get Started</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))