import React from 'react';
import Header from './components/Header';


const App = () => {
  return (
    <div>
      <Header />
      <FeaturedProduct />
      <Categories />
      <NewReleases />
      <About />
      <Footer />
    </div>
  );
}

export default App;
