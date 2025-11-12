/**
* Return true if `a` and `b` are anagrams (same characters with the same multiplicities).
* Order does not matter.
* Defaults: case-sensitive; whitespace and punctuation count as characters.
* @param {string} a
* @param {string} b
* @param {object} [options]
* @param {boolean} [options.ignoreCase=false]
* @param {boolean} [options.whitespace=false]
* @returns {boolean}
*/

export function isAnagram(a, b, options = {}) {
    const { ignoreCase = false, ignoreWhitespace = false } = options;

    // check if each input is a string
    if (typeof a !== 'string' || typeof b !== 'string') return false;

    // normalize strings
    if (ignoreCase) {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    if (ignoreWhitespace) {
        a = a.replace(/\s+/g, '');
        b = b.replace(/\s+/g, '');
    }

    // check if both inputs have the same length
    if (a.length !== b.length) return false;

    // sort and compare the characters
    const sortString = (str) => str.split('').sort().join('');
    return sortString(a) === sortString(b);
}