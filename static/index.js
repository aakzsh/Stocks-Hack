function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "dark2",
	title:{

	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Points",
		includeZero: true,
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [
  {
		type: "line",
		showInLegend: true,
		name: "NYSE",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2021, 3, 10), y: 15977.46 },
			{ x: new Date(2021, 3, 11), y: 15977.46 },
			{ x: new Date(2021, 3, 12), y: 15977.46 },
			{ x: new Date(2021, 3, 13), y: 15962.34 },
			{ x: new Date(2021, 3, 14), y: 16000.15 },
			{ x: new Date(2021, 3, 15), y: 16116.85 },
			{ x: new Date(2021, 3, 16), y: 16186.30},

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "NASDAQ",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "green",

		dataPoints: [
			{ x: new Date(2021, 3, 10), y: 13854.44 },
			{ x: new Date(2021, 3, 11), y: 13854.44 },
			{ x: new Date(2021, 3, 12), y: 13854.44 },
			{ x: new Date(2021, 3, 13), y: 13902.45 },
			{ x: new Date(2021, 3, 14), y: 14004.08 },
			{ x: new Date(2021, 3, 15), y: 13983.23 },
			{ x: new Date(2021, 3, 16), y: 14059.11 },

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "BSE",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#33F8FF",
		dataPoints: [
			{ x: new Date(2021, 3, 10), y: 47883.38 },
			{ x: new Date(2021, 3, 11), y: 47883.38 },
			{ x: new Date(2021, 3, 12), y: 47883.38 },
			{ x: new Date(2021, 3, 13), y: 48201.96 },
			{ x: new Date(2021, 3, 14), y: 48201.96 },
			{ x: new Date(2021, 3, 15), y: 48368.27 },
			{ x: new Date(2021, 3, 16), y: 49006.32 },

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "JEG",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#1743E1",
		dataPoints: [

			{ x: new Date(2021, 3, 10), y: 2857 },
			{ x: new Date(2021, 3, 11), y: 2857 },
			{ x: new Date(2021, 3, 12), y: 2857 },
			{ x: new Date(2021, 3, 13), y: 2809 },
			{ x: new Date(2021, 3, 14), y: 2795 },
			{ x: new Date(2021, 3, 15), y: 2766 },
			{ x: new Date(2021, 3, 16), y: 2799 },

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "FTSE LSE",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#DEE117",
		dataPoints: [
			{ x: new Date(2021, 3, 10), y: 6877.52 },
			{ x: new Date(2021, 3, 11), y: 6877.52 },
			{ x: new Date(2021, 3, 12), y: 6877.52 },
			{ x: new Date(2021, 3, 13), y: 6882.41 },
			{ x: new Date(2021, 3, 14), y: 6888.94 },
			{ x: new Date(2021, 3, 15), y: 6959.87 },
			{ x: new Date(2021, 3, 16), y: 7016.24 },

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "HKEX",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#E18017",
		dataPoints: [
			{ x: new Date(2021, 3, 10), y: 28791.97 },
			{ x: new Date(2021, 3, 11), y: 28791.97 },
			{ x: new Date(2021, 3, 12), y: 28791.97 },
			{ x: new Date(2021, 3, 13), y: 28718.06 },
			{ x: new Date(2021, 3, 14), y: 28796.55 },
			{ x: new Date(2021, 3, 15), y: 28693.75 },
			{ x: new Date(2021, 3, 16), y: 28827.17 },

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "EURONEXT",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#EC04FF",
		dataPoints: [
		{ x: new Date(2021, 3, 10), y: 1215.54 },
			{ x: new Date(2021, 3, 11), y: 1215.54 },
			{ x: new Date(2021, 3, 12), y: 1215.54 },
			{ x: new Date(2021, 3, 13), y: 1215.54 },
			{ x: new Date(2021, 3, 14), y: 1215.76 },
			{ x: new Date(2021, 3, 15), y: 1223.13 },
			{ x: new Date(2021, 3, 16), y: 1229.68 },

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "TSE",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#FF0472",
		dataPoints: [
      { x: new Date(2021, 3, 10), y: 19220.05 },
      { x: new Date(2021, 3, 11), y: 19220.05 },
			{ x: new Date(2021, 3, 12), y: 19220.05 },
			{ x: new Date(2021, 3, 13), y: 19249.32 },
			{ x: new Date(2021, 3, 14), y: 19304.17 },
			{ x: new Date(2021, 3, 15), y: 19272.87 },
			{ x: new Date(2021, 3, 16), y: 19380.68 },


		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "NSE",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#E1C0C0",
		dataPoints: [
			{ x: new Date(2021, 3, 10), y: 14455.65 },
			{ x: new Date(2021, 3, 11), y: 14455.65 },
			{ x: new Date(2021, 3, 12), y: 14455.65 },
			{ x: new Date(2021, 3, 13), y: 14375.60 },
			{ x: new Date(2021, 3, 14), y: 14375.60 },
			{ x: new Date(2021, 3, 15), y: 14554.15 },
			{ x: new Date(2021, 3, 16), y: 14616.95 },

		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "DEUTSCHE",
		lineDashType: "dash",
		dataPoints: [
    { x: new Date(2021, 3, 10), y: 148.20 },
    { x: new Date(2021, 3, 11), y: 148.20 },
    { x: new Date(2021, 3, 12), y: 148.20 },
    { x: new Date(2021, 3, 13), y: 147.95 },
    { x: new Date(2021, 3, 14), y: 148 },
    { x: new Date(2021, 3, 15), y: 148.75 },
    { x: new Date(2021, 3, 16), y: 147.25 },

		]
	}]
});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}



function predict(){

const date1 = new Date('2021-04-16');
var date3 = document.getElementById("lolol").value;
var date2 = new Date(date3);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

var score;

var name = document.getElementById("sname").value;

if(name=="db"){
    score = 147.25 + (diffDays*0.01835);
  window.alert("The prediction is: " + score + diffDays);
}

else if(name=="nse"){
  score = 14617.85 + (diffDays*1.715);
  window.alert("The prediction is: " + score);
}

else if(name=="tse"){
    score = 19380.68 + (diffDays*1.982);
  window.alert("The prediction is: " + score);
}
else if(name=="euronext"){
    score = 1229 + (diffDays*0.1526);
  window.alert("The prediction is: " + score);
}
else if(name=="nyse"){
    score = 16186.63 + (diffDays*1.6527);
  window.alert("The prediction is: " + score);
}
else if(name=="nasdaq"){
    score = 14059.11 + (diffDays*1.332);
  window.alert("The prediction is: " + score);
}
else if(name=="bse"){
    score = 49006.32 + (diffDays*5.5956);
  window.alert("The prediction is: " + score);
}
else if(name=="jeg"){
  score = 2799 + (diffDays*0.8);
  window.alert("The prediction is: " + score);
}
else if(name=="lse"){
    score = 7016.24 + (diffDays*0.0375);
  window.alert("The prediction is: " + score);
}
else if(name=="hkse"){
    score = 28827.17 + (diffDays*1.542);
  window.alert("The prediction is: " + score);
}
}
