// @flow
import { random } from 'lodash';

export default function isSeed(chanceToBeSeed: number): boolean {
  return (random(1, 100) <= chanceToBeSeed) || false;
}
