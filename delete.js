'use strict';
const dream = require('dreamjs');
const tool=require('./tools.js');
require('./Collation.js');
require('./writeConcern.js');
/*
db.collection.deleteOne(
   <filter>,
   {
      writeConcern: <document>,
      collation: <document>
   }
)*/

dream.schema('deleteOption',{
	writeConcern:'_writeConcern',
	collation:'_collation'
});


exports.run=function(){

//x5
//tool.repeat(5,
//function(){
	//FiltString
	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltString',1))),
		JSON.stringify(tool.genjson('writeConcern',1))
	);


	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltString',1))),
		JSON.stringify(tool.genjson('Collation',1))
	);
	
	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltString',1))),
		JSON.stringify(tool.genjson('deleteOption',1))
	);

	console.log("db.optest.deleteOne(%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltString',1)))
	);
	//FiltNumber
	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltNumber',1))),
		JSON.stringify(tool.genjson('writeConcern',1))
	);


	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltNumber',1))),
		JSON.stringify(tool.genjson('Collation',1))
	);
	
	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltNumber',1))),
		JSON.stringify(tool.genjson('deleteOption',1))
	);

	console.log("db.optest.deleteOne(%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltNumber',1)))
	);
	
	//FiltNumber 2
		console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeJsons(tool.genjson('FiltNumber',2))),
		JSON.stringify(tool.genjson('writeConcern',1))
	);


	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeJsons(tool.genjson('FiltNumber',2))),
		JSON.stringify(tool.genjson('Collation',1))
	);
	
	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeJsons(tool.genjson('FiltNumber',2))),
		JSON.stringify(tool.genjson('deleteOption',1))
	);

	console.log("db.optest.deleteOne(%s);",
		JSON.stringify(tool.mergeJsons(tool.genjson('FiltNumber',2)))
	);
	
	//FiltString FiltNumber
	var arr=[];
	arr.push(tool.genjson('FiltNumber',1),
			tool.genjson('FiltString',1));
			
	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeJsons(arr)),
		JSON.stringify(tool.genjson('writeConcern',1))
	);


	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeJsons(arr)),
		JSON.stringify(tool.genjson('Collation',1))
	);
	
	console.log("db.optest.deleteOne(%s,%s);",
		JSON.stringify(tool.mergeJsons(arr)),
		JSON.stringify(tool.genjson('deleteOption',1))
	);

	console.log("db.optest.deleteOne(%s);",
		JSON.stringify(tool.mergeJsons(arr))
	);
	
//});	


//x5
/*
tool.repeat(1,
function(){
	console.log("db.optest.deleteMany(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltString',1))),
		JSON.stringify(tool.genjson('writeConcern',1))
	);
}
);
	
	console.log("db.optest.deleteMany(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltString',1))),
		JSON.stringify(tool.genjson('Collation',1))
	);
	
	console.log("db.optest.deleteMany(%s,%s);",
		JSON.stringify(tool.mergeOneJson(tool.genjson('FiltString',1))),
		JSON.stringify(tool.genjson('deleteOption',1))
	);

*/


}//run end