const RoleSelect = ({ role, setRole }) => {
  return (
    <select
      type="text"
      className="w-full rounded border border-gray-700 bg-gray-900 p-2 text-center"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="listener">Listener</option>
      <option value="speaker">Speaker</option>
      <option value="moderator">Moderator</option>
    </select>
  );
};

export default RoleSelect;
