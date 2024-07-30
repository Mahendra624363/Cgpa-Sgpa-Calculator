import React, { useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Sgpa from './Pages/Sgpa';
import Cgpa from './Pages/Cgpa';
import './App.css';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [linksVisible, setLinksVisible] = useState(true);

  // Update visibility based on the current path
  React.useEffect(() => {
    setLinksVisible(currentPath !== '/sgpa-calculator' && currentPath !== '/cgpa-calculator' && currentPath !== '/sgpa');
  }, [currentPath]);

  // Handle link click to hide links
  const handleLinkClick = () => {
    setLinksVisible(false);
  };

  return (
    <>
      {linksVisible && (
        <div className="container" style={{ marginTop: '10%' }}>
          <Link to='/sgpa-calculator' className="link" onClick={handleLinkClick}>SGPA Calculator</Link><br />
          <Link to='/cgpa-calculator' className="link" onClick={handleLinkClick}>CGPA Calculator</Link>
        </div>
      )}
      <footer>
        {linksVisible && <p>&copy; {new Date().getFullYear()} Mahi</p>}
      </footer>
      <Routes>
        <Route path='/sgpa-calculator/*' element={<Sgpa />} />
        <Route path='/cgpa-calculator/*' element={<Cgpa />} />
      </Routes>
    </>
  );
}

export default App;
