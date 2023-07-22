# Disable use of /* comment blocks (`no-comment/no-comment-block`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Disable block style comments & only allow // style comments

## Rule Details

Examples of **incorrect** code for this rule:

```js

/* My comment */
/** My comment */

```

Examples of **correct** code for this rule:

```js

// My comment

// Multi
// line
// comment

```


## Further Reading

https://github.com/Ryandev/eslint-plugin-no-comment.git

