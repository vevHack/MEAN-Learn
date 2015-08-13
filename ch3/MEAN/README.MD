# Express配置

```
根据运行环境来配置应用，比如只想在开发环境中启动日志系统，同时
在生产环境中对响应的主体进行压缩。
```

## package.json中依赖的几个模块介绍：
- morgan模块：日志
- compression:响应内容压缩
- body-parser:处理请求数据中间件
- method-override:提供对HTTP DELETE和PUT两个遗留方法的支持

通过修改config/express.js文件来使用这些模块

## process.env.NODE_ENV
- 对系统环境进行判定，根据情况来配置不同的中间件
- 最后对系统的环境变量进行下设置,如果没有设置，在启动应用的时候加上process.env.NODE_ENV = process.env.NODE_ENV || 'development'
- Win:set NODE_ENV = development;
- Unix: export NODE_ENV = development
