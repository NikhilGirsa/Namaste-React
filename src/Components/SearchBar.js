const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="search-bar my-6 flex gap-2 max-w-2xl mx-auto">
      <input
        type="text"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        onClick={() => onChange(value)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
