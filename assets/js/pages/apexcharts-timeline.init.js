function getChartColorsArray(e) {
  if ((console.log(e), null !== document.getElementById(e))) {
    var t = document.getElementById(e).getAttribute("data-colors");
    return (t = JSON.parse(t)).map(function (e) {
      var t = e.replace(" ", "");
      if (-1 === t.indexOf(",")) {
        var a = getComputedStyle(document.documentElement).getPropertyValue(t);
        return a || t;
      }
      var o = e.split(",");
      return 2 != o.length
        ? t
        : "rgba(" +
            getComputedStyle(document.documentElement).getPropertyValue(o[0]) +
            "," +
            o[1] +
            ")";
    });
  }
}
var chartBarColors = getChartColorsArray("basic_timeline"),
  options = {
    series: [
      {
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-04").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime(),
            ],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-18").getTime(),
            ],
          },
        ],
      },
    ],
    chart: { height: 350, type: "rangeBar", toolbar: { show: !1 } },
    plotOptions: { bar: { horizontal: !0 } },
    xaxis: { type: "datetime" },
    colors: chartBarColors,
  },
  chart = new ApexCharts(document.querySelector("#basic_timeline"), options);
chart.render();
(chartBarColors = getChartColorsArray("color_timeline")),
  (options = {
    series: [
      {
        data: [
          {
            x: "Analysis",
            y: [
              new Date("2019-02-27").getTime(),
              new Date("2019-03-04").getTime(),
            ],
            fillColor: chartBarColors[0],
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime(),
            ],
            fillColor: chartBarColors[1],
          },
          {
            x: "Coding",
            y: [
              new Date("2019-03-07").getTime(),
              new Date("2019-03-10").getTime(),
            ],
            fillColor: chartBarColors[3],
          },
          {
            x: "Testing",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime(),
            ],
            fillColor: chartBarColors[4],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-17").getTime(),
            ],
            fillColor: chartBarColors[5],
          },
        ],
      },
    ],
    chart: { height: 330, type: "rangeBar", toolbar: { show: !1 } },
    plotOptions: {
      bar: {
        horizontal: !0,
        distributed: !0,
        dataLabels: { hideOverflowingLabels: !1 },
      },
    },
    dataLabels: {
      enabled: !0,
      formatter: function (e, t) {
        var a = t.w.globals.labels[t.dataPointIndex],
          o = moment(e[0]),
          i = moment(e[1]).diff(o, "days");
        return a + ": " + i + (1 < i ? " days" : " day");
      },
    },
    xaxis: { type: "datetime" },
    yaxis: { show: !0 },
  });
(chart = new ApexCharts(
  document.querySelector("#color_timeline"),
  options
)).render();
(chartBarColors = getChartColorsArray("multi_series")),
  (options = {
    series: [
      {
        name: "Bob",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-11").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-11").getTime(),
              new Date("2019-03-16").getTime(),
            ],
          },
        ],
      },
      {
        name: "Joe",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime(),
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-06").getTime(),
              new Date("2019-03-09").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-19").getTime(),
            ],
          },
        ],
      },
    ],
    chart: { height: 335, type: "rangeBar", toolbar: { show: !1 } },
    plotOptions: { bar: { horizontal: !0 } },
    dataLabels: {
      enabled: !0,
      formatter: function (e) {
        var t = moment(e[0]),
          a = moment(e[1]).diff(t, "days");
        return a + (1 < a ? " days" : " day");
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: void 0,
        inverseColors: !0,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100],
      },
    },
    xaxis: { type: "datetime" },
    legend: { position: "top" },
    colors: chartBarColors,
  });
(chart = new ApexCharts(
  document.querySelector("#multi_series"),
  options
)).render();
(chartBarColors = getChartColorsArray("advanced_timeline")),
  (options = {
    series: [
      {
        name: "Bob",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime(),
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-07").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-03").getTime(),
              new Date("2019-03-09").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-11").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-11").getTime(),
              new Date("2019-03-16").getTime(),
            ],
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-01").getTime(),
              new Date("2019-03-03").getTime(),
            ],
          },
        ],
      },
      {
        name: "Joe",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-06").getTime(),
              new Date("2019-03-16").getTime(),
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-03").getTime(),
              new Date("2019-03-07").getTime(),
            ],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-20").getTime(),
              new Date("2019-03-22").getTime(),
            ],
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-16").getTime(),
            ],
          },
        ],
      },
      {
        name: "Dan",
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-17").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-09").getTime(),
            ],
          },
        ],
      },
    ],
    chart: { height: 350, type: "rangeBar", toolbar: { show: !1 } },
    plotOptions: { bar: { horizontal: !0, barHeight: "80%" } },
    xaxis: { type: "datetime" },
    stroke: { width: 1 },
    fill: { type: "solid", opacity: 0.6 },
    legend: { position: "top", horizontalAlign: "left" },
    colors: chartBarColors,
  });
(chart = new ApexCharts(
  document.querySelector("#advanced_timeline"),
  options
)).render();
