const HoverFocus = () => {
  return (
    <div>
      <div>
        <button className="w-40 bg-sky-400 text-white rounded hover:bg-sky-700 hover:shadow-xl m-3">
          Save
        </button>
        <button className="w-40 bg-red-400 text-white rounded font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-400">
          Cancel
        </button>
      </div>
      <div>
        <input
          type="email"
         className="border border-gray-300 text-gray-600 text-sm rounded-lg focus:outline-red-500 block w-1/2 p-2 mt-4 peer"
        />
       
        <p className="mt-2 text-red-600 text-sm invisible peer-invalid:visible">
          Please provide a valid email
        </p>
      </div>
    </div>
  );
};

export default HoverFocus;
