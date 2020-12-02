import Image from 'next/image'
import {useState, useCallback} from 'react'

const Layout = ({children, description}) =>{
 


    return(
        <div className="main">
            {/* <div className="header">
                <span>Octomom</span>
              
            </div> */}
            {children}
            <footer>
                <span>{description}</span>
            </footer>
        </div>
    )
}

export default Layout 