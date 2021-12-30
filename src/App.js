import axios from 'axios'
import {useEffect, useState} from "react";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState('ASC');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setPosts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])

  const sorting = (col) => {
    if (order === 'ASC') {
      setPosts(old => {
        return old.sort((a, b) => {
          return a[col] < b[col] ? 1 : -1
        })
      })
      setOrder('DESC')
    } else {
      setPosts(old => {
        return old.sort((a, b) => {
          return a[col] > b[col] ? 1 : -1
        })
      })
      setOrder('ASC')
    }
  }

  return (
    <div className="App">
      <table>
        <thead>
        <tr>
          <th onClick={() => sorting('id')}>
            ID
          </th>
          <th onClick={() => sorting('userId')}>
            USER ID
          </th>
          <th onClick={() => sorting('title')}>
            TITLE
          </th>
        </tr>
        </thead>
        <tbody>
        {posts.map((post) =>
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
