const RoleSelect = ({ role, setRole }) => {
  return (
    <select
      type="text"
      className="w-full rounded border border-gray-700 bg-slate-900 p-2 text-center"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="listener">Listener</option>
      <option value="stage">Stage</option>
      <option value="speaker">Speaker</option>
      <option value="backstage">Backstage</option>
    </select>
  );
};

export default RoleSelect;
