
import AllRoutes from './routes/index.jsx'
import "../node_modules/bootstrap/scss/bootstrap.scss"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import  {Container}  from './App.js'
import "./App.js"
// import * as bootstrap from "bootstrap";


function App() {
  return (
    <div className='app' >
    <Container>
       <AllRoutes/>
    </Container>
    </div>
  )
}
export default App
