module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 未使用的变量
    'no-unused-vars': 'off',
    // tab键提示
    'no-tabs': 'true',
    // 没有意义的表达式
    'no-unused-expressions': 'off',
    // new操作不赋值
    'no-new': 'off',
    // 使用未定义的变量
    'no-undef': 'off',
    'quotes': [2, 'single', 'avoid-escape']
  },
  "no-bitwise": 0,//禁止使用按位运算符
  "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
  "no-class-assign": 2,//禁止给类赋值
  "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
  "no-console": 2,//禁止使用console
  "no-const-assign": 2,//禁止修改const声明的变量
  "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
  "no-continue": 0,//禁止使用continue
  "no-control-regex": 2,//禁止在正则表达式中使用控制字符
  "no-debugger": 2,//禁止使用debugger
  "no-delete-var": 2,//不能对var声明的变量使用delete操作符
  "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
  "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
  "no-dupe-args": 2,//函数参数不能重复
  "no-duplicate-case": 2,//switch中的case标签不能重复
  "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
  "no-empty": 2,//块语句中的内容不能为空
  "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
  "no-empty-label": 2,//禁止使用空label
  "no-eq-null": 2,//禁止对null使用==或!=运算符
  "no-eval": 1,//禁止使用eval
  "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
  "no-extend-native": 2,//禁止扩展native对象
  "no-extra-bind": 2,//禁止不必要的函数绑定
  "no-extra-boolean-cast": 2,//禁止不必要的bool转换
  "no-extra-parens": 2,//禁止非必要的括号
  "no-extra-semi": 2,//禁止多余的冒号
  "no-fallthrough": 1,//禁止switch穿透
  "no-func-assign": 2,//禁止重复的函数声明
  "no-implicit-coercion": 1,//禁止隐式转换
  "no-implied-eval": 2,//禁止使用隐式eval
  "no-inline-comments": 0,//禁止行内备注
  "no-invalid-regexp": 2,//禁止无效的正则表达式
  "no-label-var": 2,//label名不能与var声明的变量名相同
  "no-labels": 2,//禁止标签声明
  "no-lone-blocks": 2,//禁止不必要的嵌套块
  "no-lonely-if": 2,//禁止else语句内只有if语句
  "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
  "no-multi-spaces": 1,//不能用多余的空格
  "no-multi-str": 2,//字符串不能用\换行
  "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
  "no-native-reassign": 2,//不能重写native对象
  "no-negated-in-lhs": 2,//in 操作符的左边不能有!
  "no-nested-ternary": 0,//禁止使用嵌套的三目运算
  "no-new": 1,//禁止在使用new构造一个实例后不赋值
  "no-new-func": 1,//禁止使用new Function
  "no-new-object": 2,//禁止使用new Object()
  "no-new-require": 2,//禁止使用new require
  "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
  "no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
  "no-octal": 2,//禁止使用八进制数字
  "no-octal-escape": 2,//禁止使用八进制转义序列
  "no-param-reassign": 2,//禁止给参数重新赋值
  "no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
  "no-plusplus": 0,//禁止使用++，--
  "no-process-env": 0,//禁止使用process.env
  "no-process-exit": 0,//禁止使用process.exit()
  "no-proto": 2,//禁止使用__proto__属性
  "no-redeclare": 2,//禁止重复声明变量
  "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
  "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
  "no-return-assign": 1,//return 语句中不能有赋值表达式
  "no-script-url": 0,//禁止使用javascript:void(0)
  "no-self-compare": 2,//不能比较自身
  "no-sequences": 0,//禁止使用逗号运算符
  "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
  "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
  "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
  "no-sync": 0,//nodejs 禁止同步方法
  "no-ternary": 0,//禁止使用三目运算符
  "no-trailing-spaces": 1,//一行结束后面不要有空格

};
