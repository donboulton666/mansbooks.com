import Layout from "@components/PageLayout";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const member = await redis.srandmember<string>("mansbooks");

export default function Survey() {
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

  const RatingOption = ({ value }) => (
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
      <Layout>
        <div className="center mx-auto mb-10 mt-10 max-w-5xl">
          <h2>Welcome {member}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <h2>How do you feel about I'm Old Enough?</h2>
              {[1, 2, 3, 4, 5].map((value) => (
                <RatingOption key={value} value={value} />
              ))}
            </div>
            <div>
              <h2>Is Angelina Jordan an Angel?</h2>

              <div>
                <input
                  id="yes"
                  type="radio"
                  name="recommendation"
                  value="true"
                  required
                  className="h-4 w-4 border-slate-600 bg-slate-700 text-blue-600 ring-offset-slate-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                />{" "}
                <label for="yes">Yes</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="no"
                  name="recommendation"
                  value="false"
                  class="h-4 w-4 border-slate-600 bg-slate-700 text-blue-600 ring-offset-slate-800 focus:ring-2 focus:ring-blue-600"
                  required
                />{" "}
                <label for="no">No</label>
              </div>
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
      </Layout>
    </>
  );
}
