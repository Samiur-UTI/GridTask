import React from 'react';
import PageHeader from './page/pageheader/pageheader.page';
import TextInput from './components/textInput/textinput.component';
import './App.css';
function App() {
  return (
    <div className='main'>
      <PageHeader/>
      <div className='content'>
          <TextInput/>
      </div>
    </div>
  );
}

export default App;
