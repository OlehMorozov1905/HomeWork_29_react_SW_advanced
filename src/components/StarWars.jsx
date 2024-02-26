import React from 'react'
import { starWarsInfo } from '../constants/constants'
import style from '../css_modules/farGalaxy.module.css';

const StarWars = () => {
  return (
    <div className={style.farGalaxy}>{starWarsInfo}</div>
  )
}

export default StarWars