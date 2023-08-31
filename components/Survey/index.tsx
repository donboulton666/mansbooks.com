import { Redis } from "@upstash/redis";
import { useState, Fragment } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

const plans = ["The Best", "Really Good", "Ok", "Needs Work", "Bad"];

const redis = Redis.fromEnv();

const member = await redis.srandmember<string>("mansbooks");

const recommendations = [
  { id: 1, name: "Yes" },
  { id: 2, name: "No" },
];

export default function Survey() {
  const [rating, setRating] = useState(ratings[0]);
  const [recommendation, setRecommendation] = useState(recommendations[0]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      rating: form.rating.value,
      recommendation: form.recommendation.value,
      comment: form.comment.value,
    };

    // send data to backend
    await fetch("/api/submit", {
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    alert("Thank you for your feedback!");
  };

  const RadioGroupOption = ({ value }) => (
    <div className="w-96">
      <ul class="w-full items-center rounded-lg border border-slate-600 bg-slate-900 text-sm font-medium text-slate-300 sm:flex">
        <li class="w-full border-b border-slate-600 sm:border-b-0 sm:border-r">
          <div class="flex items-center pl-3">
            <input
              id="list-radio"
              type="radio"
              name="rating"
              value={value}
              required
              className="h-4 w-4 border-slate-500 bg-slate-600 text-blue-600 ring-offset-slate-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-slate-700"
            />
            <label
              for="list-radio"
              className="ml-2 w-full py-3 text-sm font-medium text-slate-300"
            >
              {value}
            </label>
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className="center mx-auto mb-10 mt-10 max-w-5xl">
        <form onSubmit={handleSubmit}>
          <div className="center mx-auto mb-10 mt-10 max-w-5xl">
            <h2>Welcome {member}</h2>
            <RadioGroup value={rating} onChange={setRating}>
              <RadioGroup.Label>Rating</RadioGroup.Label>
              {ratings.map((rating) => (
                /* Use the `active` state to conditionally style the active option. */
                /* Use the `checked` state to conditionally style the checked option. */
                <RadioGroup.Option key={rating} value={rating} as={Fragment}>
                  {({ active, checked }) => (
                    <li
                      className={`${
                        active
                          ? "bg-wine-300 text-slate-300"
                          : "bg-slate-950 text-slate-200"
                      }`}
                    >
                      {checked && <CheckIcon />}
                      {rating}
                    </li>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          <div>
            <RadioGroup value={recommendation} onChange={setAngel}>
              <RadioGroup.Label>Is Angelina an Angel</RadioGroup.Label>
              {recommendations.map((recommendation) => (
                <RadioGroup.Option
                  key={recommendation.id}
                  value={recommendation}
                >
                  {({ active, checked }) => (
                    <li
                      className={`${
                        active
                          ? "bg-wine-300 text-slate-300"
                          : "bg-slate-950 text-slate-200"
                      }`}
                    >
                      {checked && <CheckIcon />}
                      {recommendation.name}
                    </li>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>{" "}
          <div className="mt-2">
            <label>Please share your thoughts... (Optional)</label>
            <textarea
              name="comment"
              className="mt-1 block w-full rounded-md border-slate-800 bg-slate-900 p-2.5 pl-14 text-slate-300 caret-blue-500 shadow-sm focus:border-wine-300 focus:caret-indigo-500 focus:ring-wine-200 sm:text-sm"
              placeholder="Which song do you like most..."
            ></textarea>
          </div>
          <input
            type="submit"
            className="rounded-md bg-slate-800 px-4 py-2 mt-4 text-slate-200 shadow-lg hover:bg-slate-900 hover:shadow-slate-900/50"
          />
        </form>
      </div>
    </>
  );
}
