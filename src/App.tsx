import React from 'react';
import './App.css';
import { PYRestaurantRow } from './components/PYRestaurantRow';
import SignIn from './page/SignIn';

const App: React.FC = () => {
  return (
    <div className="App">
      <SignIn/>
      <PYRestaurantRow
      name={"Va como pina"}
      deliveryTimeMaxMinutes={60}
      link="http://www.pedidosya.com.uy/restaurantes/montevideo/<link>-menu"
      pathLogo="pathlog"
      rating={3.4}
      topCategories={["jama","baile","cosa gorda"]}
      />
    </div>
  );
}

export default App;
