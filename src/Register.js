import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div
      class="flex flex-col gap-5 justify-center items-center
    ">
      <i className="text-2xl font-bold my-10"> Registeration Page</i>
      <form
        action="/users/register"
        className="flex flex-col gap-5 justify-center items-center"
        method="post">
        <div className="flex-for-reg">
          <label for="name">Name</label>
          <input
            type="name"
            id="name"
            className="button"
            name="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="flex-for-reg">
          <label for="stdId">Student ID</label>
          <input
            type="name"
            id="stdId"
            name="stdId"
            className="button"
            placeholder="Enter ID"
          />
        </div>
        <div className="flex-for-reg">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="button"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex-for-reg">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="button"
            placeholder="Create Password"
          />
        </div>
        <div className="flex-for-reg">
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="button"
            placeholder="Confirm Password"
          />
        </div>{' '}
        <button type="submit" class="home-btn1 px-10">
          Register
        </button>
      </form>
      <p class="text-xl mt-4 font-bold">
        Have An Account?{' '}
        <Link className="home-btn1 px-10" to="/users/login">
          Login
        </Link>
      </p>
    </div>
  );
};
export default Register;
