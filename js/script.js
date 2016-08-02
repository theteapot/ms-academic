var query;

$(document).ready(function() {
	$("#submitbtn").click(function() {
		query = $("#my-query").val();
		alert(query);
	})
})

function getInterpret(query, model="latest", complete=0, count=10, offset=0, timeout=1000) {
	$.ajax({
		url:"https://api.projectoxford.ai/academic/v1.0/interpret",
		beforeSent: function(xhrObj) {
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "6958f760d7074d1692f1262fa1052c7d")
		},
		type:"GET"
	})
	.done(function (data) {

	})
}



function getEvaluate(expr, model="latest", attribute="Id", count=10, offset=0, orderBy="name:desc") {
	$.ajax({
		url:"https://api.projectoxford.ai/academic/v1.0/evaluate?",
		beforeSent: function(xhrObj) {
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "6958f760d7074d1692f1262fa1052c7d")
		},
		type:"GET"
	})
}
