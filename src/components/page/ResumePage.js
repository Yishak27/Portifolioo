import React from 'react'
import NavBar from './NavBar'

export const ResumePage = () => {
    return (
        <>
            <NavBar></NavBar>
            <embed src="/Ermiyas Damte CV.pdf" type="application/pdf" width="100%" style={{
                height: "100vh", width: "100%"
            }} height="1000px" />
        </>)
}