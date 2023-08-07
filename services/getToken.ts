import { v4 } from "uuid";

const getToken = async (user_id) => {
  const { role } = JSON.parse(req.body);
  const response = await fetch(`${process.env.TOKEN_ENDPOINT}api/token`, {
    method: "POST",
    body: JSON.stringify({
      user_id: v4(),
      role: role,
      room_id: process.env.ROOM_ID,
    }),
  });
  
  const { token } = await response.json();
  return token;
};

export default getToken;
