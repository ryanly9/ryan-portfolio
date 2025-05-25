// import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <Link activeClass='inactive' to = 'intro' spy={true} smooth={true} offset={-100} duration={500} ><img src="/images/logo.png" alt="Logo" className='logo' /></Link> 
        <div className="desktopmenu">
            <Link activeClass='active' to = 'intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to = 'skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to = 'works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Project</Link>
            <Link activeClass='active' to = 'contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Feedback</Link>

        </div>
        {/* <img src="/images/logo.png" alt="Menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)} />
        <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
            <Link activeClass='active' to = 'intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onclick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to = 'skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onclick={()=> setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to = 'works' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onclick={()=> setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to = 'clients' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onclick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass='active' to = 'contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onclick={()=> setShowMenu(false)}>Contact</Link>

        </div> */}
        <Link activeClass='inactive' to = 'contact' spy={true} smooth={true} offset={-100} duration={500} > <button className="desktopMenuBtn" > <img src="/images/contact.webp" alt="contact" className="desktopMenuImg" /> Contact </button></Link>

            

            
    </nav>
  )
} 

export default Navbar
 