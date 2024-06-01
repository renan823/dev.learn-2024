import React from 'react'
import ReactDOM from 'react-dom/client'

import Premios from './Premios.jsx'
import GEMA from './img/GEMA.jpeg';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
<React.StrictMode >
  <div className="min-h-screen bg-auto justify-center bg-center bg-cover" style={{ backgroundImage: `url(${GEMA})` }}>
    <Premios />
  </div>

</React.StrictMode>,


)


  
