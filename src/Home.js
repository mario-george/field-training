import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div class="flex flex-col mt-5 justify-center items-center">
        <h1 className="text-3xl">موقع التربية العسكرية </h1>
        <h2 className="text-2xl">كلية الهندسة بشبرا </h2>
        <br />
        <div className="flex flex-col border-2 rounded-md text-center py-3 px-4 mx-auto w-1/2 gap-5">
          <p className="text-xl">Create an account or login</p>
          <Link to="/register" className="home-btn1">
            Register
          </Link>
          <Link to="/login" className="home-btn2">
            Login
          </Link>
          <Link to="/search-student" className="home-btn2">
            Find By ID
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
