// 柱形图
export const options1 = {
  color: ['#2f89cf'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      /* 坐标轴指示器，坐标轴触发有效 默认为直线，可选为：'line' | 'shadow' */
      type: 'shadow',
    },
  },
  // 修改图表大小
  grid: {
    left: '0%',
    top: '10px',
    right: '0%',
    bottom: '4%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '旅游行业',
        '教育培训',
        '游戏行业',
        '医疗行业',
        '电商行业',
        '社交行业',
        '金融行业',
      ],
      axisTick: {
        alignWithLabel: true,
      },
      // 修改刻度标签相关样式
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '10',
        interval: 0,
        // rotate: 45,
      },
      //  x轴样式不显示
      axisLine: {
        show: false,
        // 如果想要设置单独的线条样式
        // lineStyle: {
        //    color: "rgba(255,255,255,.1)",
        //    width: 1,
        //    type: "solid"
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      // 修改刻度标签相关样式
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '12',
      },
      axisLine: {
        show: true,
        // 如果想要设置单独的线条样式
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid',
        },
      },
      // y 轴分隔线样式
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '35%',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      itemStyle: {
        // 修改柱子圆角
        borderRadius: [5, 5, 0, 0],
      },
    },
  ],
};
// 折线图
export const yearData = [
  {
    year: '2020', // 年份
    data: [
      // 两个数组是因为有两条线
      [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
      [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
    ],
  },
  {
    year: '2021', // 年份
    data: [
      // 两个数组是因为有两条线
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
  },
];
export const options2 = {
  // 通过这个color修改两条线的颜色
  color: ['#00f2f1', '#ed3f35'],
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    textStyle: {
      color: '#4c9bfd', // 图例文字颜色
    },
    right: '10%', // 距离右边10%
  },
  grid: {
    top: '20%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    show: true, // 显示边框
    borderColor: '#012f4a', // 边框颜色
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
    axisTick: {
      show: false, // 去除刻度线
    },
    axisLabel: {
      color: '#4c9bfd', // 文本颜色
    },
    axisLine: {
      show: false, // 去除轴线
    },
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false, // 去除刻度线
    },
    axisLabel: {
      color: '#4c9bfd', // 文本颜色
    },
    axisLine: {
      show: false, // 去除轴线
    },
    splitLine: {
      lineStyle: {
        color: '#012f4a', // 分割线颜色
      },
    },
  },
  series: [
    {
      name: '新增粉丝',
      type: 'line',
      smooth: true,
      data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
    },
    {
      name: '新增游客',
      type: 'line',
      smooth: true,
      data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    },
  ],
};
// 饼形图
export const options3 = {
  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    bottom: '0%',
    // 修改小图标的大小
    itemWidth: 10,
    itemHeight: 10,
    // 修改图例组件的文字为 12px
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    },
  },
  series: [
    {
      name: '年龄分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ['50%', '40%'],
      //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center',
      },
      // 连接文字的图形的线
      labelLine: {
        show: false,
      },
      zlevel: 9,
      z: 9,
      data: [
        { value: 1, name: '0-19岁' },
        { value: 4, name: '20-29岁' },
        { value: 2, name: '30-39岁' },
        { value: 2, name: '40-49岁' },
        { value: 1, name: '50岁以上' },
      ],
    },
  ],
};
