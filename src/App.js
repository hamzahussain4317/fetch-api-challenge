import { useState, useEffect } from 'react';
import DataRender from './DataRender';

function App() {
  const [items, setItems] = useState([])
  const [type, setType] = useState('users');
  const apiUrl = 'https://jsonplaceholder.typicode.com/';


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${apiUrl}${type}`)
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems)

      }
      catch (err) {
        console.log(err)
      }
    }

    fetchItems();



  }, [type])



  return (
    <div className="App">
      {<DataRender
        setType={setType}
        items={items} />}
    </div>
  );
}

export default App;
