import './App.css';
import Profile from './profile/porfilecomponent';
import Pic from './IMG_9261.jpg';
function App() {
  const handleName= ()=>{
    alert( 'Brahmi Med Amine, you are in' )
  }
  return (
    <div className="App">
      <Profile fullname="Brahmi Med Amine" bio="a 6 feet tall guy and i like Basketball" profession="student" doSmthng={handleName} >
      <img src={Pic} alt="bx.mox's pic " width='240'/> 
      </Profile>
      
    </div>
  );
}

export default App;
