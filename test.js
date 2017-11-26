const test = require('tape');
const shot = require('shot');
const router = require('./router');



test('Initialize', (t) =>{
	let num =2 ;

	t.equal(num, 2, 'Num should be equal to two');
	t.end();
});


test('Test home url', (t)=>{
	shot.inject(router, {method:'get', url:'/'}, (response)=>{
		t.equal(response.statusCode, 200, 'status Code should be 200');
		t.end();
	});
});


test('Test payload', (t)=>{
	shot.inject(router,{method:'get',url:'/'}, (response)=>{
		t.equal(response.payload, 'hello', 'Payload should be /hello/');
		t.end();
	});
});