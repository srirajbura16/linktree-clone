export default function Avatar({ image }) {
  return (
    <figure
      className="w-32 h-32 lg:w-44 lg:h-44 bg-black rounded-full mx-auto bg-cover	bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}
