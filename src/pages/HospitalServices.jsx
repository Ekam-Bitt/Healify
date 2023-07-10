import Map from "./HospitalServices/Map";

export default function HospitalServices() {
  return (
    <div>
      <h1 className="text-4xl p-4 w-[60%] font-Lato">
        Look for availability of Hospital beds/OTs/Ambulances across your city
      </h1>

      {/* Searchbar */}

      <div>
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative p-10 left-4 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none"></div>
            <input
              type="text"
              id="simple-search"
              className="block w-[82vw] p-5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-100 focus:ring-violet-50 focus:border-violet-50 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for available beds/OTs/ other emergency services.  "
              required=""
            />
          </div>

          <button
            type="submit"
            className="relative p-5 ml-2 text-white bg-blue-700 border border-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>

            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      {/* Maps */}

      <Map></Map>
    </div>
  );
}
