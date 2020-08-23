# HTML

## 了解SGML
SGML( Standard Generalized Markup Language)，定义标记语言的语言。
HTML是SGML的一个应用
[SGML应用由几个部分构成](https://www.w3.org/TR/WD-html40-970708/intro/sgmltut.html)
1. SGML声明， 声明指定可以出现在应用中的字符和分隔符
2. 文档类型定义DTD。DTD定义了标记构造的语法。DTD可能还包含诸如数字和[命名字符实体](https://www.w3.org/TR/WD-html40-970708/sgml/entities.html)的额外定义
  
3. 一个标记语义化的规范。规范还规定了DTD中无法表达的语法限制
4. 包含数据(内容)和标记的文档实例。每个实例包含DTD的引用以用来解释实例。

## HTML语法
1. 实体
	字符实体是可能包含在HTML文档中的数字或字符名称。当输入一个不常用或不可能键入的一个字符时很有用。字符实体是可能包含在HTML文档中的数字或字符名称。
  字符实体以&开头,;结尾
  
2. 元素
	元素代表结构或期望行为，元素通常由3部分构成：开始标签，内容和结束标签
	<elment-name>element content</element-name> 
	HTML的SGML定义制定了某些HTML元素不需要有结束标签
	一些HTML元素没有内容，称为空元素，空元素也没有结束标签如<br>
	元素名字总是不区分大小写
	元素不是标签。比如head元素总是存在的，即便start head和end head标签在标记中缺失了
3. 属性
	元素可以有关联属性称为attributes，可对其进行赋值。属性/值对出现在元素开始标签的最后>之前。
	开始标签中可以有任意数量及任意顺序的合法属性值对，按空格划分
	```html
	<h1 align="center">this is a centered heading thanks to the align attribute</h1>
	```
	属性值的边界通过单引号或双引号划定，单引号可以包裹含有双引号的属性值，反过来双引号也可以包裹单引号的属性值。
	可以用数值字符实体表示双引号和单引号。对于双引号也可以用命名字符实体&quot来表示。
	属性名总是不区分大小写。
	属性值通常不区分大小写。
	基于小写字符出现频次高于大写字符，对元素和属性使用小写字符将使HTMLL文档得到更好的雅俗
4. HTML注释
    ```html
	<!-- this is a comment -->
	<!-- and so is this one,
	 which occupies more then one line -->
	```
   用户代理不能将注释渲染为文档的一部分。类似地，用户代理也不能渲染SGML的处理指令
## HTML DTD
- 块级和行内元素(文本级)
块级还是行内基于如下几个概念
1. 内容模型
	块级可以包含行内元素和其它块级元素，行内元素通常只包含数据和其他行内元素。
2. 格式
	块级通常以新行作为开始，行内元素则通常不是。
3. 方向
	块级和行内元素在继承方向信息方面是不同的。
csst提供了指定任意元素渲染的方式，不管元素渲染为块级还是行内。但通常来说，不建议用这种方式覆盖HML元素的传统解释。
- DTD注释
 用一对--标记
 ```html
 <!ELEMEN PARAM - 0 EMPTY   -- named property value -->
 ```
- 实体定义
 HTML DTD以一系列的实体定义开始。实体定义定义了可以在DTD其他地方扩展的一种宏。当在DTD中通过名称引用宏时，宏被扩展成字符串。
 实体定义以<!ENTITY % 开头，后面跟着实体名，实体展开的双引号字符串，和一个结束标记>。如下示例定义了%font实展开的字符串
 ```html
<!ENTITY % font "TT | I |B | U | S | BIG | SMALL">
 ```
 实体展开的字符串可以包含其他实体名称，他们是递归展开的。如下%inline实体的定义包含了其他几个实体
 <!ENTITY % inlie "#PCDATA | %font | %phrase | %special | %formctrl">
 HTML DTD常遇到的2个DTD实体：%inline和%block。
- 元素定义
 HTML DTD中大部分由元素及其属性构成。由<!ELEMENT 开始一个元素的定义。以>符为结束。在两者之间:
 1. 元素的名称
 2. 元素怒的结束标记是否可选。- - 表示开始标记和结束标记是强制的。 - O表示end标签可以圣罗。 O O表示开始和结束标签都可以省
 3. 元素的内容，如果有。元素允许的内容称为元素的内容模型。没有内容的称为空元素，用EMPTY定义
 如<!ELEMENT UL - - (LI)+> 被定义的元素是UL, - - 表示开始和结束标签都不能少。这个元素的内容模型被定义为至少一个LI元素
 ## to do
 