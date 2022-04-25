import { getSession } from "next-auth/react";
import { getXataHeaders, DB_PATH } from "../services";
import DashBoardLayout from "../components/Layouts/DashBoardLayout";
import LinkModel from "../components/LinkModel";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";

export default function dashboard({ links }) {
  return (
    <DashBoardLayout>
      <div className="flex flex-col">
        {links.map((link) => {
          const { title, url, id } = link;
          return (
            <div className="p-4 bg-gray-400 m-4">
              <div className="flex justify-between">
                <h4 className="text-2xl">{title}</h4>
                <div>
                  <div className="flex w-20 justify-between text-lg">
                    <div className="cursor-pointer">
                      <LinkModel key={id} title={title} url={url} id={id}>
                        <EditIcon />
                      </LinkModel>
                    </div>
                    <form action="/api/links/delete" method="post">
                      <input type="hidden" value={id} name="linkId" />
                      <button type="submit">
                        <CloseIcon />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <p>{url}</p>
            </div>
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
