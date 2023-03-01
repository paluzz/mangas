import { useState } from 'react'
import './styles.css'
import { CardManga } from './card.jsx'
import  items from './items.jsx'


export default function App() {
  return (
    <div className="App">
      <h1>Mis Mangas</h1>
      <div className="container">
        {items.map(item => (
            <CardManga 
              key={ item.id }
              link={ item.link.concat(item.chapter) }
              chapter= { item.chapter }
              src={ item.image }
              alt={ item.name }
              children= { item.name }     
            />
        ))}
        
      </div>
    </div>
  );
}

