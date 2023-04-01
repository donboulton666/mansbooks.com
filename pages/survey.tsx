import Head from "next/head";
import Image from "next/image";
import Layout from "@components/PageLayout";
import { useState } from "react";

const plans = [
  {
    name: "Bad",
    value: "1",
  },
  {
    name: "Not Good",
    value: "2",
  },
  {
    name: "Could be better",
    value: "4",
  },
  {
    name: "Needs Work",
    value: "5",
  },
  {
    name: "OK",
    value: "6",
  },
  {
    name: "Nice",
    value: "7",
  },
  {
    name: "I Like it",
    value: "8",
  },
  {
    name: "Very Nice",
    value: "9",
  },
  {
    name: "Smoking Hot",
    value: "10",
  },
];

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
    <div>
      <input type="radio" name="rating" value={value} required />{" "}
      <label>{value}</label>
    </div>
  );

  return (
    <Layout>
      <div
        className="mb-20 flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <form>
          <div className="p-4">
            <label className="mb-2">
              How do you feel about our products/services?
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <RatingOption key={value} value={value} />
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2">
              Would you recommend us to your colleagues?
            </label>

            <div>
              <input type="radio" name="recommendation" value="true" required />{" "}
              <label>Yes</label>
            </div>

            <div>
              <input
                type="radio"
                name="recommendation"
                value="false"
                required
              />{" "}
              <label>No</label>
            </div>
          </div>

          <div>
            <label>Please share your thoughts... (Optional)</label>
            <div className="mb-2">
              <textarea
                className="mt-1 block w-full rounded-md border-slate-800 bg-slate-900 p-2.5 pl-14 text-slate-300 caret-blue-500 shadow-sm focus:border-wine-300 focus:caret-indigo-500 focus:ring-wine-200 sm:text-sm"
                name="comment"
                rows={5}
                placeholder="This is what I liked most/this is what you can improve..."
              />
            </div>
          </div>

          <input
            className="rounded-md bg-slate-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
            type="submit"
          />
        </form>
      </div>
    </Layout>
  );
}
