import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [message, setMessage] = useState();

  const getUser = async () => {
    const response = await fetch('http://localhost:3000', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    setMessage(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;
