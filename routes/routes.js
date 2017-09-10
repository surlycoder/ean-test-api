var appRouter = function(app) {
 
	app.get("/", (req, res) => {
		res.send([{"Id": 0, "Name": "Agates"}, {"Id": 1, "Name": "Bulldogs"}, {"Id": 2, "Name": "Gophers"}]);
	});

}
 
module.exports = appRouter;