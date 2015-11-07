
var page = require('webpage').create();
var mocha = require('mocha');

console.log('step 1')
page.open('./../index.html', function (s) {
	console.log('page open');
	
	describe('A space ship is created', function() {
		var shipDiv = document.getElementById('ship');
		it('should be an image of a ship', function() {
			expect(ship.getAttribute(src)).toBe('ourImageDirectory', 
				'You need to link a source to your image tag');
		});
	});

	describe('Ths spaceship can move left and right', function(){
		var div = document.createElement('div');
		var spaceship = new Ship(div);
		var spy = expect.spyOn(spaceship, 'move');

		it('should have a move property', function(){
			expect(spy)
		})
	})
	phantom.exit();
});

mocha.globals();
if (window.mochaPhantomJS) { 
	console.log('running');
	mochaPhantomJS.run(); 
} else {
	console.log('not running');
}