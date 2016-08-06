var query;
var text = '{"query":"microsoft", "interpretations":[{  "logprob" : -11.279,  "parse":"<rule name=\"#GetPapers\"><attr name=\"academic#AA.AfN\">microsoft</attr></rule>",  "rules":[  {    "name":"#GetPapers",    "output":      {       "type":"query",      "value":"Composite(AA.AfN=="microsoft")"    }  }  ]}]}';
var obj=JSON.parse(text);
var composite = obj.interpretations[0].rules[0].output.value;

$(document).ready(function() {
	$("#submitbtn").click(function() {
		query = $("#my-query").val();
		alert(query);
	})
	alert(composite);
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
		data[0]
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
