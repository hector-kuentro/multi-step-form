import Form from './components/Form/Form'
import FormContextProvider from './context/Form.context'

function App() {

  return (
    <FormContextProvider>
      <Form />
    </FormContextProvider>
  )
}

export default App
