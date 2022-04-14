import { getXataHeaders, DB_PATH } from "../../services";

export default async function handler(req, res) {
  const { userId, ...userInfo } = req.body;

  const user_res = await fetch(`${DB_PATH}/tables/Users/data/${userId}`, {
    method: "PATCH",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify({
      ...userInfo,
    }),
  });

  res.status(200).json({ message: "updated" });
}
