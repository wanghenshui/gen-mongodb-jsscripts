'use strict';
const dream = require('dreamjs');
const tool = require('./tools.js');
require('./Collation.js');
//updateCommands updateMany updateOne
//Update Operators

dream.customType('_UpdateFieldOperators',function(helper){
	var op=[$currentDate, $inc,$min,$max,$mul,$rename,$set,$setOnInsert,$unset];
	return helper.oneOf(op);
});

dream.customType('_UpdateArrayOperators',function(helper){
	var op=['$','$[]','$[<identifier>]','$addToSet',$pop,$pull,$push,$pullAll];
	return helper.oneOf(op);
});

dream.customType('_Modifiers',function(helper){
	var op=[$each,$position,$slice,$sort];
	return helper.oneOf(op);
});


dream.customType('_UpdateOptions_3',function(){
	return 
});
dream.schema('UpdateOptions_3',{	   
	upsert: 'bool',
	writeConcern: '_writeConcern',
	collation: '_collation',
	//arrayFilters: [ <filterdocument1>, ... ]
});

dream.schema('updateIncFieldCond',{
	'$inc':'_inc'
});

dream.customType('_usr_age',function(helper){
	var a=['age','father.age','mother.age','brother.age','sister.age'];
	return helper.oneOf(a);
});

dream.customType('_inc',function(helper){
	var n=helper.chance.integer({min:2,max:5});
	return tool.mergeJsons(tool.genjson('SchemaInc',n));
});

dream.schema('SchemaInc',{
	op:'_usr_age',
	cond:'_count'
});

dream.schema('CondUpdateField',{
	setop:'UpdateFieldOperators',
});

exports.run=function(){
//x5
tool.repeat(5,
function(){
	console.log('db.optest.updateOne(',
		tool.genjson('ageCondwithComparison'),
		',',tool.genjson('updateIncFieldCond'),
		',',tool.genjson('UpdateOptions'),
		');');
});
}