const { RuleTester } = require('eslint');
const rule = require('../no-comment-block');

const ruleTester = new RuleTester();

const expectedErrorMessage = "Invalid comment type. Remove, or replace '/*' with '//'";

ruleTester.run('no-comment-block', rule, {
    valid: [
        '// Lorem Ipsum',
        '//Lorem Ipsum',
    ],
    invalid: [
        {
            code: '/* Lorem Ipsum */',
            errors: [
                {
                    message: expectedErrorMessage,
                },
            ],
        },
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
});
