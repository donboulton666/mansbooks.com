const endPoint = process.env.TOKEN_ENDPOINT;

export const getToken = async (
  role: string,
  room_id: string,
): Promise<string> => {
  const response = await fetch(`${endPoint}api/token`, {
    method: "POST",
    body: JSON.stringify({
      role: role, // backstage, stage, viewer
      room_id,
    }),
  });

  const { token } = await response.json();

  return token;
};
