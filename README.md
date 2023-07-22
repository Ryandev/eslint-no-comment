# eslint-plugin-no-comment 🫢
Disable use of comment style, either '//' or '/*'


### Usage
• *Add package* 
  `yarn add -D eslint-plugin-no-comment` or `npm install --save-dev eslint-plugin-no-comment`

• *Enable plugin*, 
Add `no-comment` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-comment"
    ]
}
```

• *Enable rule*
Then configure the rules under the rules section.

```json
{
    "rules": {
        "no-comment/no-comment-line": "error"
    }
}
```


### Reasoning
All modern editors provide keyboard shortcuts to turn an existing line of code into a comment typically `Cmd+'/'` the problem is that this change can be forgotten about & maybe missed during a pull-request review leaving commented out code into the main branch & without reasoning why it was there.

Adding `eslint-no-comment/no-comment-line` will flag this & provided eslint is executed during the commit/deployment stage this will be flagged & addressed before delivery


### Notes
• No auto fix functionality is provided & should not be. Based on the reasoning above, doing so would not help resolve the underlying issue

• `eslint-no-comment/no-comment-block` Added too, however unlikely to be used based on #reasoning above


<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                               | Description                      | 🔧 |
| :------------------------------------------------- | :------------------------------- | :- |
| [no-comment-block](docs/rules/no-comment-block.md) | Disable use of /* comment blocks | 🔧 |
| [no-comment-line](docs/rules/no-comment-line.md)   | Disable use of // line comments  | 🔧 |

<!-- end auto-generated rules list -->


### Development
• `yarn lint` static analysis of module

• `yarn test` verify linting rules

• `yarn publish` using NPM_PUBLISH_TOKEN, publish to npmjs.com


### Licensing
MIT

### Attribution
• Project built using yeoman generator `yo eslint:plugin` & `yo eslint:rule`
