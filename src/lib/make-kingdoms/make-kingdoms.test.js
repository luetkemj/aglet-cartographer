import { makeKingdoms } from '../../index.prod';
import { densityMap, takeCensus } from './make-kingdoms';

describe('makeKingdoms', () => {
  it('should exist', () => {
    expect(makeKingdoms).toBeDefined();
  });

  describe('densityMap', () => {
    it('should work with default density', () => {
      expect(densityMap()).toEqual({
        1: 'dense',
        2: 'scattered',
        3: 'frontier',
        4: 'unsettled',
        5: 'desolate',
        6: 'wildland',
      });
    });

    it('should work with custom density', () => {
      expect(densityMap(2)).toEqual({
        2: 'dense',
        4: 'scattered',
        6: 'frontier',
        8: 'unsettled',
        10: 'desolate',
        12: 'wildland',
      });
    });
  });

  describe('takeCensus', () => {
    it('should work', () => {
      expect(takeCensus(5, {
        2: 'dense',
        4: 'scattered',
        6: 'frontier',
        8: 'unsettled',
        10: 'desolate',
        12: 'wildland',
      })).toEqual('frontier');
    });
  });
});
