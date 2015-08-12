# express
## 应用，请求，响应对象

```
应用对象
1. app.set(name,value)：用于设置Express配置中的环境变量
2. app.get(name)：用于获取Express配置中的环境变量
3. app.engine(ext,callback)：用于指定模板引擎中的渲染文件类型，比如需要采用EJS模板引擎的时候，使用app.engine('html',require('ejs').renderFile);即可
4. app.locals：用于向渲染模板引擎发送应用级变量
5. app.use([path],callback)：用于创建处理HTTP请求的中间件。通常情况下，可以加载响应的某个或某几个中间件。
6. app.VERB(path,[callback...],callback)：用于定义一个或多个中间件来相应发往某一个路径的多种HTTP方法。如app.get(),app.post().
7. app.route(path).VERB([callback],callback):用于定义一个或多个中间件发往某一个路径的多种HTTP方法，如app.route(path).get(callback).post(callback).
8. app.param([name],callback):用于对发往某一个路径且包含指定路由参数的请求附加某一个特定功能。如可以所有包含userId参数的请求映射特定的逻辑：app.param('userId',callback).

当然还是存在一些其他经常用到的方法，使用的时候再记录吧。
```

```
请求对象
请求对象包含一些获取当前HTTP请求信息的方法
1. req.query:已解析为对象的所有GET参数
2. req.params:已解析为对象的路由参数
3. req.body:该请求包含在bodyParser()中间件中，用于获取所有请求的body部分
4. req.param(name):用于获取请求参数，包含GET参数，路由参数，或请求body部分的JSON属性
5. req.path，req.host及req.ip：当前请求路径，主机名，访问者IP
6. req.cookies:与cookieParser()中间件结合使用，用于获取浏览器传来的cookies.
```

```
响应对象
1. res.status(code):用于设置响应的HTTP状态码
2. res.set(field,[value]);用于设置响应的HTTP报头
3. res.cookie(name,value,[options]):用于设置响应的浏览器的cookie.options是可选对象，用于定义cookie的配置，如maxAge属性
4. res.send([body|status],[body])：主要用于非流式响应。此方法包含多个操作，比如设置Content-Type 和 Content-Length报头，根据情况设置cookie.
5. res.json([body|status],[body]):若用于发送数组和对象，该方法于res.send完全一致，大多数情况下作为语法糖，可以用来强制发送JSON空对象，如undefinded和null
6. res.render(view,[locals],callback):用于视图渲染，并发送包含HTML的响应
```

--------------------------------------------------------------------------------

## 外部中间件
* Morgan:记录HTTP请求日志
* body-parser:对请求body进行解析，支持多种HTTP请求类型
* method-override:用于处理客户端不支持的HTTP方法，如PUT和DELETE等
* Compression:对响应数据使用gzip/deflate进行压缩。
* express.static:用于提供静态文件服务
* cookie-parser:解析cookies,并将结果组装req.cookies对象
* Session:支持持久会话
