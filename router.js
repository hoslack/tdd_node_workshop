

const router = (request, response) => {
	const url = request.url;

	if(url==='/'){
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end('Hello');
	}
};



module.exports = router;