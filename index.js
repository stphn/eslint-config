module.exports = {
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'react',
		'react-hooks',
		'import',
		'react-native'
	],
	env: {
		browser: true,
		node: true,
		commonjs: true,
		mocha: true,
		es6: true
	},
	rules: {
		'no-cond-assign': [ 2, 'always' ],
		'no-constant-condition': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-unsafe-negation': 2,
		'no-obj-calls': 2,
		'no-unreachable': 2,
		'no-dupe-else-if': 2,
		'use-isnan': 2,
		'valid-typeof': 2,
		'no-unexpected-multiline': 2,
		'eqeqeq': [ 2, 'always', { null: 'ignore' }],
		'new-parens': 2,
		'no-array-constructor': 2,
		'no-lonely-if': 2,
		'no-extra-parens': [ 2, 'functions' ],
		'keyword-spacing': 2,
		'wrap-regex': 2,
		'arrow-spacing': [ 2, { before: true, after: true }],
		'constructor-super': 2,
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-this-before-super': 2,
		'prefer-const': 2,
		'no-empty': [ 2, { allowEmptyCatch: true }],
		'valid-jsdoc': [ 2, { prefer: { return: 'returns' }, requireParamDescription: false, requireReturnDescription: false, requireReturn: false }],
		'dot-location': [ 2, 'property' ],
		'wrap-iife': 2,
		'array-bracket-spacing': [ 2, 'always', { objectsInArrays: false, arraysInArrays: false }],
		'brace-style': [ 2, '1tbs', { allowSingleLine: true }],
		'camelcase': [ 2, { properties: 'never' }],
		'comma-spacing': [ 2, { before: false, after: true }],
		'comma-style': [ 2, 'last' ],
		'comma-dangle': [ 2, { arrays: 'never', objects: 'never', imports: 'never', exports: 'never', functions: 'never' }],
		'indent': [ 2, 'tab', { SwitchCase: 1, CallExpression: { arguments: 'off' } }],
		'key-spacing': [ 2, { beforeColon: false, afterColon: true }],
		'no-mixed-spaces-and-tabs': 2,
		'no-multiple-empty-lines': 2,
		'no-nested-ternary': 2,
		'no-trailing-spaces': 2,
		'one-var': [ 2, 'never' ],
		'quote-props': [ 2, 'consistent-as-needed' ],
		'quotes': [ 2, 'single', { allowTemplateLiterals: true }],
		'semi': [ 2, 'never' ],
		'semi-spacing': [ 2, { before: false, after: true }],
		'space-before-blocks': [ 2, 'always' ],
		'space-before-function-paren': [ 2, { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
		'space-in-parens': [ 2, 'never', {}],
		'space-infix-ops': 2,
		'space-unary-ops': [ 2, { words: true, nonwords: false }],
		'spaced-comment': [ 2, 'always', {}],
		'generator-star-spacing': [ 2, { before: false }],
		'computed-property-spacing': 2,
		'object-curly-spacing': [ 2, 'always' ],
		'operator-linebreak': [ 2, 'after' ],
		'func-style': 2,
		'new-cap': 2,
		'no-var': 2,
		'no-labels': 2,
		'no-implicit-coercion': 2,
		'no-implied-eval': 2,
		'no-lone-blocks': 2,
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-global-assign': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-useless-call': 2,
		'no-void': 2,
		'no-undef-init': 2,
		'no-caller': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-fallthrough': 2,
		'no-octal': 2,
		'no-delete-var': 2,
		'no-undef': 2,
		'no-unused-vars': [ 2, { varsIgnorePattern: '^h$|^React$' }],
		'no-new-require': 2,
		'no-path-concat': 2,
		'func-call-spacing': 2,
		'no-unneeded-ternary': 2,
		'callback-return': 2,
		'no-new-object': 2,
		'handle-callback-err': 2,
		'no-useless-catch': 2,
		'no-floating-decimal': 2,
		'no-misleading-character-class': 2,
		'no-async-promise-executor': 2,
		'no-compare-neg-zero': 2,
		'lines-between-class-members': [ 2, 'always', { exceptAfterSingleLine: true }],
		'getter-return': 2,
		'template-curly-spacing': [ 2, 'always' ],
		'arrow-parens': [ 2, 'always' ],
		'jsx-quotes': [ 2, 'prefer-double' ],
		'react/jsx-closing-bracket-location': 2,
		'react/jsx-closing-tag-location': 2,
		'react/jsx-curly-spacing': [ 2, { when: 'always' }],
		'react/jsx-equals-spacing': [ 2, 'never' ],
		'react/jsx-first-prop-new-line': 2,
		'react/jsx-no-comment-textnodes': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-curly-brace-presence': [ 2, { props: 'never', children: 'never' }],
		'react/jsx-pascal-case': [ 2, { allowAllCaps: true }],
		'react/jsx-tag-spacing': 2,
		'react/jsx-uses-vars': 2,
		'react/jsx-no-target-blank': 2,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 0,
		'import/no-unresolved': 2,
		'import/no-absolute-path': 2,
		'import/no-self-import': 2,
		'import/no-useless-path-segments': 2,
		'import/export': 2,
		'import/no-mutable-exports': 2,
		'import/no-duplicates': 2,
		'import/newline-after-import': 2,
		'react-native/no-unused-styles': 2
	}
}