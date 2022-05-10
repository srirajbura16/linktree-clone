import Link from "next/link";

interface UrlProps {
  title: string;
  url: string;
}

export default function Url({ title, url }: UrlProps) {
  return (
    <Link href={url}>
      <a className="py-4 border border-black rounded-lg">{title}</a>
    </Link>
  );
}
