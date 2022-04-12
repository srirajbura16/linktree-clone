export default function Avatar({ image }) {
  return (
    <figure
      className="w-52 h-52 bg-black rounded-full mx-auto bg-cover	bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}
