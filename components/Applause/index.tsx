import React from "react";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "@lib/schema";
import fetcher from "@lib/fetcher";
import { Applause } from "@lib/types";
import useSWR from "swr";
import clapping from "../../public/static/sounds/clapping.mp3";
import Confetti from "@components/DomConfetti";
import axios from "axios";

type Applause = Database["public"]["Tables"]["applause"]["Row"];

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const Wrapper = (props) => <span style={{ position: "relative" }} {...props} />;

const ConfettiWrapper = (props) => (
  <span style={{ position: "absolute", top: 0, right: 0 }} {...props} />
);
const slug = typeof window !== "undefined" ? window.location.href : "";

const HEADERS = {
  "Content-Type": "text/plain",
};

const getCount = async (slug) => {
  const query = slug ? `?slug=${slug}` : "";
  /* eslint-disable-next-line no-return-await */
  return await axios.get(`${supabase}/get-count${query}`, {
    headers: HEADERS,
  });
};

const updateCount = async (slug, count = 1) => {
  console.log(count);
  const query = slug ? `?slug=${slug}` : "";
  /* eslint-disable-next-line no-return-await */
  return await axios.post(
    `${supabase}/update-count${query}`,
    JSON.stringify(`${count},${VERSION}`),
    {
      headers: HEADERS,
    },
  );
};

interface Props {
  slug: string;
}

const ApplauseButton = ({ slug, props }: Props) => {
  const supabase = useSupabaseClient<Database>();
  const [count, setCount] = useState(0);
  const [isApplause, setIsApplause] = useState<Applause[]>([]);
  const { data } = useSWR<Applause>(`/api/applause/${slug}`, fetcher);
  const [play] = useSound(clapping);
  const doApplause = () => {
    if (!isApplause) {
      console.log("do capplause");
      const callBackend = async () => {
        const result = await updateCount(slug, 1);
        setCount(result.data);
        setIsApplause(true);
      };
      callBackend();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCount(slug);
      console.log(result);
      setCount(result.data);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <span
        className="text-lg"
        style={{
          cursor: "pointer",
          padding: "1em",
        }}
        onClick={(e) => {
          e.preventDefault();
          doApplause();
          play();
        }}
      >
        {isApplause ? "💕" : "❤️"}
        <span className="group relative flex items-center justify-end">{`${
          (data?.count ?? 0) > 0 ? data.count.toLocaleString() : "–––"
        } applause`}</span>
      </span>
      <ConfettiWrapper>
        <Confetti active={isApplause} config={confettiConfig} {...props} />
      </ConfettiWrapper>
    </Wrapper>
  );
};

export default ApplauseButton;
