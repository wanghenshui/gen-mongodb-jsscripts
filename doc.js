'use strict';
const dream = require('dreamjs');

// 文档的结构
// TODO: 不够复杂？
dream.schema('User',{
	name:'name',
	age:'age',
	id:'_incrementalId',
	infos:String,
	infon:Number,
	email:'email',
	arr:['age','age','age','age','age','age','age','age','age','age'],//?
	comment_auther:['name','name','name','name','name'],
	comment:'_sentence',
	family:[{father:{name:'name',age:'age'},
			mother:{name:'name',age:'age'},
			sister:{name:'name',age:'age'},
			brother:{name:'name',age:'age'}}],
	date: '_date'
});

dream.customType('_sentence', function (helper) {
  return helper.chance.sentence({words: 10});
});

dream.customType('_date',function(helper){
	return helper.chance.date().toString();
});
//inc id
dream.customType('_incrementalId', function(helper){
	return helper.previousItem ? helper.previousItem.id+1 : 1;
});

dream.schema('UserItem',{
	item:'_UserItem',
	number:'_UserNumberItem',
	string:'_UserStringItem'
})

dream.customType('_UserItem',function(helper){
	var item=[
	'name',
	'age',
	'id',
	'infos',
	'infon',
	'email',
	'arr',
	'comment_auther',
	'comment',
	'family.father.name',
	'family.father.age',
	'family.mother.name',
	'family.mother.age',
	'family.sister.name',
	'family.sister.age',
	'family.brother.name',
	'family.brother.age',
	'date'
	];
	
	return helper.oneOf(item);
});

dream.schema('FiltNumber',{
	op:'_UserNumberItem',
	cond:'_UserNumberItemCond'
});


dream.customType('_UserNumberItem',function(helper){
	var item=[
	'age',
	'id',
	'infon',
	'arr',
	'family.father.age',
	'family.mother.age',
	'family.sister.age',
	'family.brother.age',
	];
	
	return helper.oneOf(item);
});

dream.customType('_UserNumberItemCond',function(helper){
	var f=[
		helper.chance.age(),
		helper.chance.age(),
		helper.chance.age(),
		helper.chance.age(),
		helper.chance.age(),
		helper.chance.integer(),
	];//shuffle
	return helper.oneOf(f);
});

dream.customType('_UserStringItem',function(helper){
	var item=[
	'name',
	'infos',
	'email',
	'comment_auther',
	'comment',
	'family.father.name',
	'family.mother.name',
	'family.sister.name',
	'family.brother.name',
	'date'
	];
	
	return helper.oneOf(item);
});

dream.customType('_UserStringItemCond',function(helper){
	var f=[
		helper.chance.name(),
		helper.chance.string(),
		helper.chance.date().toString(),
		helper.chance.email()
	];
	return helper.oneOf(f);
});

dream.schema('FiltString',{
	op:'_UserStringItem',
	cond:'_UserStringItemCond'
});




dream.customType('_maxTimeMS',function(helper){
	return helper.chance.integer({min:1,max:36000});
});