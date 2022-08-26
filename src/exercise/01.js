// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 💣 remueve este import
import Globe from '../globe'

// 🐨 usa React.lazy para importar dinámicamente el componente Globe desde el módulo "../globe"

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  // 🐨 Envuelve el codigo debajo en un componente <React.Suspense /> con un fallback
  // 💰 Intenta ponerlo en algúnos lugares distintos del arbol de componentes y observa como eso impacta a la experiencia de usuario.
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{marginBottom: '1rem'}}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        {showGlobe ? <Globe /> : null}
      </div>
    </div>
  )
}

// 🦉 Ten en cuenta que si no estás en la página aislada, notarás que la app en realidad ya cuenta con un componente React.Suspense más arriba en el árbol donde se representa este componente, por lo que *podría* simplemente confiar en ese.

export default App
