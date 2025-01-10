import './App.css'
import Contacts from './Contact'

function App() {

  return (
    <>
      <h1>Hetan Hemant Nandre is genius guy</h1>

      <div className='arrange'>
        <Contacts
          name="Aryan Pokharkar"
          contact_no="10987509187345"
          email="aryan.pokhar@vit.edu"
        />
        <Contacts
          name="Hetan Hemant Nandre"
          contact_no="9309496631"
          email="hetan.nandre@vit.edu"
        />
        <Contacts
          name="Sanket Patil"
          contact_no="0987540298745"
          email="sanket.patil@vit.edu"
        />
        <Contacts
          name="Shiya Thakur"
          contact_no="99999999"
          email="shiya.thakur@vit.edu"
        
        />
      </div>

      
    </>
  )
}

export default App
