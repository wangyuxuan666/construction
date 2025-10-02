// ESlint 检查配置
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  parser: 'vue-eslint-parser',
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'vue/multi-word-component-names': 'warn', //此规则要求组件名称始终为多个单词，根应用程序组件和Vue提供的内置组件除外
    'vue/no-arrow-functions-in-watch': 'error', // watch里不允许使用箭头函数
    'vue/no-async-in-computed-properties': 'error', // 计算属性里面不能使用异步操作
    'vue/no-child-content': 'error', // 具有覆盖子内容的指令的元素,不可填写内容
    'vue/no-computed-properties-in-data': 'error', // 不允许在data里面访问计算属性
    'vue/no-dupe-keys': 'error', // 防止相同的属性名
    'vue/no-dupe-v-else-if': 'error', // v-if与v-else-if不能出现相同的判断条件
    'vue/no-duplicate-attributes': 'error', // 属性禁止重复
    'vue/no-export-in-script-setup': 'error', // 以前版本的＜script setup＞RFC使用导出来定义模板中使用的变量，但新的＜scriptsetup＞的RFC已更新为不使用导出进行定义
    'vue/no-mutating-props': 'error', // 禁止子组件修改父组件属性
    'vue/no-parsing-error': 'error', // 检查html格式
    'vue/no-ref-as-operand': 'error', //此规则报告ref被错误用作操作数的情况。必须使用.value才能访问Ref值
    'vue/no-reserved-component-names': 'error', // 禁止用关键字命名
    'vue/no-reserved-keys': 'error', // 禁止用关键字命名
    'vue/no-reserved-props': 'error', // 禁止用关键字命名
    'vue/no-shared-component-data': 'error', // 当数据的值是一个对象时，它将在组件的所有实例中共享。
    'vue/no-side-effects-in-computed-properties': 'error', // 禁止在计算属性中更改赋值属性
    'vue/no-template-key': 'error', // template除v-for外无法添加key属性
    'vue/no-textarea-mustache': 'error', // textarea无法用{{}} 需要使用v-model
    'vue/no-unused-components': 'error', // 组件注册规范
    'vue/no-unused-vars': ['error',
      {
        // 当v-for指令或范围属性的定义与你的ignorePattern正则表达式匹配时，
        // 禁用报告。默认为空，将忽略任何内容
        ignorePattern: '^_'
      }
    ],
    'vue/no-use-v-if-with-v-for': 'error', // 禁止v-if与v-for出现同一个组件
    'vue/no-useless-template-attributes': 'error', // 防止＜template＞标签上的任何无用属性。
    'vue/no-v-text-v-html-on-component': 'error', // 禁止在组件上使用v-text/v-html。
    'vue/require-component-is': 'error', // component组件规范
    'vue/require-prop-type-constructor': 'error', // 规范构造函数的属性类型
    // 'vue/require-render-return': 'error', // 强制函数有返回值
    'vue/require-v-for-key': 'error', // v-for有key属性
    'vue/require-valid-default-prop': 'error', // prop默认值
    'vue/return-in-computed-property': 'error', // 强制在计算函数中有返回语句
    'vue/return-in-emits-validator': 'error', // 强制要求在emits验证器中存在返回语句
    'vue/use-v-on-exact': 'error', // 当存在另一个带修饰语的v-on时，此规则强制在v-on上使用精确修饰语。
    'vue/valid-attribute-name': 'error', // 检测无效的html属性
    // vue3中script setup使用，目前使用不到
    // 'vue/valid-define-emits': 'error', // defineEmits编辑规则
    // 'vue/valid-define-props': 'error', // defineProps编辑规则
    'vue/valid-next-tick': 'error', // $nextTick规范
    'vue/valid-template-root': 'error', // template里面不得为空
    'vue/valid-v-bind': 'error', // v-bind属性检查
    'vue/valid-v-cloak': 'error', // v-cloak属性检查
    'vue/valid-v-else-if': 'warn', // v-else-if属性检查
    'vue/valid-v-else': 'warn', //v-else属性检查
    'vue/valid-v-for': 'error', //v-for属性检查
    'vue/valid-v-html': 'error', //v-html属性检查
    'vue/valid-v-if': 'error', //v-if属性检查
    'vue/valid-v-is': 'error', //v-is属性检查
    'vue/valid-v-memo': 'error', //v-memo属性检查
    'vue/valid-v-model': 'error', //v-model属性检查
    'vue/valid-v-on': 'error', //v-on属性检查
    'vue/valid-v-once': 'error', //v-once属性检查
    'vue/valid-v-pre': 'warn', //v-pre属性检查
    'vue/valid-v-show': 'warn', //v-show属性检查
    'vue/valid-v-slot': 'warn', //v-slot属性检查
    'vue/valid-v-text': 'warn', //v-text属性检查
  }
}