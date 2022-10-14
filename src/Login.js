import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 w-full mt-10">
        <i class="font-bold text-5xl "> Login</i>
        <form
          action="/login"
          className="text-2xl border-2 px-16 py-4 "
          method="post">
          <div class="flex-for-reg mt-5">
            <label for="email" className="mr-10">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="search-btn"
              placeholder="Enter Email"
            />
          </div>
          <div class="flex-for-reg mt-5">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="search-btn"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" class="w-full text-center home-btn1 my-10">
            Login
          </button>
        </form>
        <p className="text-2xl inline ">
          No Account?{' '}
          <NavLink to="/register" className={`inline text-xl px-8 home-btn1`}>
            Register
          </NavLink>
        </p>
      </div>
    </>
  );
}
