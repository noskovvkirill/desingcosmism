import Image from 'next/image'
import {useState, useCallback} from 'react'

const Layout = ({children}) =>{
 


    return(
        <div className="main">
            {children}
        </div>
    )
}

export default Layout 