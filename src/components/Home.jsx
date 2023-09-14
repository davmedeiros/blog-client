import { Link } from 'react-router-dom';
import Fetch from './Fetch';

const Home = () => {
  const { res, error, isLoading } = Fetch();

  if (error) return <p>A network error was encountered</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>{res.data.message}</h1>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;
