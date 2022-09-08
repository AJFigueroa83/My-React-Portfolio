import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // NO RULE 
import './my-custom-styles.css';


function App() {
  return (
    <div className='App'>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
