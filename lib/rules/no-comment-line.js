const MESSAGE_ERROR = "Invalid comment type. Remove, or replace '//' with '/*'";
const MESSAGE_ID = 'eslint-rule-no-comment-line';

function checkForCommentLine(context) {
    return {
        Program: (node) => {
            if (!node || typeof node !== 'object') { return; }
            if (!node.comments || !Array.isArray(node.comments)) { return; }

            node.comments
                .filter((comment) => comment && typeof comment === 'object')
                .filter((comment) => comment.type === 'Line')
                .forEach((comment) => {
                    context.report({
                        node,
                        messageId: MESSAGE_ID,
                        loc: comment.loc,
                    });
                });
        },
    };
}

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        fixable: null,
        docs: {
            description: 'Disable use of // line comments',
            category: 'suggestion',
            url: 'https://www.github.com/Ryandev/eslint-plugin-no-comment',
            recommended: false,
        },
        schema: [],
        type: 'suggestion',
        messages: {
            [MESSAGE_ID]: MESSAGE_ERROR,
        },

    },
    create: checkForCommentLine,
};
