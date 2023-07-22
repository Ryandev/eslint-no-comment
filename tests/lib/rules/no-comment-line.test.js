const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-comment-line');

const ruleTester = new RuleTester();

const expectedErrorMessage = "Invalid comment type. Remove, or replace '//' with '/*'";

ruleTester.run('no-comment-line', rule, {
    valid: [
        '/* Lorem Ipsum */',
        {
            code: '/* Lorem Ipsum \n'
+ ' Lorem Ipsum \n'
+ ' Lorem Ipsum \n'
+ ' Lorem Ipsum */',
            errors: [
                {
                    message: expectedErrorMessage,
                },
            ],
        },
    ],
    invalid: [
        {
            code: '// Lorem Ipsum',
            errors: [
                {
                    message: expectedErrorMessage,
                },
            ],
        },
    ],
});
