;
(function () {
  var myChart = echarts.init(document.getElementById('chart1'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: "",
      type: "gauge",
      detail: {
        formatter: "{value}",
        textStyle: {
          fontSize: 18
        },
        offsetCenter: [0, 50]
      },
      data: [{
        value: 1.69,
        name: "净利率"
      }],
      axisLine: {
        lineStyle: {
          color: [
            [0.2, "rgb(68, 199, 207)"],
            [0.8, "rgb(54, 158, 255)"],
            [1, "rgb(245, 108, 108)"]
          ],
          width: 15
        },
        show: true
      },
      radius: "87%",
      startAngle: 225,
      endAngle: -45,
      title: {
        show: true,
        offsetCenter: [0, 100]
      },
      axisTick: {
        show: true,
        length: 5,
        lineStyle: {
          type: "solid"
        }
      },
      pointer: {
        length: "80%"
      },
      splitLine: {
        lineStyle: {
          width: 1
        }
      },
      min: 0,
      max: 2
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()

;
(function () {
  var myChart = echarts.init(document.getElementById('chart2'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: "",
      type: "gauge",
      detail: {
        formatter: "{value}",
        textStyle: {
          fontSize: 18
        },
        offsetCenter: [0, 50]
      },
      data: [{
        value: 99.4,
        name: "资金回收率"
      }],
      axisLine: {
        lineStyle: {
          color: [
            [0.2, "rgb(68, 199, 207)"],
            [0.8, "rgb(54, 158, 255)"],
            [1, "rgb(245, 108, 108)"]
          ],
          width: 15
        },
        show: true
      },
      radius: "87%",
      startAngle: 225,
      endAngle: -45,
      title: {
        show: true,
        offsetCenter: [0, 100]
      },
      axisTick: {
        show: true,
        length: 5,
        lineStyle: {
          type: "solid"
        }
      },
      pointer: {
        length: "80%"
      },
      splitLine: {
        lineStyle: {
          width: 1
        }
      },
      min: 0,
      max: 100
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()

;
(function () {
  var myChart = echarts.init(document.getElementById('chart3'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: "",
      type: "gauge",
      detail: {
        formatter: "{value}",
        textStyle: {
          fontSize: 18
        },
        offsetCenter: [0, 50]
      },
      data: [{
        value: 9.9,
        name: "资本充足率"
      }],
      axisLine: {
        lineStyle: {
          color: [
            [0.2, "rgb(68, 199, 207)"],
            [0.8, "rgb(54, 158, 255)"],
            [1, "rgb(245, 108, 108)"]
          ],
          width: 15
        },
        show: true
      },
      radius: "87%",
      startAngle: 225,
      endAngle: -45,
      title: {
        show: true,
        offsetCenter: [0, 100]
      },
      axisTick: {
        show: true,
        length: 5,
        lineStyle: {
          type: "solid"
        }
      },
      pointer: {
        length: "80%"
      },
      splitLine: {
        lineStyle: {
          width: 1
        }
      },
      min: 0,
      max: 100
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()

;
(function () {
  var myChart = echarts.init(document.getElementById('chart4'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: "",
      type: "gauge",
      detail: {
        formatter: "{value}",
        textStyle: {
          fontSize: 18
        },
        offsetCenter: [0, 50]
      },
      data: [{
        value: 9,
        name: "核心资本充足率"
      }],
      axisLine: {
        lineStyle: {
          color: [
            [0.2, "rgb(68, 199, 207)"],
            [0.8, "rgb(54, 158, 255)"],
            [1, "rgb(245, 108, 108)"]
          ],
          width: 15
        },
        show: true
      },
      radius: "87%",
      startAngle: 225,
      endAngle: -45,
      title: {
        show: true,
        offsetCenter: [0, 100]
      },
      axisTick: {
        show: true,
        length: 5,
        lineStyle: {
          type: "solid"
        }
      },
      pointer: {
        length: "80%"
      },
      splitLine: {
        lineStyle: {
          width: 1
        }
      },
      min: 0,
      max: 100
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()


;
(function () {
  var myChart = echarts.init(document.getElementById('chart5'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      show: false,
      data: ["趋势"],
      textStyle: {
        color: "rgb(102, 102, 102)",
        fontSize: 14
      },
      x: "center",
      y: 20
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: true
        },
        magicType: {
          show: false,
          type: ["line", "bar"]
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: false,
    xAxis: [{
      type: "category",
      data: ["07年", "08年", "09年", "10年", "11年", "12年", "13年", "14年", "15年", "16年", "17年"],
      axisLine: {
        lineStyle: {
          color: "rgb(238, 238, 238)",
          width: 1
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: "rgb(102, 102, 102)",
          fontSize: 14
        }
      },
      splitArea: {
        show: false
      }
    }],
    yAxis: [{
      type: "value",
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgb(238, 238, 238)",
          width: 1
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgb(102, 102, 102)",
          fontSize: 14
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgb(239, 239, 239)"
        }
      },
      splitArea: {
        show: false
      }
    }],
    series: [{
      name: "趋势",
      type: "bar",
      data: [88, 80, 70, 50, 36, 32, 88, 80, 70, 50, 36],
      barWidth: 15,
      barCategoryGap: "50%",
      stack: "stack",
      barMinHeight: 20
    }],
    color: ["rgb(4, 154, 243)", "rgb(247, 218, 85)"],
    grid: {
      x: 40,
      y: 52,
      x2: 20,
      y2: 30
    },
    title: {
      x: "left",
      y: "top",
      textStyle: {
        color: "#333",
        fontSize: 16
      },
      borderColor: "#ccc"
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()

;
(function () {
  var myChart = echarts.init(document.getElementById('chart6'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["本月累计", "本年累计"],
      textStyle: {
        color: "rgb(102, 102, 102)",
        fontSize: 14
      },
      x: "center",
      y: 20
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: true
        },
        magicType: {
          show: false,
          type: ["line", "bar"]
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: false,
    xAxis: [{
      type: "category",
      data: ["公共事业", "电力", "航空", "船运", "煤炭", "厂商租赁"],
      axisLine: {
        lineStyle: {
          color: "rgb(238, 238, 238)",
          width: 1
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: "rgb(102, 102, 102)",
          fontSize: 14
        }
      },
      splitArea: {
        show: false
      }
    }],
    yAxis: [{
      type: "value",
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgb(238, 238, 238)",
          width: 1
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgb(102, 102, 102)",
          fontSize: 14
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgb(239, 239, 239)"
        }
      },
      splitArea: {
        show: false
      }
    }],
    series: [{
        name: "本月累计",
        type: "bar",
        data: [88, 80, 70, 50, 36, 32],
        barWidth: 15,
        barCategoryGap: "50%",
        stack: "stack",
        barMinHeight: 20
      },
      {
        type: "bar",
        name: "本年累计",
        data: [88, 80, 70, 50, 36, 32],
        stack: "stack"
      }
    ],
    color: ["rgb(4, 154, 243)", "rgb(247, 218, 85)"],
    grid: {
      x: 40,
      y: 52,
      x2: 20,
      y2: 30
    },
    title: {
      x: "left",
      y: "top",
      textStyle: {
        color: "#333",
        fontSize: 16
      },
      borderColor: "#ccc"
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()


;
(function () {
  var myChart = echarts.init(document.getElementById('chart7'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: "axis"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: true
        },
        magicType: {
          show: false,
          type: ["line", "bar"]
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    xAxis: [{
      type: "category",
      data: ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "rgb(102, 102, 102)",
          fontSize: 14
        }
      }
    }],
    yAxis: [{
        type: "value",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgb(222, 222, 222)",
            width: 1
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgb(102, 102, 102)",
            fontSize: 14
          }
        }
      },
      {
        type: "value",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgb(222, 222, 222)",
            width: 1
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgb(102, 102, 102)",
            fontSize: 14
          }
        },
        name: "单位：（%）",
        position: "right",
        nameLocation: "end",
        nameTextStyle: {
          color: "rgb(153, 153, 153)",
          fontSize: 12
        }
      }
    ],
    series: [{
      type: "line",
      name: "增长率",
      data: [21, 14, 25, 34, 11, 26, 10, 34, 21, 67, 24, 19],
      smooth: true
    }],
    title: {
      x: "center",
      textStyle: {
        color: "rgb(102, 102, 102)",
        fontSize: 16
      }
    },
    grid: {
      y: 30,
      x2: 30,
      x: 60,
      y2: 40
    },
    color: ["rgb(66, 159, 255)", "rgb(255, 185, 50)", "rgb(160, 113, 255)"]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()


;
(function () {
  var myChart = echarts.init(document.getElementById('chart8'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["境内", "境外"],
      x: "center",
      y: 40,
      textStyle: {
        color: "#333"
      }
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: true
        },
        magicType: {
          show: false,
          type: ["line", "bar"]
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    xAxis: [{
      type: "category",
      data: ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "rgb(102, 102, 102)",
          fontSize: 14
        }
      }
    }],
    yAxis: [{
        type: "value",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgb(222, 222, 222)",
            width: 1
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgb(102, 102, 102)",
            fontSize: 14
          }
        }
      },
      {
        type: "value",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgb(222, 222, 222)",
            width: 1
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgb(102, 102, 102)",
            fontSize: 14
          }
        },
        name: "单位：（%）",
        position: "right",
        nameLocation: "end",
        nameTextStyle: {
          color: "rgb(153, 153, 153)",
          fontSize: 12
        }
      }
    ],
    series: [{
        type: "line",
        name: "境内",
        data: [21, 14, 25, 34, 11, 26, 10, 34, 21, 67, 24, 19],
        smooth: true
      },
      {
        type: "line",
        name: "境外",
        data: [12, 11, 13, 23, 13, 12, 13, 12, 24, 24, 12, 23],
        symbol: "heart",
        smooth: true
      }
    ],
    title: {
      x: "center",
      textStyle: {
        color: "rgb(102, 102, 102)",
        fontSize: 16
      }
    },
    grid: {
      y: 80,
      x2: 30,
      x: 60,
      y2: 40
    },
    color: ["rgb(66, 159, 255)", "rgb(255, 185, 50)", "rgb(160, 113, 255)"]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})()