var appRouter = function(app) {
 
	app.get("/api/teams", (req, res) => {
		res.send([
			{"Id": 0, "Name": "Agates"}, 
			{"Id": 1, "Name": "Bulldogs"}, 
			{"Id": 2, "Name": "Gophers"},
			{"Id": 3, "Name": "Twins"}			
		]);
	});

}
 
module.exports = appRouter;