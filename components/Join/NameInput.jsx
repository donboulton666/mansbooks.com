const NameInput = ({ name, setName }) => {
  return (
    <input
      type="text"
      className="w-full rounded border border-gray-700 bg-slate-900 p-2 text-center"
      placeholder="Enter username"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default NameInput;
