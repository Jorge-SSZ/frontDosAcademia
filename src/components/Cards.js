import React from 'react'
import CardItem from './CardItem';
import '../stylesheets/Cards.css'
import logo from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/6.png'

export const Cards = () => {
  return (
    <div className='cards'>
      <h1>Mira los mejores cursos de nutrición!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src={logo}
            text='El mejor curso de fisiologia de la digestion.'
            label='MXN 999'
            path='/cursos'
            />
            <CardItem 
            src={logo2}
            text='El mejor curso sobre embarazo'
            label='MXN 999'
            path='/cursos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src={logo}
            text='El mejor curso de fisiologia de la digestion.'
            label='MXN 999'
            path='/cursos'
            />
            <CardItem 
            src={logo2}
            text='El mejor curso sobre embarazo'
            label='MXN 999'
            path='/cursos'
            />
            <CardItem 
            src={logo3}
            text='El mejor curso sobre bioquimica'
            label='MXN 999'
            path='/cursos'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;