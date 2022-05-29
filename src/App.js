import { useState, useEffect } from "react";
import "./App.css";
import Tours from "./components/Tours";
function App() {
  const [tours, setTours] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://course-api.com/react-tours-project")
        .then((response) => response.json())
        .then((json) => {
          setTours(json);
          setRefresh(false);
        });
    };

    fetchData();
  }, [refresh]);
  const onRemoveItem = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id)
    setTours(filteredTours);
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">{tours.length ? 'Our Tours' : 'No tours left'} </h1>
        <hr className="title-underline"/>
        <div className="app-container">
          <Tours tours={tours} removeItem={onRemoveItem}/>
          {tours.length === 0 && <button className="refresh-btn" onClick={() => setRefresh(true)}>
            Refresh
          </button> }
        </div>
      </div>
    </div>
  );
}

export default App;
