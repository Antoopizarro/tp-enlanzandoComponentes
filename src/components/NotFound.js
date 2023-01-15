import React from 'react'
import { Link } from 'react-router-dom';

const imgStyle = { width: '200px', borderRadius: '100%' };
const divStyle = { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' };
const liStyle = { listStyleType: 'none' };
const ulStyle = { display: 'flex', justifyContent: 'center' };

const NotFound = () => {
  return (
    <div style={divStyle}>
        <h1>Ruta no encontrada</h1>
        <h4>Puedes visitar otros enlances</h4>
        <ul style={ulStyle}>
            <li style={liStyle}>
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <p>Home</p>
                </Link>
            </li>

            <li style={liStyle}>
                <Link className="nav-link" to="/allGenres">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <p>Géneros</p>
                </Link>
            </li>

            <li style={liStyle}>
                <Link className="nav-link collapsed" to="/lastMovie">
                    <i className="fas fa-fw fa-folder"></i>
                    <p>Última película en BD</p>
                </Link>
            </li>

            <li style={liStyle}>
                <Link className="nav-link" to="/allMovies">
                    <i className="fas fa-fw fa-table"></i>
                    <p>Películas</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NotFound;