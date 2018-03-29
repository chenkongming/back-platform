// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-alert": 0,//禁止使用alert confirm prompt
    "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
    "no-const-assign": 2,//禁止修改const声明的变量
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2,//函数参数不能重复
    "no-duplicate-case": 2,//switch中的case标签不能重复
    "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
    "no-empty": 2,//块语句中的内容不能为空
    "no-extra-parens": 2,//禁止非必要的括号
    "no-extra-semi": 2,//禁止多余的冒号
    "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    "linebreak-style": [0, "windows"],//换行风格
    "no-multi-spaces": 1,//不能用多余的空格
    "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    "no-param-reassign": 2,//禁止给参数重新赋值
    "no-redeclare": 2,//禁止重复声明变量
    "no-undef": 1,//不能有未定义的变量
    "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
    "no-use-before-define": 2,//未定义前不能使用
    "no-var": 0,//禁用var，用let和const代替
    "arrow-parens": 0,//箭头函数用小括号括起来
    "camelcase": 2,//强制驼峰法命名
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "complexity": [0, 11],//循环复杂度
    "consistent-this": [2, "_this"],//this别名
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "eqeqeq": 2,//必须使用全等
    "init-declarations": 0,//声明时必须赋初值
    "prefer-const": 0,//首选const
    "prefer-spread": 0,//首选展开运算
    "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
    "semi": [2, "always"],//语句强制分号结尾
    "spaced-comment": 0,//注释风格要不要有空格什么的
  }
}
