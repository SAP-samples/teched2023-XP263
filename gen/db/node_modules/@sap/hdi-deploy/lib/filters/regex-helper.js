'use strict';
/**
 * Helper class to handle regex
 *
 * @class RegexHelper
 */
class RegexHelper {
  /**
   * Creates an instance of RegexHelper.
   *
   * @memberOf RegexHelper
   */
  constructor () {
    this.dot_matcher = new RegExp('\\.', 'g');
    this.single_star_matcher = new RegExp('\\*', 'g');
    this.double_star_matcher = new RegExp('\\*{2}', 'g');
    this.escaped_double_start_with_slash_matcher = new RegExp('\\.\\*\\/', 'g');
    /*
     * Checks if ** are either prepended by a "normal character" or followed by a "normal character".
     * Normal is everything that is not a slash or line start/end.
     */
    this.invalid_pattern_matcher = new RegExp('[^/^]\\*{2}|\\*{2}(?!/|$)');
  }

  /**
   * Checks if the pattern is valid, mainly if the ** are in a valid position.
   *
   * @param {String} regex The regex to check
   * @returns {undefined}
   * @throws Throws an exception if the pattern is not valid.
   * @memberOf RegexHelper
   */
  assert_pattern_is_valid (regex) {
    const split_regex = regex.split(this.invalid_pattern_matcher);
    if (split_regex.length > 1) {
      const error = new Error(`Pattern "${regex}" is invalid. Invalid part starts after "${split_regex[0]}"`);
      throw error;
    }
  }

  /**
   * Escapes ., * and ** to make the regex work like bash
   *
   * @param {String} regex The regex string to escape
   * @returns {String} The escaped regex string.
   * @throws Throws an exception if the pattern is not valid.
   */
  build_regex (regex) {
    this.assert_pattern_is_valid(regex);

    const escaped_regex =
      // Turn all . into real string . and not the "any char"
      regex.replace(this.dot_matcher, '\\.')
        // Split the regex at any ** so that we can first match all single *
        .split(this.double_star_matcher)
        // Replace a single * with "match anything but a /", to match everything inside the directory, but not subdirectories.
        .map((substring) => substring.replace(this.single_star_matcher, '[^/]*'))
        // Put the substrings back together, joining them via "**"
        .reduce((previous, current) => `${previous}.*${current}`)
        // To ensure that the files directly underneath i.e. src/**/*.cfg get matched, make the following slash optional.
        .replace(this.escaped_double_start_with_slash_matcher, '.*/?');

    return `^${escaped_regex}$`;
  }

  /**
   * Check if the given regex matches the whole string.
   *
   * @param {any} regex Regex to use
   * @param {any} string String to check
   * @returns {boolean} True if the regex matches the whole string.
   */
  regex_match (regex, string) {
    if (!string) {
      return false;
    }
    const matched = string.match(regex);
    // Return false if no match was found or only a part of the string matches.
    if (matched !== null && matched.length > 1) {
      throw new Error(`The regex ${regex} matched part of the string. The regex should only be able to match the whole string or nothing at all.`);
    }
    return matched !== null;
  }
}


module.exports = new RegexHelper();