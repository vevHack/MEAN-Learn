# MongoDB入门
## NOSQL
- 在传统的数据库中，数据存在不同的表中，通过主键和外键进行关联。

  而这种数据库则是直接存储json或者XML等格式的文档

- 使用文档型数据库的对象构造更加简单，而且读取数据更加快速，使用也更方便。

  而且文档型数据库本质上无模式的，所以灵活性更高。

- 关于无模式不仅可以在数据存储方面的设计灵活性增加，而且可以在应用程序中更改数据结构，

  而无需在数据库中修改，这样可以简化开发

- 大量NOSQL的问题都是围绕缓存和和规模的问题。面向文档的数据库正在成为NOSQL中的主流。

## MongoDB
### BSON格式
- 二进制的JSON结构，将类JSON文档序列化后进行二进制编码。

  除了支持Json格式，还支持其他类型，比如Date类型

- 使用_id是以ObjectId为名的唯一标识符，要么由应用生成，要么由mongodb自动生成。当驱动没有提供_id的时候
- mongodb会自动生成_id。
- 4位的UNIX时间戳，3位的机器码，2位的进程编号，3位的计数器码（计数器是从一个随机数开始计数的）

例： {"_id":ObjectId("52d02240e4b01d67d71ad577"),     "title":"First Blog Post",     "comments":[ ] }

#### MongoDB即席查询
即席查询：不需要对每个查询进行预先定义，数据库可以响应不同的结构化查询。  例如：
- SQL:SELECT * FROM POSTS WHERE TITLE LIKE '%mongo%';
- MongoDB: db.posts.find({title:/mongo/})

MongoDB也可以像传统型数据那样进行查询

#### MongoDB索引
索引是帮助数据库引擎高效执行查询的独特数据结构。

#### MongoDB副本集
Replica Set架构，分为活跃节点和被备份节点，副本集内所有的节点都可以进行读取操作， 却只有活跃节点可以进行读写操作，然后每次活跃节点都将变化告知备份节点，并且确保每次变化都能保持一致。

自动恢复：当任意一个备份节点与活跃节点断开连接超过10秒。副本集会再次从副本节点中选一个作为活跃节点，然后原先的 活跃节点再次连接上的时候，就会作为备份节点加入到副本集中。

### MongoDB 分片
随着WEB的应用增加，可拓展性是必然面对的问题。解决这种问题的思路分为两种，水平扩展和垂直扩展。
- 垂直扩展：更多的CPU,更大的硬盘，更多的内存
- 水平扩展：更多的机器，难度更高

## MongoDB增删改查
### 创建文档
- insert创建文档:

  > db.posts.insert({"title":"Second Post", "user": "alice"})

- update()创建新文档 ，当文档不存在的时候，采用upsert:

  > db.posts.update({

  > "user": "alice"

  > }, {

  > "title": "Second Post",

  > "user": "alice"

  > }, {

  > upsert: true

  > })

- save创建新文档：

  > 当传给它的文档没有_id字段或者_id字段在目前的集合中没有被使用，这个和update方法类似，当找不到的时候，就会创建新的对象

### 读取文档
- 查询整个集合中的文档，例如查询posts集合中的所有文档

  > db.posts.find()  

  > db.posts.find({})

- 使用等值表达式

  > db.posts.find({"user":"alice"})

- 使用查询操作符

  > 多个查询操作符满足复杂的查询，比如$in操作。  

  > db.posts.find({"user":{$in:["alice","bob"]}})

- 创建AND/OR查询
  - AND:

    > db.posts.find({"user":"alice","commentsCount":{$gt:10}})

  - OR:

    > db.posts.find({$or:[{"user":"alice"},{"user":"bob"}]})

### 更新已有的文档
既可以使用update,又可以使用save方法
- update()更新

  > db.posts.update({"user":"alice"},{$set:{"title":"Second Post"},{multi:true}})  

  > update()方法默认是更新单个，但是设置了multi属性可以更新所有符合条件的数据

- save()更新

  传入的参数必须包含_id字段

  > db.posts.save({"_id":ObjectId("50691737d386d8fadbd6b01d")

  > ,"title":"Second Post","user":"alice"})

### 删除文档
remove方法，第一个参数是删除条件，第二个参数是删除单个还是所有满足条件的
- 删除所有文档，remove是删除集合内的所有文档，而drop是删除整个集合，包括索引

  > db.posts.remove()

- 删除多个文档

  > db.posts.remove({"user":"alice"})

- 删除单个文档,只删除第一个符合条件的文档

  > db.posts.remove({"user":"alice"},true)

--------------------------------------------------------------------------------

## 总结
大体介绍了MongoDB的开发，需要深入再详细的研究，但是起码心里有个大概
