import hexCorner from '../hex-corner';

export default function hexPoints(center, size) {
  let points = '';
  for (let i = 0; i < 6; i += 1) {
    const point = hexCorner(center, size, i);
    points += `${point.x},${point.y} `;
  }

  return points;
}
