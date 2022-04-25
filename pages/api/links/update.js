import { getXataHeaders, DB_PATH } from "../../../services";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { linkId, ...link } = req.body;
  console.log(req.body);

  const link_res = await fetch(`${DB_PATH}/tables/Links/data/${linkId}`, {
    method: "PATCH",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify({
      ...link,
    }),
  });

  res.redirect("/dashboard");
}
