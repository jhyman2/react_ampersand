import React from 'react'

export default React.createClass({
  displayName: 'PublicPage',
  render () {
    return (
      <div className='container'>
        <header role='banner'>
          <h1>Labelr</h1>
        </header>
        <div>
          <p>We label stuff for you and stuff&trade;</p>
          <a href='/repos' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span>
            Login with Github
          </a>
        </div>
      </div>
    )
  }
})