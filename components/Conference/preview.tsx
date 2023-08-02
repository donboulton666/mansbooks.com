import { useState } from "react";

const Preview = ({ handleSubmit }) => {
  const [userName, setUserName] = useState("");
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
      <div className="h-32 w-64 rounded-lg p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(userName);
          }}
        >
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded-lg border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="John Doe"
            required
          />
          <button className="rounded-lg bg-blue-700 px-4 py-2 text-slate-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Preview;
