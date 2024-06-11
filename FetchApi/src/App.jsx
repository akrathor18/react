import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const apiKey=`3a0e5499961b4f8cb10eed8959495183`
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getnews = async () => {
      try {
        const resp = await fetch(`https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`);
        const result = await resp.json();
        setData(result);  // Store the entire result object
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getnews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Ensure data and data.articles are valid before attempting to map
  if (!data || !data.articles) {
    return <p>No data available</p>;
  }

  return (
    <div className="">
      {data.articles.map(post => (
        <div key={post.url} className="card">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <img src={`${post.urlToImage}`} width={"50%"} alt="img" srcset="" />
        </div>
      ))}
    </div>
  );
}

export default App;
