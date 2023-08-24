import React from "react";

export default function Subscribe() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
    };

    const data = {
      subscriberName: target.name,
      subscriberEmail: target.email,
    };
    //call to the Netlify Function you created
    fetch("./.netlify/functions/triggerSubscribeEmail", {
      method: "POST",
      body: JSON.stringify({
        subscriberName: data.subscriberName,
        subscriberEmail: data.subscriberEmail,
        inviteeEmail: "info@netlify.com",
      }),
    });
  };
  return (
    <div className="subscribe-form-container">
      <form onSubmit={handleSubmit}>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <input
                className="mb-3 block w-full appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-wine-300 focus:outline-none focus:ring-wine-200 sm:text-sm"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
            {errors?.firstName && <p>{errors.firstName.message}</p>}
          </div>
          <div className="col-span-6">
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300"
            >
              Email address
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-slate-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="on"
                placeholder="Email"
                className="mt-1 block w-full rounded-md border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 shadow-sm focus:border-wine-300 focus:ring-wine-200 sm:text-sm"
              />
            </div>
          </div>
          <button
            className="rounded-md bg-slate-800 px-4 py-2 text-slate-200 shadow-lg hover:bg-slate-900 hover:shadow-slate-900/50"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
