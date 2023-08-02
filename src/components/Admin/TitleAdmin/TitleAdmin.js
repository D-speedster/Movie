import React from 'react'
import './TitleAdmin.css';
function Title_Admin( props ) {
    return (
        <div className='Title_Admin mb-4'><span>{props['Title']}</span></div>
    )
}

export default Title_Admin