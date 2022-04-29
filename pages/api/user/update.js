import {
  getXataHeaders,
  DB_PATH,
  removeUnenteredData,
} from "../../../services";

export default async function handler(req, res) {
  const { userId, ...userInfo } = req.body;

  const updatedUserInfo = await removeUnenteredData(userInfo);

  const user_res = await fetch(`${DB_PATH}/tables/Users/data/${userId}`, {
    method: "PATCH",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify({
      ...updatedUserInfo,
    }),
  });

  // const data = await user_res.json();

  res.redirect("/dashboard");
}
