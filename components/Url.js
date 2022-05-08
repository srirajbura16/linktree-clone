import Link from "next/link";

export default function Url({ link }) {
  const { url, title } = link;
  return (
    <Link href={url}>
      <a className="py-4 border border-black rounded-lg">{title}</a>
    </Link>
  );
}
