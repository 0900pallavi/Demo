
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
  <Navbar title="TextUtils2" About="About TextUtils"/>
  <div className="container my-3">
    <TextForm heading="textarea heading example"/></div>
  </>
  );
}

export default App;
