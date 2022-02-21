import React from 'react'
import Nav from './components/Nav'
// import Hero from './components/Hero'
// import Card from './components/Card'
import Contact from './components/Contacts'



export default function App(){
    return(
        <>
        <Nav/> 
        {/* <Hero/>
        <Card/> */}
        <Contact
            name='Mr. Whiskerson'
            email='mr.whiskaz@catnap.meow'
            img='./images/mr-whiskerson.png'
            mobile='(212) 555-1234'
        />
        </>
    )
}