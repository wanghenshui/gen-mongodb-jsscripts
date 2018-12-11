'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');


dream.schema('aggregateOption',{
	explain:'bool',
	allowDiskUse:'bool',
	//cursor	document,
	maxTimeMS:'_maxTimeMS',
	bypassDocumentValidation:'bool',	
	readConcern:'_readConcern',
	collation:'_Collation',
	//hint	string or document	
	comment:String	
})

/*
db.optest.aggregate([
                     { $match: { status: "A" } },
                     { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
                     { $sort: { total: -1 } }
                   ])
*/

dream.customType('_stageOperator',function(helper){
	var op =['$addFields',
	'$bucket',
	'$bucketAuto',
	'$collStats',
	'$count',
	'$facet$geoNear',
	'$graphLookup',
	'$group',
	'$indexStats',
	'$limit',
	'$listSessions',
	'$lookup',
	'$match',
	'$out',
	'$project',
	'$redact',
	'$replaceRoot',
	'$sample',
	'$skip',
	'$sort',
	'$sortByCount',
	'$unwind'
	];
	
	return helper.oneOf(op);
});


exports.run=function(){
	
	console.log('db.optest.aggregate([%s,%s]);',);
}