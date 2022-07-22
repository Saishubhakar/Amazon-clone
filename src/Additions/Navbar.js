import React from 'react'

const Navbar = (props) => {
    return (
        <>
            <div>
                <nav className='nav'>
                    <a href='/'>
                        <div className='logobox'>
                            <div className="logo">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </a>
                    <ul className='links' id='links'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About Us</a></li>
                        <li><a href='/sign-up'>Sign Up</a></li>
                    </ul>
                    <div className='search'>
                        <input className='input' id='input'></input>
                        <a className='button'><i className="fa fa-search" aria-hidden="true"></i></a>
                    </div>

                </nav>

            </div >
        </>
    )
}

export default Navbar
