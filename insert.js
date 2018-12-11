//insertOption for:insert, insertMany, insertOne
'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');

require('./writeConcern.js');
dream.schema('insertOption',{
	writeConcern:'_writeConcern',
	ordered:'bool'
});


exports.run=function(){
//test insert insertMany insertOne
console.log('db.optest.insert(',tool.gendoc(2),')');

//x1
console.log('db.optest.insertMany(',tool.gendoc(100),');');

//x10

tool.repeat(10,
function(){
	console.log('db.optest.insertOne(',tool.gendoc(),');')
}
);

//need replica

//console.log('db.optest.insertOne(',tool.gendoc(),',',tool.genjson('insertOption'),');');
//console.log('db.optest.insertMany(',tool.gendoc(10),',',tool.genjson('insertOption'),');');

}