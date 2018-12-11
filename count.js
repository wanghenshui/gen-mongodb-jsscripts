'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');
require('./readConcern.js');

//estimatedDocumentCount(options) 4.0
// 排除孤儿文档的干扰的统计

dream.schema('estimatedDocumentCountOption',{
	maxTimeMS:'_maxTimeMS',
})

//countDocuments 4.0
//aggregate语法糖，有部分命令用不了，动态命令还没搞定，所以限制先放在一边
dream.schema('countDocumentsOption',{
	limit:'_positive_interger',
	skip:'_positive_interger',
	//没有索引会提示bad hint
	//hint:'_UserItem',	
	maxTimeMS:'_maxTimeMS',
})

//count
dream.schema('countOption',{
	limit:'_positive_interger',
	skip:'_positive_interger',
	//没有索引会提示bad hint
	//hint:'_UserItem',	
	maxTimeMS:'_maxTimeMS',
	readConcern:'_readConcern'
})

// TODO 用例不够复杂
// TODO 版本控制
exports.run=function(){

//x5
tool.repeat(5,
function(){
	console.log("db.optest.count(%s,%s);",
				JSON.stringify(tool.mergeOneJson(tool.genjson('FilterUsrNumber'))),
				JSON.stringify(tool.genjson('countOption'))
	);

});


//x5
tool.repeat(5,
function(){
	console.log("db.optest.count(%s,%s);",
				JSON.stringify(tool.mergeOneJson(tool.genjson('FilterUsrNumber')))
	);
});

}