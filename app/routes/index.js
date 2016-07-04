"use strict";
function createResponseObj(req){
	var response = {"ipaddress": req.headers["x-forwarded-for"]};
	response["language"] = req.headers["accept-language"].split(",")[0];
	response["software"] = req.headers["user-agent"].split("(")[1].split(")")[0];
	return response;
}
module.exports = function (app) {
	app.route("/api/whoami")
		.get(function (req, res) {
			res.send(createResponseObj(req));
		});
};
