'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');

//Comparison Query Operators 1
dream.customType('_ComparisonQueryOperators',function(helper){
	var op=['$lt','$lte','$gt','$gte','$eq','$ne'];
	return helper.oneOf(op);
});
//Comparison Query Operators 2
//,'$in','$nin'
dream.customType('QueryIn',function(helper){
	var op=['$in','$nin'];
	return helper.oneOf(op);
});