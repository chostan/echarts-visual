// 柱状图
const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
export const options1 = {
  grid: {
    top: '10%',
    left: '22%',
    bottom: '10%',
    // containLabel: true
  },
  // 不显示x轴的相关信息
  xAxis: {
    show: false,
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
      // 不显示y轴的线
      axisLine: {
        show: false,
      },
      // 不显示刻度
      axisTick: {
        show: false,
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: '#fff',
      },
    },
    {
      data: [702, 350, 610, 793, 664],
      inverse: true,
      // 不显示y轴的线
      axisLine: {
        show: false,
      },
      // 不显示刻度
      axisTick: {
        show: false,
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: '#fff',
      },
    },
  ],
  series: [
    {
      name: '条',
      type: 'bar',
      data: [70, 34, 60, 78, 69],
      yAxisIndex: 0,
      // 修改第一组柱子的圆角
      itemStyle: {
        borderRadius: 20,
        // 此时的color 可以修改柱子的颜色
        color: function (params) {
          // params 传进来的是柱子对象
          // dataIndex 是当前柱子的索引号
          return myColor[params.dataIndex];
        },
      },
      // 柱子之间的距离
      barCategoryGap: 50,
      //柱子的宽度
      barWidth: 10,
      // 显示柱子内的文字
      label: {
        show: true,
        position: 'inside',
        // {c} 会自动的解析为 数据  data里面的数据
        formatter: '{c}%',
      },
    },
    {
      name: '框',
      type: 'bar',
      barCategoryGap: 50,
      barWidth: 15,
      yAxisIndex: 1,
      data: [100, 100, 100, 100, 100],
      itemStyle: {
        color: 'none',
        borderColor: '#00c1de',
        borderWidth: 3,
        borderRadius: 15,
      },
    },
  ],
};

// 折线图
export const options2 = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    top: '0%',
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    },
  },
  grid: {
    left: '10',
    top: '30',
    right: '10',
    bottom: '10',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '26',
        '28',
        '29',
        '30',
      ],
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 10,
        // interval: 0,
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)',
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 12,
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
    },
  ],
  series: [
    {
      name: '播放量',
      type: 'line',
      smooth: true,
      // 单独修改当前线条的样式
      lineStyle: {
        color: '#0184d5',
        width: 2,
      },
      // 填充区域
      areaStyle: {
        color: {
          // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(1, 132, 213, 0.4)', // 0% 处的颜色
            },
            {
              offset: 0.8,
              color: 'rgba(1, 132, 213, 0.1)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        shadowColor: 'rgba(0, 0, 0, 0.1)',
      },
      emphasis: {
        focus: 'series',
      },
      // 设置拐点
      symbol: 'circle',
      // 拐点大小
      symbolSize: 8,
      // 设置拐点颜色以及边框
      itemStyle: {
        color: '#0184d5',
        borderColor: 'rgba(221, 220, 107, .1)',
        borderWidth: 10,
      },
      // 开始不显示拐点， 鼠标经过显示
      showSymbol: false,
      data: [
        30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60,
        20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40,
      ],
    },
    {
      name: '转发量',
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#00d887',
        width: 2,
      },
      areaStyle: {
        color: {
          // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0, 216, 135, 0.4)', // 0% 处的颜色
            },
            {
              offset: 0.8,
              color: 'rgba(0, 216, 135, 0.1)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        shadowColor: 'rgba(0, 0, 0, 0.1)',
      },
      // 设置拐点 小圆点
      symbol: 'circle',
      // 拐点大小
      symbolSize: 5,
      // 设置拐点颜色以及边框
      itemStyle: {
        color: '#00d887',
        borderColor: 'rgba(221, 220, 107, .1)',
        borderWidth: 12,
      },
      // 开始不显示拐点， 鼠标经过显示
      showSymbol: false,
      emphasis: {
        focus: 'series',
      },
      data: [
        130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130,
        20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20,
      ],
    },
  ],
};

// 南丁格尔玫瑰图
export const options3 = {
  color: [
    '#006cff',
    '#60cda0',
    '#ed8884',
    '#ff9f7f',
    '#0096ff',
    '#9fe6b8',
    '#32c5e9',
  ],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    bottom: '0%',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    },
  },
  series: [
    {
      name: '地区分布',
      type: 'pie',
      radius: ['10%', '70%'],
      center: ['50%', '36%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5,
      },
      // 图形的文字标签
      label: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 10,
      },
      labelLine: {
        length: 6,
        length2: 8,
      },
      zlevel: 9,
      z: 9,
      data: [
        { value: 26, name: '北京' },
        { value: 24, name: '山东' },
        { value: 25, name: '河北' },
        { value: 20, name: '江苏' },
        { value: 25, name: '浙江' },
        { value: 30, name: '四川' },
        { value: 42, name: '湖北' },
      ],
    },
  ],
};
