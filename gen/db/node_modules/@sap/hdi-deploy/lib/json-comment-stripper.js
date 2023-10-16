'use strict';
// This is a port of CommentUtils.cpp from the HDI server side to nodejs.
/**
 * Remove comments from a json string.
 *
 * @param {any} input The JSON string to strip of comments.
 * @returns {String} The json input without comments.
 */
function strip_json_comments (input) {
  const size = input.length;

  const in_cstr = input;

  // use an array for the output so that we can modify elements at specific indizes.
  const out_cstr = input.split();

  let errorStateStartPos = 0;

  const State = {
    Normal: 0,
    InsideString: 1,
    InsideStringStartOfEscape: 2,
    StartOfComment: 3,
    InsideSingleLineComment: 4,
    InsideMultiLineComment: 5,
    EndOfMultiLineComment: 6
  };

  let state = State.Normal;

  for (let i = 0; i < size; ++i) {
    let c = in_cstr[i];

    switch (state) {
    case State.Normal:
      switch (c) {
      case '"':
        state = State.InsideString;
        break;
      case '/':
        state = State.StartOfComment;
        break;
      default:
        break;
      }
      // else: nothing to do
      break;
    case State.InsideString:
      errorStateStartPos = i;
      switch (c) {
      case '"':
        state = State.Normal;
        break;
      case '\\':
        state = State.InsideStringStartOfEscape;
        break;
      default:
        break;
      }
      break;
    case State.InsideStringStartOfEscape:
      state = State.InsideString;
      break;
    case State.StartOfComment:
      errorStateStartPos = i;
      switch (c) {
      case '/':
        state = State.InsideSingleLineComment;
        out_cstr[i - 1] = ' ';
        c = ' ';
        break;
      case '*':
        state = State.InsideMultiLineComment;
        out_cstr[i - 1] = ' ';
        c = ' ';
        break;
      case '"':
        state = State.InsideString;
        break;
      default:
        state = State.Normal;
        break;
      }
      break;
    case State.InsideSingleLineComment:
      switch (c) {
      case '\n':
      case '\r':
        state = State.Normal;
        break;
      default:
        c = ' ';
        break;
      }
      break;
    case State.InsideMultiLineComment:
      switch (c) {
      case '*':
        state = State.EndOfMultiLineComment;
        c = ' ';
        break;
      case '\n':
      case '\r':
        // keep \n, \r in output
        break;
      default:
        c = ' ';
        break;
      }
      break;
    case State.EndOfMultiLineComment:
      switch (c) {
      case '*':
        state = State.EndOfMultiLineComment;
        c = ' ';
        break;
      case '/':
        state = State.Normal;
        c = ' ';
        break;
      case '\n':
      case '\r':
        // keep \n, \r
        state = State.InsideMultiLineComment;
        break;
      default:
        state = State.InsideMultiLineComment;
        c = ' ';
        break;
      }
      break;
    }
    out_cstr[i] = c;
  }

  if (state === State.EndOfMultiLineComment || state === State.InsideMultiLineComment) {
    throw new Error(`A multiline comment is missing an ending! Error at position ${errorStateStartPos}.`);
  }
  if (state === State.InsideString || state === State.InsideStringStartOfEscape) {
    throw new Error(`A string is not terminated! Error at position ${errorStateStartPos}.`);
  }

  // Turn the array back into a string.
  return out_cstr.reduce((p, c) => p + c, '');
}

module.exports = strip_json_comments;