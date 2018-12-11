# gen-mongodb-scripts

#### dependencies:
 - node.js
 - dreamjs: npm install dreamjs

#### build:
 - node app.js > rersult.js


#### 数据构造 原理

dreamjs主要有两个主要工具 schema和customtype

其中schema生成基本的json结构，需要需要定义特殊的字段则需要customtype生成，
customType底层实现是chancejs，可以通过chancejs api来生成标准的随机数据（使用helper），

如果chancejs不满足需求，则需要构造特殊类型。这里我用的比较脏的办法，用schema塞回去

这样可能一个复杂的条件就需要一个schema 夹着一些customtype 其中一些customtype用schema构造，
而引入的schema又是由更细粒度的customtype来构造的。


我刚入门没有啥更好的更干净的生成方法。如果以后有了点子会再更正

#### TODO:
更好的数据生成
更细粒度的命令的功能控制与版本控制
尽可能多的组合条件