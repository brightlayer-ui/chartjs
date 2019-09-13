import React from 'react';
import BarDemo from "./graphs/BarDemo";
import DonutDemo from "./graphs/DonutDemo";
import LineDemo from "./graphs/LineDemo";
import PieDemo from "./graphs/PieDemo";

const App: React.FC = () => {
  return (
    <div className="App">
       <PieDemo/>
       <DonutDemo/>
       <LineDemo />
       <BarDemo/>
    </div>
  );
};

export default App;
