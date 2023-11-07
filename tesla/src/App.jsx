// import React from 'react'
// import Nav from './components/Nav'
// import SingleCarOrHome from './components/SingleCarOrHome'
// import ModelS from './components/model_s'
// import ModelX from './components/model_x'
// import ModelY from './components/model_y'
// import Model3 from './components/model_3'


// function App() {
//   return (
//     <>
//       <Nav />
//       <SingleCarOrHome />
//       <ModelS/>
//       <ModelX/>
//       <ModelY/>
//       <Model3/>
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import SingleCarOrHome from './components/SingleCarOrHome';
import ModelS from './components/model_s';
import ModelX from './components/model_x';
import ModelY from './components/model_y';
import Model3 from './components/model_3';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/model-s" element={<ModelS />} />
          <Route path="/model-3" element={<Model3 />} />
          <Route path="/model-x" element={<ModelX />} />
          <Route path="/model-y" element={<ModelY />} />
          <Route path="/" element={<SingleCarOrHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
