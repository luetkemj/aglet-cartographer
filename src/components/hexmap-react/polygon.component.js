import React from 'react';
import PropTypes from 'prop-types';

import hexPoints from '../../lib/hex-points';
import hexToPixel from '../../lib/hex-to-pixel';
import idToHex from '../../lib/id-to-hex';

export default function Polygon({
  terrain,
  id,
  size,
}) {
  const points = hexPoints(hexToPixel(idToHex(id), size), size);
  return (
    <polygon
      stroke="black"
      strokeWidth="1"
      fill={terrain}
      points={points}
    />
  );
}

Polygon.propTypes = {
  terrain: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
