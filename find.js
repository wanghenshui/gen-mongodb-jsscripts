'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');

require('./query_operator.js');

dream.schema('ageCond',{
	age:'age'
});

dream.schema('ageCondwithComparison',{
	age:'_ageCondwithComparison'	
});

dream.customType('_ageCondwithComparison',function(){
		return tool.mergeOneJson(tool.genjson('_ageCondwithComparisonhelper',1));
});

// 不支持反射的key，只能通过tool.mergeOneJson改成条件的格式
dream.schema('_ageCondwithComparisonhelper',{
	//'ComparisonQueryOperators':'age'
	op:'_ComparisonQueryOperators',
	cond:'age'
});

dream.schema('ageCondIn',{
	age:'_ageCondIn'	
});

dream.customType('_ageCondIn',function(){
		return tool.mergeOneJson(tool.genjson('_ageCondInhelper',1));
});

dream.schema('_ageCondInhelper',{
	op:'QueryIn',
	cond:['age','age','age','age']
});

dream.schema('ageCondwithRangeComparison',{
	age:'_ageCondwithRangeComparison'	
});

dream.customType('_ageCondwithRangeComparison',function(){
		return tool.mergeJsons(tool.genjson('_ageCondwithRangeComparisonHelper',2));
});

dream.schema('_ageCondwithRangeComparisonHelper',{
	op:'_ComparisonQueryOperators',
	cond:'age'
});


//Projection Operators
//find() operations on views do not support the following projection operators
dream.customType('_ProjectionOperator',function(helper){
	var op=['$','$elemMatch','$slice','$meta'];
	return helper.oneOf(op);
});

//{ comments: { $slice: -5 } }
dream.schema('ProjectSliceN',{
		comment:{'$slice':'_count'}
});

//Arrays take the form of [ skip , limit ] limit positive
dream.schema('ProjectSliceRange',{
		comment:{$slice:['_count','_positive_interger']}
});

//{ score: { $meta: "textScore" } } fixed
var ProjectMeta={ 
	score: { $meta: 'textScore' } 
};

//findAndModify
//findOneAndDelete()
//findOneAndReplace()
//findOneAndUpdate()


exports.run=function(){
//Query for Equality
console.log('db.optest.find(',tool.genjson('ageCond'),');');

//x10
console.log('db.optest.find(',tool.genjson('ageCondwithComparison'),');');

//x3
tool.repeat(3,function(){console.log('db.optest.find(',tool.genjson('ageCondIn'),');');})

//x10
tool.repeat(10,function(){console.log('db.optest.find(',tool.genjson('ageCondwithRangeComparison'),');');})

//x3
tool.repeat(3,function(){console.log('db.optest.find({},',tool.genjson('ProjectSliceN'),');');})
//x3
tool.repeat(3,function(){console.log('db.optest.find({},',tool.genjson('ProjectSliceRange'),');');})

//x1
tool.repeat(1,function(){console.log('db.optest.find(',tool.genjson('ageCondIn'),',',ProjectMeta,');');})

}