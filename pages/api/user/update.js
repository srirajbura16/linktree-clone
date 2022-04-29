import {
  getXataHeaders,
  DB_PATH,
  removeUnenteredData,
} from "../../../services";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const userId = session.user.id;

  const updatedUserInfo = await removeUnenteredData(req.body);

  const user_res = await fetch(`${DB_PATH}/tables/Users/data/${userId}`, {
    method: "PATCH",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify({
      ...updatedUserInfo,
    }),
  });

  const data = await user_res.json();

  res.redirect("/settings");
}
