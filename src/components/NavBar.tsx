import '../styles/navBar.css'

function NavBar () {
  return (
    <div className='navBar'>
      <nav>
        <a className='navLink' href='#home' >Home</a>
        <a className='navLink' href='#about' >About</a>
        <a className='navLink' href='#projects' >Projects</a>
        <a className='navLink' href='#contact' >Contact</a>
      </nav>
    </div>
  )
}

export default NavBar
