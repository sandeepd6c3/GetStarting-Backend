import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <div>
      <h1>Sandeep Choudhary</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          
          <h3> {joke.id}  {joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App
