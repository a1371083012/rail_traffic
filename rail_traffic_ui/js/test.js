var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;


var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
var dataa = [Math.random() * 150];
var now = new Date(base);
function addData(shift) {
  now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
  date.push(now);
  dataa.push((Math.random() - 0.4) * 10 + dataa[dataa.length - 1]);
  if (shift) {
    date.shift();
    dataa.shift();
  }
  now = new Date(+new Date(now) + oneDay);
}
for (var i = 1; i < 100; i++) {
  addData();
}
option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: dateList2
  },
  yAxis: {
    boundaryGap: [0, '50%'],
    type: 'value'
  },
  series: [
    {
      name: '成交',
      type: 'line',
      smooth: true,
      symbol: 'none',
      stack: 'a',
      areaStyle: {
        normal: {}
      },
      data: dataa
    }
  ]
};
setInterval(function () {
  addData(true);
  console.log(dataa)
  myChart.setOption({
    xAxis: {
      data: date
    },
    series: [
      {
        name: '成交',
        data: valueList1
      }
    ]
  });
}, 1000);


option && myChart.setOption(option);
