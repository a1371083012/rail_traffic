// 变量&常量
// #region 模拟数据
const week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
const data = [["0时", 53], ["0:20", 54], ["0:40", 86],
["1时", 73], ["1:20", 73], ["1:40", 68],
["2时", 76], ["2:20", 75], ["2:40", 65],
["3时", 68], ["3:20", 87], ["3:40", 45],
["4时", 57], ["4:20", 44], ["4:40", 71],
["5时", 73], ["5:20", 43], ["5:40", 37],
["6时", 57], ["6:20", 42], ["6:40", 64],
["7时", 61], ["7:20", 69], ["7:40", 67],
["8时", 58], ["8:20", 63], ["8:40", 84],
["9时", 45], ["9:20", 42], ["9:40", 51],
["10时", 60], ["10:20", 73], ["10:40", 56],
["11时", 79], ["11:20", 85], ["11:40", 53],
["12时", 92], ["12:20", 90], ["12:40", 46],
["13时", 42], ["13:20", 57], ["13:40", 75],
["14时", 80], ["14:20", 73], ["14:40", 65],
["15时", 59], ["15:20", 53], ["15:40", 53],
["16时", 61], ["16:20", 48], ["16:40", 50],
["17时", 60], ["17:20", 68], ["17:40", 58],
["18时", 55], ["18:20", 49], ["18:40", 68],
["19时", 86], ["19:20", 66], ["19:40", 55],
["20时", 81], ["20:20", 96], ["20:40", 68],
["21时", 82], ["21:20", 77], ["21:40", 70],
["22时", 74], ["22:20", 43], ["22:40", 83],
["23时", 68], ["23:20", 76], ["23:40", 67],
["24时", 75], ["24:20", 54], ["24:40", 47],
];
const data0 = [["0时", 11], ["0:20", 25], ["0:40", 25],
["1时", 25], ["1:20", 27], ["1:40", 25],
["2时", 23], ["2:20", 29], ["2:40", 22],
["3时", 26], ["3:20", 25], ["3:40", 21],
["4时", 24], ["4:20", 23], ["4:40", 25],
["5时", 23], ["5:20", 27], ["5:40", 26],
["6时", 25], ["6:20", 23], ["6:40", 27],
["7时", 22], ["7:20", 22], ["7:40", 23],
["8时", 24], ["8:20", 25], ["8:40", 28],
["9时", 23], ["9:20", 28], ["9:40", 27],
["10时", 27], ["10:20", 24], ["10:40", 25],
["11时", 28], ["11:20", 24], ["11:40", 26],
["12时", 29], ["12:20", 25], ["12:40", 23],
["13时", 26], ["13:20", 28], ["13:40", 22],
["14时", 25], ["14:20", 23], ["14:40", 22],
["15时", 22], ["15:20", 28], ["15:40", 21],
["16时", 22], ["16:20", 27], ["16:40", 24],
["17时", 23], ["17:20", 25], ["17:40", 25],
["18时", 24], ["18:20", 26], ["18:40", 27],
["19时", 25], ["19:20", 23], ["19:40", 23],
["20时", 28], ["20:20", 24], ["20:40", 23],
["21时", 26], ["21:20", 25], ["21:40", 27],
["22时", 28], ["22:20", 25], ["22:40", 26],
["23时", 27], ["23:20", 23], ["23:40", 25],
["24时", 24], ["24:20", 23], ["24:40", 24],
];
const data1 = [["0时", 11], ["0:20", 15], ["0:40", 15],
["1时", 15], ["1:20", 17], ["1:40", 15],
["2时", 13], ["2:20", 19], ["2:40", 12],
["3时", 16], ["3:20", 15], ["3:40", 11],
["4时", 14], ["4:20", 13], ["4:40", 15],
["5时", 13], ["5:20", 17], ["5:40", 16],
["6时", 15], ["6:20", 13], ["6:40", 17],
["7时", 12], ["7:20", 12], ["7:40", 13],
["8时", 14], ["8:20", 15], ["8:40", 18],
["9时", 13], ["9:20", 18], ["9:40", 17],
["10时", 17], ["10:20", 14], ["10:40", 15],
["11时", 18], ["11:20", 14], ["11:40", 16],
["12时", 19], ["12:20", 15], ["12:40", 13],
["13时", 16], ["13:20", 18], ["13:40", 12],
["14时", 15], ["14:20", 13], ["14:40", 12],
["15时", 12], ["15:20", 18], ["15:40", 11],
["16时", 12], ["16:20", 17], ["16:40", 14],
["17时", 13], ["17:20", 15], ["17:40", 15],
["18时", 14], ["18:20", 16], ["18:40", 17],
["19时", 15], ["19:20", 13], ["19:40", 13],
["20时", 18], ["20:20", 14], ["20:40", 13],
["21时", 16], ["21:20", 15], ["21:40", 17],
["22时", 18], ["22:20", 15], ["22:40", 16],
["23时", 17], ["23:20", 13], ["23:40", 15],
["24时", 14], ["24:20", 13], ["24:40", 14],
];
var hour='0', min='时', space=' ';
const dateList1 = ["1月", "1月4日", "1月8日", "1月12日", "1月16日", "1月20日",
"2月", "2月4日", "2月8日", "2月12日", "2月16日", "2月20日",
"3月", "3月4日", "3月8日", "3月12日", "3月16日", "3月20日",
"4月", "4月4日", "4月8日", "4月12日", "4月16日", "4月20日",
"5月", "5月4日", "5月8日", "5月12日", "5月16日", "5月20日",
"6月", "6月4日", "6月8日", "6月12日", "6月16日", "6月20日",
"7月", "7月4日", "7月8日", "7月12日", "7月16日", "7月20日",
"8月", "8月4日", "8月8日", "8月12日", "8月16日", "8月20日",
"9月", "9月4日", "9月8日", "9月12日", "9月16日", "9月20日",
"10月", "10月4日", "10月8日", "10月12日", "10月16日", "10月20日",
"11月", "11月4日", "11月8日", "11月12日", "11月16日", "11月20日",
"12月", "12月4日", "12月8日", "12月12日", "12月16日", "12月20日"]; // 12*6=72
var dateList2 = ["0时", "0:20", "0:40", "1时", "1:20", "1:40", "2时", "2:20", "2:40",
"3时", "3:20", "3:40", "4时", "4:20", "4:40", "5时", "5:20", "5:40",
"6时", "6:20", "6:40", "7时", "7:20", "7:40", "8时", "8:20", "8:40",
"9时", "9:20", "9:40", "10时", "10:20", "10:40", "11时", "11:20", "11:40",
"12时", "12:20", "12:40", "13时", "13:20", "13:40", "14时", "14:20", "14:40",
"15时", "15:20", "15:40", "16时", "16:20", "16:40", "17时", "17:20", "17:40",
"18时", "18:20", "18:40", "19时", "19:20", "19:40", "20时", "20:20", "20:40",
"21时", "21:20", "21:40", "22时", "22:20", "22:40", "23时", "23:20", "23:40"]; // 8*9=72
const valueList = data.map(function (item) {
  return item[1];
});
var valueList0 = data0.map(function (item) {
  return item[1];
});
var valueList1 = data1.map(function (item) {
  return item[1];
});
var obj = [
{name:'正常运行',num:1548,percent:'66.64%',unit:'万件',color:'deviceColorGreen'},
{name:'离线设备',num:775,percent:'33.36%',unit:'件',color:'deviceColorGray'},
{name:'欠压报警',num:735,percent:'25.82%',unit:'件',color:'deviceColorBlue'},
{name:'过压报警',num:1048,percent:'36.81%',unit:'件',color:'deviceColorYellow'},
{name:'过流报警',num:580,percent:'20.37%',unit:'件',color:'deviceColorPurple'},
{name:'过温报警',num:484,percent:'17.00%',unit:'件',color:'deviceColorRed'}];
let inputArr = [
  { id: 1, name: 'SN12652', name2: '爪哇爪哇' },
  { id: 2, name: 'SN21348', name2: '拍什么片' },
  { id: 3, name: 'SN18472', name2: '简约而不简单' },
  { id: 4, name: 'SN13215', name2: '老夫一把梭' },
  { id: 5, name: 'SN24376', name2: '安卓' },
  { id: 6, name: 'SN17765', name2: '学不会' },
  { id: 7, name: 'SN18333', name2: '更加不会' },
  { id: 8, name: 'SN23734', name2: '懂哦' },
  { id: 9, name: 'SN29994', name2: '什么东西呀' },
  { id: 10, name: 'SN11896', name2: '什么东西呀' }
];
// #endregion 模拟数据
// #region 颜色变量
var colorBule = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#00B2BD' },
  { offset: 0.5, color: '#0089d9' },
  { offset: 1, color: '#013487' }
]);
var colorBuleReverse = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#69F9FF' },
  { offset: 0.5, color: '#47A5E4' },
  { offset: 1, color: '#295CAA' }
]);
var colorYellow = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#FFE08E' },
  { offset: 0.5, color: '#FDB503' },
  { offset: 1, color: '#EC4D00' }
]);
var colorGreenPie = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#009C22' },
  { offset: 0.5, color: '#0FD16B' },
  { offset: 1, color: '#2EE84B' }
]);
var colorYellowPie = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#FFD568' },
  { offset: 0.5, color: '#FDB503' },
  { offset: 1, color: '#EC4D00' }
]);
var colorGaryPie = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#C9C9C9' },
  { offset: 1, color: '#646464' }
]);
var colorBulePie = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#00B2BD' },
  { offset: 0.5, color: '#0089d9' },
  { offset: 1, color: '#013487' }
]);
var colorRedPie = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#FF878A' },
  { offset: 0.5, color: '#FF4045' },
  { offset: 1, color: '#AC0000' }
]);
var colorPurplePie = new echarts.graphic.LinearGradient(1, 0, 0, 1, [
  { offset: 0, color: '#EFA2FF' },
  { offset: 0.5, color: '#E25AFF' },
  { offset: 1, color: '#750077' }
]);
// #endregion
// #region echarts声明
var workTimeBar1 = echarts.init(document.getElementById('workTimeBar1'));
var workTimeBar2 = echarts.init(document.getElementById('workTimeBar2'));
var voltage = echarts.init(document.getElementById('voltage'));
var historical = echarts.init(document.getElementById('historical'));
var devicePie = echarts.init(document.getElementById('devicePie'));
var voltage = echarts.init(document.getElementById('voltage'));
var temperature = echarts.init(document.getElementById('temperature'));
var life = echarts.init(document.getElementById('life'));
var eventCount = echarts.init(document.getElementById('eventCount'));
// #endregion

// 地图&图表
// #region 基本图表
var workTimeBarOptions1 = {
    polar: {
      radius: [10, '60%']
    },
    radiusAxis: {},
    textStyle: {
      color: "rgba(255, 255, 255, .7)",
    },
    angleAxis: {
      type: 'category',
      data: ['7点', '7点半', '8点', '8点半', '9点', '9点半', '10点', '10\n点半', '11点', '11点以后'],
      startAngle: 90
    },
    tooltip: {},
    series: {
        type: 'bar',
        data: [
            {value: 4,itemStyle: {color: colorBule}},
            {value: 3,itemStyle: {color: colorBule}},
            {value: 4,itemStyle: {color: colorBule}},
            {value: 6,itemStyle: {color: colorYellow}},
            {value: 5,itemStyle: {color: colorBule}},
            {value: 4,itemStyle: {color: colorBule}},
            {value: 3,itemStyle: {color: colorBule}},
            {value: 6,itemStyle: {color: colorYellow}},
            {value: 3,itemStyle: {color: colorBule}},
            {value: 5,itemStyle: {color: colorBule}}
        ],
        coordinateSystem: 'polar'
    }
};
var workTimeBarOptions2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '10%',
      left: '2%',
      right: '6%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['07-08点', '08-09点', '09-10点', '10-11点', '11点以后'],
      axisLabel: {
        inside: true,
        color: '#fff',
        fontSize: 10
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    textStyle: {
      color: "rgba(255, 255, 255, .7)",
    },
    series: [
      {
        data: [120, 195, 150, 80, 70],
        type: 'bar',
        barCategoryGap: '40%',
        itemStyle: {
          color: colorBule
        },
        emphasis: {
          itemStyle: {
            color: colorBuleReverse
          }
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, .2)'
        }
      }
    ]
};
var lineOptions = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  grid: {
    top: '8%',
    left: '0%',
    right: '12px',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      boundaryGap: false
    }
  ],
  yAxis: {
    type: 'value'
  },
  textStyle: {
    color: "rgba(255, 255, 255, .7)",
  },
  series: [
    {
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgba(8, 202, 255, 1)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(0, 129, 212, .4)'
          },
          {
            offset: 1,
            color: 'rgba(0, 50, 129, .3)'
          }
        ])
      },
      data: valueList
    }
  ]
};
var deviceOption = {
  tooltip: {
    trigger: 'item',
    position: 'top'
  },
  series: [
    {
      name: '设备状态',
      type: 'pie',
      radius: ['60%', '85%'],
      itemStyle: {
        borderColor: '#091425',
        borderWidth: 2
      },
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowColor: 'rgba(255, 255, 255, .9)'
        }
      },
      data: [
        { value: obj[0].num, name: obj[0].name ,
          itemStyle: {color: colorGreenPie}
        },
        { value: obj[1].num, name: obj[1].name ,
          itemStyle: {color: colorGaryPie}
        },
      ]
    },
    {
      name: '报警类型',
      type: 'pie',
      radius: [0, '45%'],
      itemStyle: {
        borderColor: '#091425',
        borderWidth: 2
      },
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowColor: 'rgba(255, 255, 255, .9)'
        }
      },
      data: [
        { value: obj[2].num, name: obj[2].name ,
          itemStyle: {color: colorBulePie}
          // itemStyle: {color: '#0185ce'}
        },
        { value: obj[3].num, name: obj[3].name ,
          itemStyle: {color: colorYellowPie}
          // itemStyle: {color: '#feb61d'}
        },
        { value: obj[4].num, name: obj[4].name ,
          itemStyle: {color: colorPurplePie}
          // itemStyle: {color: '#b233c7'}
        },
        { value: obj[5].num, name: obj[5].name ,
          itemStyle: {color: colorRedPie}
          // itemStyle: {color: '#f13034'}
        }
      ]
    },
  ]
};
var line1Options = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  grid: {
    top: '8%',
    left: '0%',
    right: '10px',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: dateList2,
      boundaryGap: false
    }
  ],
  yAxis: {
    type: 'value'
  },
  textStyle: {
    color: "rgba(255, 255, 255, .7)",
  },
  series: [
    {
      name: '过压报警次数',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgba(250, 158, 0, 1)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(242, 113, 0, .4)'
          },
          {
            offset: 1,
            color: 'rgba(242, 113, 0, .1)'
          }
        ])
      },
      data: valueList0
    },
    {
      name: '过流报警次数',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgba(210, 73, 241, 1)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(210, 73, 241, .4)'
          },
          {
            offset: 1,
            color: 'rgba(210, 73, 241, .1)'
          }
        ])
      },
      data: valueList1
    }
  ]
};
var historicalOptions=$.extend(true,{},lineOptions);
historicalOptions.series[0].name="次数";
historicalOptions.xAxis[0].data=dateList1;
var voltageOptions=$.extend(true,{},lineOptions);
voltageOptions.series[0].name="电压（V）";
voltageOptions.xAxis[0].data=dateList2;
var temperatureOptions=$.extend(true,{},lineOptions);
temperatureOptions.series[0].name="温度（°C）";
temperatureOptions.xAxis[0].data=dateList2;
var lifeOptions=$.extend(true,{},lineOptions);
lifeOptions.series[0].name="小时（H）";
lifeOptions.xAxis[0].data=dateList2;
function initDeviceStatus(){
  let deviceStatus = $('.deviceStatus');
  let alarmType = $('.alarmType');
  let html=``;
  for(o of obj){
    let tempName = o.name;
    html+=`
    <div class="daviceList" data-text="`+o.name+`">
        <div class="deviceColor"><div class="`+o.color+`"></div></div>
        <div class="deviceState">`+o.name+`</div>
        <div class="deviceNum">`+o.num+`<span class="deviceNuit">`+o.unit+`</span></div>
        <div class="devicePercent">`+o.percent+`</div>
    </div>`;
    switch(o.name){
      case "正常运行": case "离线设备":
        deviceStatus.append(html);
        deviceStatus.find('[data-text='+tempName+']').mouseover(function(){
          devicePie.dispatchAction({
            type: 'highlight',
            name: tempName
          })
        });
        deviceStatus.find('[data-text='+tempName+']').mouseleave(function(){
          devicePie.dispatchAction({
            type: 'downplay',
            name: tempName
          })
        });
        break;
      case "欠压报警": case "过压报警": case "过流报警": case "过温报警":
        alarmType.append(html);
        alarmType.find('[data-text='+tempName+']').mouseover(function(){
          devicePie.dispatchAction({
            type: 'highlight',
            name: tempName
          })
        });
        alarmType.find('[data-text='+tempName+']').mouseleave(function(){
          devicePie.dispatchAction({
            type: 'downplay',
            name: tempName
          })
        });
        break;
    }
    html=``;
  }
}
initDeviceStatus();
// #endregion
// #region 设置图表
workTimeBar1.setOption(workTimeBarOptions1);
workTimeBar2.setOption(workTimeBarOptions2);
devicePie.setOption(deviceOption);
historical.setOption(historicalOptions);
voltage.setOption(voltageOptions);
temperature.setOption(temperatureOptions);
life.setOption(lifeOptions);
eventCount.setOption(line1Options);
// #endregion
// #region 中国地图
function echart_map() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart_map'));

  var mapName = 'china'
  var data = []
  var toolTipData = [];

  /*获取地图数据*/
  myChart.showLoading();
  var mapFeatures = echarts.getMap(mapName).geoJson.features;
  myChart.hideLoading();
  var geoCoordMap = {
      '福州': [119.4543, 25.9222],
      '长春': [125.8154, 44.2584],
      '重庆': [107.7539, 30.1904],
      '西安': [109.1162, 34.2004],
      '成都': [103.9526, 30.7617],
      '常州': [119.4543, 31.5582],
      '北京': [116.4551, 40.2539],
      '北海': [109.314, 21.6211],
      '海口': [110.3893, 19.8516],
      '长沙': [113.019455,28.200103],
      '上海': [121.40, 31.73],
      '内蒙古': [106.82, 39.67]
  };

  var GZData = [
      [{
          name: '长沙'
      }, {
          name: '福州',
          value: 95
      }],
      [{
          name: '长沙'
      }, {
          name: '长春',
          value: 80
      }],
      [{
          name: '长沙'
      }, {
          name: '重庆',
          value: 70
      }],
      [{
          name: '长沙'
      }, {
          name: '西安',
          value: 60
      }],
      [{
          name: '长沙'
      }, {
          name: '成都',
          value: 50
      }],
      [{
          name: '长沙'
      }, {
          name: '常州',
          value: 40
      }],
      [{
          name: '长沙'
      }, {
          name: '北京',
          value: 30
      }],
      [{
          name: '长沙'
      }, {
          name: '北海',
          value: 20
      }],
      [{
          name: '长沙'
      }, {
          name: '海口',
          value: 10
      }],
      [{
          name: '长沙'
      }, {
          name: '上海',
          value: 80
      }],
      [{
          name: '长沙'
      }, {
          name: '内蒙古',
          value: 80
      }]
  ];

  var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
              res.push({
                  fromName: dataItem[0].name,
                  toName: dataItem[1].name,
                  coords: [fromCoord, toCoord]
              });
          }
      }
      return res;
  };

  var color = ['#c5f80e'];
  var series = [];
  [
      ['石家庄', GZData]
  ].forEach(function (item, i) {
      series.push({
          name: item[0],
          type: 'lines',
          zlevel: 2,
          symbol: ['none', 'arrow'],
          symbolSize: 10,
          effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: 'arrow',
              symbolSize: 5
          },
          lineStyle: {
              normal: {
                  color: color[i],
                  width: 1,
                  opacity: 0.6,
                  curveness: 0.2
              }
          },
          data: convertData(item[1])
      }, {
          name: item[0],
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
              brushType: 'stroke'
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
              }
          },
          symbolSize: function (val) {
              return val[2] / 8;
          },
          itemStyle: {
              normal: {
                  color: color[i]
              }
          },
          data: item[1].map(function (dataItem) {
              return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
          })
      });
  });

  option = {
      tooltip: {
          trigger: 'item'
      },
      geo: {
          map: 'china',
          label: {
              emphasis: {
                  show: false
              }
          },
          roam: true,
          itemStyle: {
              normal: {
                  borderColor: 'rgba(147, 235, 248, 1)',
                  borderWidth: 1,
                  areaColor: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.8,
                      colorStops: [{
                          offset: 0,
                          color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                      }, {
                          offset: 1,
                          color: 'rgba(47,79,79, .1)' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                  },
                  shadowColor: 'rgba(128, 217, 248, 1)',
                  // shadowColor: 'rgba(255, 255, 255, 1)',
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10
              },
              emphasis: {
                  areaColor: '#389BB7',
                  borderWidth: 0
              }
          }
      },
      series: series
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
      myChart.resize();
  });

}
echart_map();
// #endregion 

// 其他配置
// #region 自适应窗口大小
window.onresize=()=>{
  workTimeBar1.resize();
  workTimeBar2.resize();
  voltage.resize();
  devicePie.resize();
  historical.resize();
  temperature.resize();
  life.resize();
  eventCount.resize();
}
// #endregion
// #region 系统时钟&数据异步
function timeRun(){
  var date = new Date();
  $('.navigation').find('.time').html(date.getFullYear()+`<span>-</span>`+(date.getMonth()+1)+`<span>-</span>`+date.getDate()+` `+date.getHours()+`<span>:</span>`+date.getMinutes()+`<span>:</span>`+date.getSeconds()+` <span>`+week[date.getDay()]+`</span>`);
}
timeRun();
setInterval(()=>{
  valueList0.shift();
  valueList0.push(Math.floor(Math.random()*10)+20);
  valueList1.shift();
  valueList1.push(Math.floor(Math.random()*10)+10);
  dateList2.shift();
  dateList2.push(hour+min+space);
  eventCount.setOption({
    xAxis: [
      {
        data: dateList2
      }
    ],
    series: [
      {
        data: valueList0
      },
      {
        data: valueList1
      }
    ]
  });
  timeRun();
  if(min==':40'){
    if(++hour=='24'){
      hour=0;
      space=space==''?' ':'';
    }
    min='时';
  }else if(min=='时'){
    min=':20';
  }else if(min==':20'){
    min=':40';
  }
},1000);
// #endregion
// #region 下拉搜索框
// 选中时触发
let voltageValue = function (val) {
  voltage.clear();
  voltage.setOption(voltageOptions);
}
let temperatureValue = function (val) {
  temperature.clear();
  temperature.setOption(temperatureOptions);
}
let lifeValue = function (val) {
  life.clear();
  life.setOption(lifeOptions);
}
$('#voltageSelect').cmzSelect({
  id: 'id', // 唯一标识
  currentId: 1, // 当前选择的数据
  arr: inputArr, // 数据源
  label: 'name', // input展示数据
  callback: voltageValue, // 回调函数
  searchList: ['name'] // 模糊查询字段列表
})
$('#temperatureSelect').cmzSelect({
  id: 'id', // 唯一标识
  currentId: 1, // 当前选择的数据
  arr: inputArr, // 数据源
  label: 'name', // input展示数据
  callback: temperatureValue, // 回调函数
  searchList: ['name'] // 模糊查询字段列表
})
$('#lifeSelect').cmzSelect({
  id: 'id', // 唯一标识
  currentId: 1, // 当前选择的数据
  arr: inputArr, // 数据源
  label: 'name', // input展示数据
  callback: lifeValue, // 回调函数
  searchList: ['name'] // 模糊查询字段列表
})
// #endregion
// #region layui表格
layui.use('table', function(){
  var table = layui.table;
  
  table.render({
    elem: '#historicalData'
    ,url:'../user.json'
    ,height: '157'
    ,skin: 'line' //无行边框风格
    ,even: true //开启隔行背景
    ,cols: [[
      {field:'no', title: '排名', minWidth: 73, sort: true, align: 'center'}
      ,{field:'model', title: '型号', align: 'center'} //width 支持：数字、百分比和不填写。你还可以通过 minWidth 参数局部定义当前单元格的最小宽度，layui 2.2.1 新增
      ,{field:'version', title: '版本', align: 'center'}
      ,{field:'serial', title: '序列号', minWidth: 87, sort: true, align: 'center'}
      ,{field:'address', title: '地位号', minWidth: 72, align: 'center'}
      ,{field:'batch', title: '生产批次', minWidth: 86, align: 'center'} //单元格内容水平居中
      ,{field:'date', title: '初装日期', minWidth: 86, align: 'center'} //单元格内容水平居右
      ,{field:'currentTime', title: '本次运行时间', minWidth: 114, align: 'center'}
      ,{field:'sumTime', title: '累积运行时间', minWidth: 114, align: 'center'}
      ,{field:'warn', title: '报警累计', minWidth: 101, sort: true, align: 'center'}
    ]]
  });
});
// #endregion