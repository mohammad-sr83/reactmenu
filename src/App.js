import React, { useState } from 'react';
import menu from './data';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
function App() {
  const allcategury= ['all',...new Set(menu.map((deta)=>(deta.category)))]

  const [categury, setCategury] = useState(allcategury)
  const [nameCate,setNameCate]=useState(menu)
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline">
          </div>
        </div>
        <Categories cate={categury} />
      </section>
    </main>
  );
}

export default App;
