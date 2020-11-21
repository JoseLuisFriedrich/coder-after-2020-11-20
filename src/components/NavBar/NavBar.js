import './NavBar.scss'
import logo from '../../images/logo_netflix.png'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFilter(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (type) => {
    sessionStorage.setItem('type', type)
    //localStorage
  }

  return (
    <div id='NavBar' style={{ backgroundColor: showFilter && 'black' }}>
      <Button content={logo} path='/' />
      {showFilter && (
        <div>
          <Button content='Movies' path='/movie' callback={() => handleClick('movie')} />
          <Button content='Shows' path='/tv' callback={() => handleClick('tv')} />
        </div>
      )}
    </div>
  )
}

export default NavBar
