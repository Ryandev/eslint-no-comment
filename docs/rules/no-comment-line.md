# Disable use of // line comments (`no-comment/no-comment-line`)

<!-- end auto-generated rule header -->

Disable use of double slash comments. Modern IDEs make it very convenient to disable a line of code which can often happen during debugging. If this is missed during code review it can result in commented out code in production. 

If a comment is needed use `/* */` style comments as there is no shortcut & is guaranteed to be intentional


## Rule Details

Examples of **incorrect** code for this rule:

```js

// My comment

// Multi
// line
// comment

```

Examples of **correct** code for this rule:

```js

/* My comment */
/** My comment */

```


## When Not To Use It

• Modern IDEs not used
• Only // style comments are used 
• Keyboard shortcuts for commenting out code disabled i.e. `Cmd+/` 

## Further Reading

https://github.com/Ryandev/eslint-plugin-no-comment.git

