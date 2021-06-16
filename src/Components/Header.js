import React from 'react'
import "../Styles/header.css"
import Button from './Button'
const Header = () => {
    return (
        <>
            <header>
                <div className="header_inner">
                    <div className="header_left">
                        <a>
                            <span>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </span>
                        </a>
                        <h1>KREDEY</h1>
                    </div>
                    <div className="header_right">
                        <Button primary>Read Free for 30 Days</Button>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
