// Require JS  Config File

require.config({
	paths : {
		"angular" : "lib/angular/angular"
	},
	shim : {
		angular  :{
			exports : "angular"
		}
	},
    baseUrl: 'js/'
});


require(["app"],
function(App) {
	App.initialize();
}
);