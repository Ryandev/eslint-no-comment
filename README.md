# eslint-plugin-no-comment 🫢
Disable use of comment style, either '//' or '/*'

### Install
• *Add package* 
  `yarn add -D eslint-plugin-no-comment` or `npm install --save --dev eslint-plugin-no-comment`

• *Update config*, 
  edit your eslint config file & include `no-comment/no-comment-line` to `plugins` array

• Done! go run eslint 👍


### Reasoning
All modern editors provide keyboard shortcuts to turn an existing line of code into a comment typically `Cmd+'/'` the problem is that this change can be forgotten about & maybe missed during a pull-request review leaving commented out code into the main branch & without reasoning why it was there.

Adding `eslint-no-comment/no-comment-line` will flag this & provided eslint is executed during the commit/deployment stage this will be flagged & addressed before delivery


### Notes
• No auto fix functionality is provided & should not be. Based on the reasoning above, doing so would not help resolve the underlying issue

• `eslint-noc-omment/no-comment-block` Added too, however unlikely to be used based on #reasoning above


### Development
• `yarn lint` static analysis of module

• `yarn test` verify linting rules

• `yarn publish` using NPM_PUBLISH_TOKEN, publish to npmjs.com


### Licensing
MIT
