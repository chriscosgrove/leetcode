
import { firstUniqChar } from "./387";

describe('First Unique Characters', () => {
    it('leetcode', () => {
      expect(firstUniqChar('leetcode')).toEqual(0);
    });

    it('loveleetcode', () => {
      expect(firstUniqChar('loveleetcode')).toEqual(2);
    });

    it('aabb', () => {
      expect(firstUniqChar('aabb')).toEqual(-1);
    });
  });
