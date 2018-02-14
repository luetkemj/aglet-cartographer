export default function hexCorner(center, size, i) {
  const deg = 60 * i;
  const rad = (Math.PI / 180) * deg;

  return {
    x: center.x + (size * Math.cos(rad)),
    y: center.y + (size * Math.sin(rad)),
  };
}
