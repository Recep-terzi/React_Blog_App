import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
        <div className="not-found content">
            <h2>Yanlış Sayfa</h2>
            <p>Sayfa bulunamadı</p>
            <Link to="/"> Anasayfa </Link>
        </div>
    </>
  )
}

export default NotFound