import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="">

        <nav class="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">User Database</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
        </div>
    )
}

export default Navbar
