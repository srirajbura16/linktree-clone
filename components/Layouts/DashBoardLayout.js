export default function DashBoardLayout({ children }) {
  return (
    <div className=" max-w-4xl mx-auto p-4">
      <div className=" bg-slate-300">NAV</div>
      <main className="flex-auto">{children}</main>
    </div>
  );
}
