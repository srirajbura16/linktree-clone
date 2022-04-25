import { getSession, useSession } from "next-auth/react";
import { getXataHeaders, DB_PATH } from "../services";
import DashBoardLayout from "../components/Layouts/DashBoardLayout";
import LinkModel from "../components/LinkModel";

export default function dashboard({ links }) {
  const { data: session } = useSession();
  console.log(links);
  return (
    <DashBoardLayout>
      <div className="flex flex-col">
        {links.map((link) => {
          const { title, url, id } = link;
          return (
            <LinkModel key={id} title={title} url={url} id={id}>
              <div className="p-4 bg-gray-400 m-4 cursor-pointer">
                <h4 className="text-2xl">{title}</h4>
                <p>{url}</p>
              </div>
            </LinkModel>
          );
        })}
      </div>
    </DashBoardLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: true,
      },
    };
  }

  var linksBodyRaw = {
    columns: ["*"],
    filter: {
      "user.id": session.user.id,
    },
  };

  const links_res = await fetch(`${DB_PATH}/tables/Links/query`, {
    method: "POST",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify(linksBodyRaw),
  });
  const links = await links_res.json();

  return {
    props: {
      links: links.records,
    },
  };
}
