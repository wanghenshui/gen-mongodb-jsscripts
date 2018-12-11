'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');

require('./Collation.js');//distinct

exports.run=function(){
	//distinct
	//distinct options 用例需要replica 
	//TODO: 开关控制
	//用，拼接可能会有多于的空格
	console.log("db.optest.distinct('%s',%s);",
		tool.genjson('UserItem')['item'],
		JSON.stringify(tool.mergeOneJson(tool.genjson('FilterUsrString',1)))
	);

	console.log("db.optest.distinct('%s',%s);",
		tool.genjson('UserItem')['item'],
		JSON.stringify((tool.mergeOneJson(tool.genjson('FilterUsrNumber',1))))
	);
	
	console.log("db.optest.distinct('%s',%s);",
		tool.genjson('UserItem')['item'],
		JSON.stringify(tool.mergeJsons(tool.genjson('FilterUsrString',2)))
	);
	
	console.log("db.optest.distinct('%s',%s);",
		tool.genjson('UserItem')['item'],
		JSON.stringify(tool.mergeJsons(tool.genjson('FilterUsrNumber',2)))
	);
}
