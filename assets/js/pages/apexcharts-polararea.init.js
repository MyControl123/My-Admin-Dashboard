function getChartColorsArray(e) {
  if ((console.log(e), null !== document.getElementById(e))) {
    var r = document.getElementById(e).getAttribute("data-colors");
    return (r = JSON.parse(r)).map(function (e) {
      var r = e.replace(" ", "");
      if (-1 === r.indexOf(",")) {
        var o = getComputedStyle(document.documentElement).getPropertyValue(r);
        return o || r;
      }
      var t = e.split(",");
      return 2 != t.length
        ? r
        : "rgba(" +
            getComputedStyle(document.documentElement).getPropertyValue(t[0]) +
            "," +
            t[1] +
            ")";
    });
  }
}
var chartBarColors = getChartColorsArray("basic_polar_area"),
  options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: { type: "polarArea", width: 400 },
    labels: [
      "Series A",
      "Series B",
      "Series C",
      "Series D",
      "Series E",
      "Series F",
      "Series G",
      "Series H",
      "Series I",
    ],
    stroke: { colors: ["#fff"] },
    fill: { opacity: 0.8 },
    legend: { position: "bottom" },
    colors: chartBarColors,
  },
  chart = new ApexCharts(document.querySelector("#basic_polar_area"), options);
chart.render();
options = {
  series: [42, 47, 52, 58, 65],
  chart: { width: 400, type: "polarArea" },
  labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
  fill: { opacity: 1 },
  stroke: { width: 1, colors: void 0 },
  yaxis: { show: !1 },
  legend: { position: "bottom" },
  plotOptions: {
    polarArea: { rings: { strokeWidth: 0 }, spokes: { strokeWidth: 0 } },
  },
  theme: {
    mode: "light",
    palette: "palette1",
    monochrome: {
      enabled: !0,
      shadeTo: "light",
      color: (chartBarColors = getChartColorsArray("monochrome_polar_area"))[0],
      shadeIntensity: 0.6,
    },
  },
};
(chart = new ApexCharts(
  document.querySelector("#monochrome_polar_area"),
  options
)).render();
