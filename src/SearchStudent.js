export default function SearchStudent(params) {
  return (
    <form
      className="flex flex-col justify-center items-center  text-xl gap-10 mt-10"
      action="/users/getstudent"
      method="post">
      <div className="flex flex-col gap-5 items-center jusify-center w-full">
        <label for="stdId" className="text-blue-500  text-2xl">
          Student ID
        </label>
        <input
          type="number"
          id="stdId"
          name="stdId"
          className="search-btn "
          placeholder="Please Enter your ID"
        />
      </div>
      <button
        type="submit"
        className="home-btn1 w-1/2">
        Search
      </button>
    </form>
  );
}
