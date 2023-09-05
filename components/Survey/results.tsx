import { useEffect, useState } from "react";

export default function Results() {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    fetch("/api/results")
      .then((res) => res.json())
      .then((response) => setSurveyData(response.data));
  }, []);

  return (
    <div>
      <div className="center mx-auto my-10 max-w-5xl">
        {" "}
        {surveyData.map((data) => (
          <div key={data.id}>
            <div>
              <strong> Rating: </strong> {data.rating}{" "}
            </div>{" "}
            <div>
              <strong> Recommendation: </strong> {data.recommendation}{" "}
            </div>{" "}
            <div>
              <strong> Comment: </strong> {data.comment}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
