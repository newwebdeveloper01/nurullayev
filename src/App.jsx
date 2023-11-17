
import AllRoutes from './routes'
import "../node_modules/bootstrap/scss/bootstrap.scss"
import { Container } from './utils/Container'
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
