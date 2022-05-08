import { getXataHeaders, DB_PATH } from "../../../services";

export default async function handler(req, res) {
  const { linkId, ...link } = req.body;

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
