const noCommentBlock = require('./rules/no-comment-block');
const noCommentLine = require('./rules/no-comment-line');

module.exports = {
    rules: {
        'no-comment-block': noCommentBlock,
        'no-comment-line': noCommentLine,
    },
};
