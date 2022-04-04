import { getXataHeaders, DB_PATH } from "../../services";

export default async function handler(req, res) {
  const { title, url } = req.body;

  const link_res = await fetch(`${DB_PATH}/tables/Links/data`, {
    method: "POST",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify({
      title: title,
      url: url,
    }),
  });

  res.redirect("/");
}
