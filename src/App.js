import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
// import Contact from './components/Contacts'
import data from './data'


export default function App(){

const cards = data.map(item => {
    return(
        <Card 
            key={item.id}
            img={item.img}
            rating={item.rating}
            reviewCount={item.reviewCount}
            country={item.country}
            title={item.title}
            price={item.price}
        />
    )
})
return(
<>
    <Nav/> 
    <Hero/>
    <section className='main--card'>
    {cards}
    </section>
</>
    )
}