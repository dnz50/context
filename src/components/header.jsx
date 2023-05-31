import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import CardContext from '../CardContext';

function Header() {
  const { items } = useContext(CardContext)
  console.log(items.length)
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-secondary text-light">
        <div className="container-fluid">
          <Link to="/">
            <h1 className="navbar-brand text-light">FBCollection</h1>
          </Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active text-light" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/products"} className="nav-link text-light">Products</Link>
              </li>
              <li className="nav-item">
                <div className="nav-link text-light">Pricing</div>
              </li>
            </ul>
          </div>
        </div>
        <div className='d-flex gap-3 fs-4 mx-4'
          onClick={() => navigate("/checkout")}><i className="bi bi-cart3"></i>
          <span className="badge bg-danger rounded-pill p-2">{items.length}</span></div>

      </nav>
    </div>
  )
}

export default Header