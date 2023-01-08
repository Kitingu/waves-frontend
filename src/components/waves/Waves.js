import React from 'react'



function Waves() {

    const waves =[
        {
            id: 1,
            title: "Wave 1",
            description: "This is wave 1",
            category: "category 1",
            date: "2020-01-01",
            creator: "creator 1",
        },
        {
            id: 2,
            title: "Wave 2",
            description: "This is wave 2",
            category: "category 2",
            date: "2020-01-01",
            creator: "creator 2",
        },
    ]
  return (
    <div className='container waves'>
    <h1>Waves</h1>
    <div className='waves'>

    {waves.map(wave => (
        <div className='wave' key={wave.id}>
        <h3>{wave.title}</h3>
        <p>{wave.description}</p>
        <p>{wave.category}</p>
        <p>{wave.date}</p>
        <p>{wave.creator}</p>

        </div>
    ))}
        </div>
    </div>
  )
}

export default Waves