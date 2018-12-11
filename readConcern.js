'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');

//readConcern: { level: <level> }
//https://docs.mongodb.com/manual/reference/read-concern/
dream.customType('_level',function(helper){
	var level=[
				"local",
				"available",
				"majority",
				"linearizable",
				"snapshot"
		];
	return helper.oneOf(level);
});


dream.schema('readConcern',{
		level:'_level'
});
		
dream.customType('_readConcern', function(){	
	return tool.genjson('readConcern',1);
});