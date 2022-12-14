import React, {useState} from 'react';
import './App.css';
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";
import Count from "./components/Count/Count";

interface items {
  hasItem: boolean,
  clicked: boolean,
  key: string,
  findEl: string,
  className: string,
}

function App() {

  const newItemsArr = () => {
    const items: items[] = [];
    const urlId = Math.floor(Math.random() * 36);
    for (let i = 0; i < 36; i++) {
      const key = Math.floor(Math.random() * 1000000).toString();
      let hasItem = false;
      let findEl = 'empty';
      if (urlId === i) {
        hasItem = true;
        findEl = 'ring';
      }
      let clicked = false;
      let className = "box";
      const index = {hasItem, clicked, findEl, key, className};
      items.push(index);
    }
    return items;
  };

  const [items, setItems] = useState(newItemsArr());

  const openDiv = (index: number) => {
    const itemsCopy = [...items];
    const itemCopy = itemsCopy[index];
    itemCopy.clicked = true;
    itemCopy.className = 'box-unlock';
    setItems(itemsCopy);
  };

  const resetItems = () => {
    setItems(newItemsArr());
  };

  let count = 24;

  const countOn = () => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.clicked === true) {
        if (count !== 0) {
          count--;
        } else {
          alert('Game is over! Push reset to start again!');
        }
      }
      if (item.hasItem === true && item.clicked === true) {
        if (count !== 0) {
          alert('You win! Congratulations!');
        }
      }
    }
    return count;
  };


  const itemsEl = items.map((item, index) =>
    <Box
      findEl={item.findEl}
      divClassName={item.className}
      key={item.key}
      openDiv={() => openDiv(index)}/>
  );

  return (
    <div className="App">
      <div className="mainBlock">
        {itemsEl}
      </div>
      <Count count={countOn()}/>
      <Button onReset={resetItems}/>
    </div>
  );
}

export default App;
