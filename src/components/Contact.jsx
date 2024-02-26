import React, { useEffect, useState } from 'react'
import { base_url } from '../constants/constants'
import style from '../css_modules/formStyle.module.css';

const Contact = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('');

  useEffect(() => {
    fetch(`${base_url}/v1/planets`)
      .then(response => response.json())
      .then(data => setPlanets(data))
  }, []);

  return (
    <div className={style}>
      <div className="container">
        <form>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label htmlFor="planet">Planet</label>
          <select
            id="planet"
            name="planet"
            value={selectedPlanet}
            onChange={event => setSelectedPlanet(event.target.value)}
          >
            <option value="">Select a planet</option>
            {planets.map(planet => (
              <option key={planet.name} value={planet.name}>
                {planet.name}
              </option>
            ))}
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact