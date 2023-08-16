import { useEffect, useState } from "react";
import Layout from "@components/PageLayout";

export default function Results() {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    fetch("/api/results")
      .then((res) => res.json())
      .then((response) => setSurveyData(response.data));
  }, []);

  return (
    <Layout>
      <div className="center mx-auto max-w-5xl">
        {" "}
        {surveyData.map((data) => (
          <div key={data.id}>
            <p>
              <strong> Rating: </strong> {data.rating}{" "}
            </p>{" "}
            <p>
              <strong> Recommendation: </strong> {data.recommendation}{" "}
            </p>{" "}
            <p>
              <strong> Comment: </strong> {data.comment}{" "}
            </p>{" "}
          </div>
        ))}{" "}
      </div>
    </Layout>
  );
}
