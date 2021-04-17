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
			{ x: new Date(2021, 3, 10), y: 650 },
			{ x: new Date(2021, 3, 11), y: 700 },
			{ x: new Date(2021, 3, 12), y: 710 },
			{ x: new Date(2021, 3, 13), y: 658 },
			{ x: new Date(2021, 3, 14), y: 734 },
			{ x: new Date(2021, 3, 15), y: 963 },
			{ x: new Date(2021, 3, 16), y: 847 },

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
			{ x: new Date(2021, 3, 15), y: 43368.27 },
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
			{ x: new Date(2021, 3, 10), y: 650 },
			{ x: new Date(2021, 3, 11), y: 700 },
			{ x: new Date(2021, 3, 12), y: 710 },
			{ x: new Date(2021, 3, 13), y: 658 },
			{ x: new Date(2021, 3, 14), y: 734 },
			{ x: new Date(2021, 3, 15), y: 963 },
			{ x: new Date(2021, 3, 16), y: 847 },

		]
	},
  {
		type: "line",
		showInLegend: true,
		name: "LSE",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#DEE117",
		dataPoints: [
			{ x: new Date(2021, 3, 10), y: 650 },
			{ x: new Date(2021, 3, 11), y: 700 },
			{ x: new Date(2021, 3, 12), y: 710 },
			{ x: new Date(2021, 3, 13), y: 658 },
			{ x: new Date(2021, 3, 14), y: 734 },
			{ x: new Date(2021, 3, 15), y: 963 },
			{ x: new Date(2021, 3, 16), y: 847 },

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
			{ x: new Date(2021, 3, 10), y: 650 },
			{ x: new Date(2021, 3, 11), y: 700 },
			{ x: new Date(2021, 3, 12), y: 710 },
			{ x: new Date(2021, 3, 13), y: 658 },
			{ x: new Date(2021, 3, 14), y: 734 },
			{ x: new Date(2021, 3, 15), y: 963 },
			{ x: new Date(2021, 3, 16), y: 847 },

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
			{ x: new Date(2021, 3, 10), y: 650 },
			{ x: new Date(2021, 3, 11), y: 700 },
			{ x: new Date(2021, 3, 12), y: 710 },
			{ x: new Date(2021, 3, 13), y: 658 },
			{ x: new Date(2021, 3, 14), y: 734 },
			{ x: new Date(2021, 3, 15), y: 963 },
			{ x: new Date(2021, 3, 16), y: 847 },

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
			{ x: new Date(2021, 3, 10), y: 650 },
			{ x: new Date(2021, 3, 11), y: 700 },
			{ x: new Date(2021, 3, 12), y: 710 },
			{ x: new Date(2021, 3, 13), y: 658 },
			{ x: new Date(2021, 3, 14), y: 734 },
			{ x: new Date(2021, 3, 15), y: 963 },
			{ x: new Date(2021, 3, 16), y: 847 },

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
			{ x: new Date(2021, 3, 10), y: 650 },
			{ x: new Date(2021, 3, 11), y: 700 },
			{ x: new Date(2021, 3, 12), y: 710 },
			{ x: new Date(2021, 3, 13), y: 658 },
			{ x: new Date(2021, 3, 14), y: 734 },
			{ x: new Date(2021, 3, 15), y: 963 },
			{ x: new Date(2021, 3, 16), y: 847 },

		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "DEUTSCHE",
		lineDashType: "dash",
		dataPoints: [
    { x: new Date(2021, 3, 10), y: 650 },
    { x: new Date(2021, 3, 11), y: 700 },
    { x: new Date(2021, 3, 12), y: 710 },
    { x: new Date(2021, 3, 13), y: 658 },
    { x: new Date(2021, 3, 14), y: 734 },
    { x: new Date(2021, 3, 15), y: 963 },
    { x: new Date(2021, 3, 16), y: 847 },

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
