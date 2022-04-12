export default function FormLayout({ children, title }) {
  return (
    <div className="max-w-3xl mx-auto p-4 m">
      <h1 className="text-4xl my-2">{title}</h1>
      <hr />
      <main className="mt-4">{children}</main>
    </div>
  );
}
