import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';
import FormInput from './Components/FormInput';


function App() {


  return (
    <>
      <Container>
      <h2 className='text-center'>Todo List Ekleme</h2>
      <FormInput/>
      </Container>
    </>
  )
}

export default App
