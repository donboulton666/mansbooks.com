import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ActiveLink({ children, href }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setLoading(false);
    }
  }, [router.isReady]);
  const style = {
    marginRight: 10,
    color: router.pathname === href ? "blue" : "white",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      <div>{children}</div>
    </a>
  );
}
