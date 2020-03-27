import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Table from 'storybook-template/Table';

const getRows = (data) => data ? data.map(row => Object.values(row)) : [];

const fetchHeaders = (obj) => obj ? Object.keys(obj) : [];

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        let res;
        try {
          res = await axios(
          'https://jsonplaceholder.typicode.com/posts'
          );
        } catch(err) {
          setError(err.message);
        } finally {
          res && setData(res.data);
        }
      };
  
      fetchData();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  },[]);

  return (
    <div className="App">
      {loading && <h1>LOADING!!</h1>}
      {error && <h1>{error}</h1>}
      {!loading && !error && <Table headerRow={data && fetchHeaders(data[0])} rows={getRows(data)}/>}
    </div>
  );
}

export default App;
