import { isAnagram } from './isAnagram.js';

describe('isAnagram', () => {
    it('returns true for simple anagrams', () => {
        expect(isAnagram('triangle', 'integral')).toBe(true);
    });

    it('returns false for non-anagrams', () => {
        expect(isAnagram('apple', 'papelx')).toBe(false);
    });

    it('is case-sensitive by default', () => {
        expect(isAnagram('Triangle', 'integral')).toBe(false);
    });

    it('ignores case when option is set', () => {
        expect(isAnagram('Triangle', 'integral', { ignoreCase: true })).toBe(true);
    });

    it('counts whitespace by default', () => {
        expect(isAnagram('a b', 'ab')).toBe(false);
    });

    it('ignores whitespace when option is set', () => {
        expect(isAnagram('a b', 'ab', { ignoreWhitespace: true })).toBe(true);
    });

    it('handles empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
    });

    it('returns false for non-string inputs', () => {
        expect(isAnagram(12345, '54321')).toBe(false);
    });
});