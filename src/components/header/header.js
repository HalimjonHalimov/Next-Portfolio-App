import { navItems } from "@/src/assets/data/menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import logo from '../../assets/data/logo'


const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuActive, setMenuActive] = useState(null);
  const router = useRouter()

  const handleMenuActive = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    })
    return () => {
      setScroll({})
    }
  })
  
  return (
    <header id="header_main" className={`header js-header ${scroll ? 'is-fixed' : ''}}`}>
       <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__body d-flex justify-content-between">

              <div className="header__logo">
                <Image src={logo} id='site-logo' alt='Logo' /> 
              </div>
              <div className="header__right">
                <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                  <ul id="menu-primary-menu" className="menu">
                    {
                      navItems.map((item, index) => (
                        <li key={index} className={`menu-item`}> 
                          <button onClick={() => router.push(`/${item.route}`)}> {item.label} </button>
                        </li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
       </div>
    </header>
  )
}

export default Header