import React from 'react';
import './App.css';
import Header from './servises/component/head/header';
import Hero from './servises/component/main/hero/hero';
import Skills from './servises/component/main/skills/skills';
import Work from './servises/component/work/work';
import About from './servises/component/main/about me/about';
function App() {
  return (
<>
<div className="wrapper">
<div className="App">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Work />
    </div>
</div>

<footer>
  <div className="container">
    <div className="row">
      Devloped by Logik
    </div>
  </div>
</footer>
</>

  );
}

export default App;
