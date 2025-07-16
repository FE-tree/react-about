import { useState } from 'react';
// import AddItem from './AddItem.js';
// import PackingList from './PackingList.js';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

function AddItem({ onAddItem }) {
  const [title, setTitle] = useState();
  return (
    <div>
      <input placeholder="Add item" onChange={e => {
        setTitle(e.target.value)
      }}/>
      <button onClick={() => { onAddItem(title) }}>Add</button>
    </div>
  );
}

function PackingList({ items, onChangeItem, onDeleteItem }) {
  return (
    <ul>
      {
        items.map(item => 
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.packed} onChange={() => {
                item.packed = !item.packed
                onChangeItem(item)
              }} /> 
              {item.title} 
            </label>
            <button onClick={() => {
              onDeleteItem(item.id)
            }}>Delete</button>
          </li>
        )
      }
    </ul>
  )
}

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(1);

  function handleAddItem(title) {
    setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem) {
    if (nextItem.packed) {
      setPacked(packed + 1);
    } else {
      setPacked(packed - 1);
    }
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    setTotal(total - 1);
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <>  
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}
