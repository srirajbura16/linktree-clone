export default function FormLayout({ children, title }) {
  return (
    <div className="p-4">
      <h1 className="text-4xl my-2">{title}</h1>
      <hr />
      <main className="mt-4 ">{children}</main>
    </div>
  );
}
