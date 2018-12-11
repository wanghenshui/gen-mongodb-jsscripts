'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');
// writeConcern
//{ w: <value>, j: <boolean>, wtimeout: <number> }
// w>1 need replica

dream.customType('_w',function(helper){
	var w=[0,1,2,3,"majority"];
	return helper.oneOf(w);
});
dream.customType('_timeout',function(helper,w){
	return w=0?0:helper.chance.integer({min:0,max:3000});
});

//如果w>1且测试环境是单机会有错误 TypeError: err.hasWriteErrors is not a function 
dream.schema('writeConcern',{
		w:'_w',
		j:'bool',
		wtimeout:'_timeout'
});

dream.schema('writeConcern_w_j',{
		w:'_w',
		j:'bool'
});

dream.schema('writeConcern_w',{
		w:'_w',
});

dream.schema('writeConcern_j',{
		j:'bool',
});

dream.schema('writeConcern_t',{
		wtimeout:'_timeout'
});


dream.customType('_writeConcern', function(helper){	
	var res=[
	tool.genjson('writeConcern',1),
	tool.genjson('writeConcern_t',1),
	tool.genjson('writeConcern_w_j',1),
	tool.genjson('writeConcern_w',1),
	tool.genjson('writeConcern_j',1),
	];
	return helper.oneOf(res);
});