学习笔记
## 浏览器工作原理
本周从toy browser这个例子入手，学习了http协议，请求和响应的格式。
1. 基于TCP协议，通过构造Request请求，发送HTTP请求，及通过状态机来解析Response响应并构造Response对象。
2. 逐步构建HTML parser，解析标签，元素，属性， 通过大量状态机的使用来构造DOM。
3. 课程中有个把小bug，排查花了些时间，另外对JS的某些特性使用不熟，如``模板字符串，没有注意格式，
导致http server总是返回HTTP 400

