var weeks = {
    animationEnabled: true,
    title: {
        text: "Places"
    },
    toolTip: {
        content: "{label}: {y} weeks"
    },
    data: [{
        type: "doughnut",
        innerRadius: "50%",
        showInLegend: false,
        legendText: "{label}",
        indexLabel: "{label}: #percent%",
        dataPoints: [
            { y: 963, label: "Florida" },
            { y: 388, label: "Texas" },
            { y: 69, label: "Italy" },
            { y: 48, label: "France" },
            { y: 21, label: "England" },
            { y: 7, label: "Spain" },
            { y: 4, label: "Finland" },
            { y: 6, label: "Other" }
        ]
    }]
};
$("#chartContainer").CanvasJSChart(weeks);
