# eslint-no-comment 🫢
Disable use of comment style, either '//' or '/*'

### Install
• *Add package* 
  `yarn add -D eslint-nocomment` or `npm install --save --dev eslint-no-comment`
• *Update config*, 
  edit your eslint config file & include `eslint-nocomment/no-comment-line` to `plugins`
• Done! go run eslint 👍

### Reasoning
All modern editors provide keyboard shortcuts to turn an existing line of code into a comment typically `Cmd+'/'` the problem is that this change can be forgotten about & maybe missed during a pull-request review leaving commented out code into the main branch & without reasoning why it was there.

Adding `eslint-nocomment/no-comment-line` will flag this & provided eslint is executed during the commit/deployment stage this will be flagged & addressed before delivery

### Notes
• No auto fix functionality is provided & should not be. Based on the reasoning above, doing so would not help resolve the underlying issue
• `eslint-nocomment/no-comment-block` Added too, however unlikely to be used based on #reasoning above

### Licensing
MIT
