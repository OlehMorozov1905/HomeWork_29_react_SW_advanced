import React, { useEffect, useState } from 'react'
import { base_url } from '../constants/constants'

const AboutMe = () => {
  const [character, setCharacter] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${base_url}/v1/peoples/1`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          name: data.name,
          birth_year: data.birth_year,
          mass: data.mass,
          height: data.height,
          imgUrl: `${base_url}/${data.image}`
        })
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className='spinner-border text-primary'>

      </div>
    )
  } else {
    return (
          <div className="text-center">
            <img src={character.imgUrl} alt={character.name} className="w-25 rounded" />
            <h2>Birth yaer: {character.birth_year}</h2>
            <h2>Mass: {character.mass}</h2>
            <h2>Height: {character.height}</h2>
          </div>
       
    )
  }
}

export default AboutMe