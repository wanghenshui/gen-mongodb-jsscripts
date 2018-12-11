'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');
require('./Collation.js');
require('./writeConcern.js');
/*
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }
)
*/

dream.schema('JustOne',{
	justOne:'bool'
});

dream.schema('removeOption',{
	justOne:'bool',
	writeConcern:'_writeConcern',
	collation:'_collation'
});


exports.run=function(){

//x5
tool.repeat(5,
function(){
	console.log("db.optest.remove(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FilterUsrString',1))),
		JSON.stringify(tool.genjson('writeConcern',1))
	);
});
	
	console.log("db.optest.remove(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FilterUsrString',1))),
		JSON.stringify(tool.genjson('Collation',1))
	);

//x3
tool.repeat(3,
function(){	
	console.log("db.optest.remove(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FilterUsrString',1))),
		JSON.stringify(tool.genjson('removeOption',1))
	);
});

//x3
tool.repeat(3,
function(){	
	console.log("db.optest.remove(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FilterUsrString',1))),
		JSON.stringify(tool.genjson('JustOne',1))
	);
});
}//run end