import React from "react";
import Banner from "../../component/Home/banner";
import { Link } from "react-scroll";
import { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/dist/client/router";

const index = () => {

    let [listactives, setActives] = useState(1)
    let routers = useRouter()

    const listArr = [
        {
            title: 'HOME',
            id: 1,
            link: '/'
        },

        {
            title: 'ABOUT',
            id: 2,
            class: 'abouts',
            link: ''
        },


        {
            title: 'SHOP',
            id: 3,
            link: '/shope'
        },

        {
            title: 'FURNITURE',
            id: 4,
            class: 'brand',
        },

        {
            title: 'CONTACT US',
            id: 5,
            class: 'contact',
        },
    ]

    function handleRouter(active, link) {
        setActives(active)
        if (link) {
            Router.push(link)
        }
    }

    return (
        <div className={"hero_area"} style={{ height: routers.pathname == '/shope' ? '8vh' : '100vh' }}>
            <header className="header_section" >
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav  ">
                                {
                                    listArr.map((item) => {
                                        return <li key={item.id} className={`${listactives == item.id ? 'active' : ''} nav-item`} >
                                            <Link
                                                activeClass="active"
                                                className={`${item.class} nav-link`}
                                                to={item.class}
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                                onClick={() => { handleRouter(item.id, item.link) }}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                            <div className="user_option">
                                <a href>
                                    <img src="images/user.png" alt="" />
                                    <span>Login</span>
                                </a>
                                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button
                                        className="btn  my-2 my-sm-0 nav_search-btn"
                                        type="submit"
                                    />
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="custom_menu-btn ">
                                <button>
                                    <span className=" s-1"></span>
                                    <span className="s-2"></span>
                                    <span className="s-3"></span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {routers.pathname == '/shope' ? '' : <Banner></Banner>}
        </div>
    );
};

export default index;
