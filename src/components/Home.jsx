import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to={"/products"}>
              <img src="https://fenerium.com/Fenerium/media/images/banner/web2urune50tr.jpg?ext=.jpg" className="d-block w-100" alt="..." />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/products"}>
              <img src="https://fenerium.com/Fenerium/media/images/banner/bogawebklkskyn.jpg?ext=.jpg" className="d-block w-100" alt="..." />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/products"}>
              <img src="https://fenerium.com/Fenerium/media/images/banner/web5yildizkoleksiyonu.jpg?ext=.jpg" className="d-block w-100" alt="..." />
            </Link>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Home