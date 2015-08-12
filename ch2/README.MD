# node.js 入门
## 1. 事件驱动编程
## 2. 闭包
## 3. Node模块

```
1. CommonJS模块：require(),exports,module

2. Node.js核心模块：直接引用即可

3. Node.js第三方模块：node会自动去node_modules
   模块下自动寻找所需要的模块

4. Node.js文件模块：根据文件路径直接应用
```

## 4. Connect 模块

```

拦截并且管理服务器的各类HTTP请求，进而对这些请求进行适当处理，并
逐个响应。

Connect采用中间件来进行HTTP请求上的逻辑注册，你只需要根据需求来进行
中间件的自定义即可。

采用next()方法来调用下一个处理程序。直到中间件采用了res.end()完成了
响应，整个请求才结束。

Expres也是基于Connect的

Connect可以注册任意的中间件，通过app.use()方法，可以将中间件
连成一串，将下一个要执行的函数以next参数传给要执行的中间件
函数，直到end()函数调用，或者是没有调用next函数
```

## 总结：

```
初步了解node的一些情况
```
