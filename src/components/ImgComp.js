/* 
**********To Add Imgs To The Carousel********
*/


import React from 'react'

const ImgComp = ({ src }) => {
    let imgStyles = {
        /* width: 100 + "%",
        height: "auto" */

        width: "100vw",
        height: "100vh",
        position: "center center"
    }
    return (
        
        <img src = { src } alt = "slide-img" style = { imgStyles }/>
    )
}

export default ImgComp
