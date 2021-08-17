import '../css/Main.css';
import React, { useState, useEffect } from "react";

const Main = () => {
  const api_url = "http://" + process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT;
  const [error, setError] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(true);
  const [items, setItems] = useState([]);


  useEffect(() => {
    console.log(`fetching: ${api_url}`);
    fetch(api_url + "/items", { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => { console.log(data); setDataLoaded(true); setItems(data); })
      .catch((error) => { setDataLoaded(true); setError(error) });
  }, [api_url]);


  if (error) {
    return <div className="error">Error: {error.message}</div>;
  } else if (!dataLoaded) {
    return <div className="loading"><h1>Loading...</h1></div>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>Hello World.</code>
          </p>
        </header>
        <div className="hidden">{JSON.stringify(items)} </div>
      </div>

    );
  }


}

export default Main;
