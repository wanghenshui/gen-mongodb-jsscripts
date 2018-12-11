'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');

dream.schema('Collation',{
   locale: '_local',
   caseLevel: 'bool',
   caseFirst: '_casefirst',
   strength: '_strength',
   numericOrdering: 'bool',
   alternate: '_alternate',
   maxVariable: '_maxVariable',
   backwards: 'bool'
});

//E QUERY    [thread1] WriteError: Field 'strength' must be an integer 1 through 5.
dream.customType('_strength',function(helper){
	return helper.chance.integer({min:1,max:5});
});

dream.customType('_local',function(){
	return 'en';
});
dream.customType('_casefirst',function(helper){
	var c=['lower','upper','off'];
	return helper.oneOf(c);
});

dream.customType('_alternate',function(helper){
	var c=["non-ignorable","shifted"];
	return helper.oneOf(c);
});

dream.customType('_maxVariable',function(helper){
	var c=["punct","space"];
	return helper.oneOf(c);
});

dream.customType('_collation',function(){
	return tool.genjson('Collation');
});