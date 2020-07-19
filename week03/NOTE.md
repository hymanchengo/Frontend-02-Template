第三周学习笔记
## 表达式
语法树与运算符
	运算符优先级会影响语法树的构成
运算符
- Member运算
如a.b, a[b], super.b, super['b'] ,
foo`string`:foo是函数
new.target
new Foo()
new Foo
new a()() 前面()优先级高 
new new a() 扩号和第二个new结合，所以带()的new优先级较高
- call运算
foo() super() foo()['b']
member expression 优先级高于call  expression

引用是标准中的类型

a.b取出的是b的引用、
delete和assign使用引用类型进行删除或赋值
-左值右值
a.b = c  a.b 是left hand 能放在等号左边的是left hand expression
a + b = c 不能放在left hand的expression 如这边的a+b就是right hand expression

- 单目运算符
delete a.b, void foo(), typeof a, +a, -a, ~a, !a, await a
- 右结合运算符 3 ** 2 ** 3 = 3的8次方
- 关系运算符
+ - * / % << >> >>> < > >= <= instanceof in
- 比较运算符
== != === !==
- 位运算
& ^ |
- 逻辑运算(短路与那则)
&& || 
- 条件运算
?:

## 类型转换 todo
### 装箱拆箱

## 语句
### 简单语句
表达式语句，空语句（;），debugger语句(debugger;)，
控制语句throw语句，continue语句,break语句，return语句
### 组合语句
block语句 { } 返回值是normal
迭代类型语句 while, do while, for(;;) for( xx in yy) for(xx of xxx) for await(of)

### 声明语句
函数声明， generator声明，异步函数声明，asyncGenerator声明，变量声明，Class声明
Lexical声明
## 运行时
### Completion Record
if(x == 1) return 10;
存储语句完成结果的数据结构，描述是否返回，返回类型
其数据结构
[[type]]: normal,break,continue,return,or throw
[[value]]: 返回值基本类型 
[[target]]: label。 带label的语句
## 结构
### 宏任务
想象JavaScript引擎为一个库，我们传递代码给它进行执行
### 微任务 (Promise)
如javascript引擎将代码产生的异步任务，microtask ,标准里称为job
### 事件循环
3个部分 获取代码-》执行代码-》等待-》继续获取代码-》..
### 函数调用
函数调用可访问的变量实际上是stack的这么个结构
execution context 
execution context stack
running execution context
execution context里的内容：
code evaluation state
funtion
script or module
generator
Realm 保存所有内置对象的领域
lexicalEnvironment:this, new.target, super,变量
VariableEnvironment var声明变量声明到哪的环境。 是个历史包袱，处理var声明
Execution context分为 ECMAScript Code Execution Context和Generator Execution Contexts
Environment Record有继承关系
基类：Environment Record
子类 : Declarative Envrionment Records, Global Environment Records, Object Environment Records

每个函数生成一个闭包(代码部分和环境部分)。Environment Record形成链，早版本称为scope chain

























