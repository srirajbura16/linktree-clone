import { useEffect } from "react";

export default function Test({ data }) {


  useEffect( async () => {
    var bodyRaw = {
      "columns": [
        "url",
        "title"
      ]
    };
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.XATA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyRaw),
    };
  
    const res = await fetch(
      "https://open-mpqb7l.xata.sh/db/Linktree:main/tables/Links/query",
      requestOptions
    );
  
    const data = await res.json();
  
    console.log(data);
  }, [])
  return (
    <div >
      <main >
        <h1>Xata Test</h1>
      </main>
    </div>
  );
}

//getServerSidePros runs on the server, but produces a 401(auth) error.
  // create a .env and add your XATA_API_KEY
  // uncomment and check for logged data on console
  // https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

// export async function getServerSideProps(context) {
//   var bodyRaw = {
//     "columns": [
//       "url",
//       "title"
//     ]
//   };
//   var requestOptions = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.XATA_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(bodyRaw),
//   };

//   const res = await fetch(
//     "https://open-mpqb7l.xata.sh/db/Linktree:main/tables/Links/query",
//     requestOptions
//   );

//   const data = await res.json();

//   console.log(data);

//   return {
//     props: { data }, 
//   };
// }