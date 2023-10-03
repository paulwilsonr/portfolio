import '../styles/navBar.css'

interface navProps {
  location: string
}

function NavBar ({ location }: navProps) {
  return (
    <div className='navBar'>
      <nav>
        <a
          className={
            location === 'title' ? 'currentSection navLink' : 'navLink'
          }
          href='#home'
        >
          Home
        </a>
        <a
          className={
            location === 'about' ? 'currentSection navLink' : 'navLink'
          }
          href='#about'
        >
          About
        </a>
        <a
          className={
            location === 'project' ? 'currentSection navLink' : 'navLink'
          }
          href='#projects'
        >
          Projects
        </a>
        <a
          className={
            location === 'contact' ? 'currentSection navLink' : 'navLink'
          }
          href='#contact'
        >
          Contact
        </a>
      </nav>
    </div>
  )
}

export default NavBar
