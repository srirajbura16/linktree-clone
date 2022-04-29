import { getXataHeaders, DB_PATH } from "../../../services";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const userId = session.user.id;

  const { ...link } = req.body;

  const link_res = await fetch(`${DB_PATH}/tables/Links/data`, {
    method: "POST",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify({
      user: userId,
      ...link,
    }),
  });

  // const data = await link_res.json();
  res.redirect("/dashboard");
}
