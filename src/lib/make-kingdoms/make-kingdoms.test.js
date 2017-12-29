import { makeKingdoms } from '../../index.prod';
import { densityMap, takeCensus } from './make-kingdoms';

describe('makeKingdoms', () => {
  it('should exist', () => {
    expect(makeKingdoms).toBeDefined();
  });

  describe('densityMap', () => {
    it('should work with default density', () => {
      expect(densityMap()).toEqual({
        1: 'scattered',
        2: 'frontier',
        3: 'unsettled',
        4: 'desolate',
        5: 'wildland',
      });
    });

    it('should work with custom density', () => {
      expect(densityMap(2)).toEqual({
        2: 'scattered',
        4: 'frontier',
        6: 'unsettled',
        8: 'desolate',
        10: 'wildland',
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
