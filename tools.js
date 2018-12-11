'use strict';
const dream = require('dreamjs');

var gendoc = function (n){ 
	return genjson('User',n);
}

//gen json
//n>1 jsonArray
function genjson(schema,n){
	return dream.useSchema(schema).generateRnd(n).output();
}

function repeat(n,callback){
	while(n--) callback();
}


//{op:'op',cond:'cond'} => {'op':'cond'}
function mergeOneJson(json){
	var tmp={};
	tmp[json['op']]=json['cond'];	
	return tmp;
}

//[{op:'op',cond:'cond'},...] => {'op':'cond',...}
function mergeJsons(jsonArray){
	var tmp={};
	jsonArray.forEach(function(json){
		tmp[json['op']]=json['cond'];
	});	
	return tmp;
}

dream.customType('_count',function(helper){
	return helper.chance.integer({min:-100,max:100});	
});

dream.customType('_positive_interger',function(helper){
	return helper.chance.integer({min:0,max:1000});	
});


exports.gendoc=gendoc;
exports.genjson=genjson;
exports.repeat=repeat;
exports.mergeJsons=mergeJsons;
exports.mergeOneJson=mergeOneJson;