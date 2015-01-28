var fortuneCookies = [

	"Conquer your fears",
	"I'll be back",
	"I've got a bad feeling about this",
	"Frankly, my dear. I don't give a damn."

];

exports.getFortune = function() {

	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];

};