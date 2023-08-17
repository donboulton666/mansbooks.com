import useSWR, { useSWRConfig, ConfigInterface } from "swr";

export default function useLoginStatus(opts?: ConfigInterface) {
  const { data, error } = useSWR(
    `/api/github-oauth`,
    async (url) => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    },
    {
      ...opts,
      revalidateOnFocus: false,
    },
  );
  const { mutate } = useSWRConfig();
  return {
    loginStatus: error
      ? ("loggedOut" as const)
      : !data
      ? ("loading" as const)
      : ("loggedIn" as const),
    mutate,
  };
}
