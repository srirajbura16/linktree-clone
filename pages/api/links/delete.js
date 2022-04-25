import { getXataHeaders, DB_PATH } from "../../../services";

export default async function handler(req, res) {
  const { linkId } = req.body;

  const link_res = await fetch(`${DB_PATH}/tables/Links/data/${linkId}`, {
    method: "DELETE",
    headers: {
      ...(await getXataHeaders()),
    },
  });

  res.redirect("/dashboard");
}
