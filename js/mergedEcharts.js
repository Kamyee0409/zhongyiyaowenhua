function drawEchart11() {
    var chartDom = document.getElementById('diyibankuai4');
    var myChart = echarts.init(chartDom);
    var data = [
      { name: '期刊文献', value: 1088876, description: '现代期刊中关于中医药的研究文章。' },
      { name: '古代文献', value: 143097, description: '古代文献如《性命要旨》、《医医小草》等。' },
      { name: '民国期刊', value: 67292, description: '民国时期出版的中医药期刊文章，如《从抗日救国说到国医药界》、《中西医药汇通之步骤》等。' },
      { name: '现代图书', value: 40735, description: '现代出版的中医药书籍和资料，如《中华养生经典》、《中医各家学说》。' },
      { name: '外文文献', value: 54905, description: '外文记载的中医药相关内容。' },
      { name: '海外古籍', value: 19994, description: '主要是来自海外的中医药古籍文献，如《仲景全书(五种本)》、《六礼斋医书》等。' },
      { name: '报纸文献', value: 10085, description: '与中医药相关的报纸文章及报道。' },
      { name: '专利文献', value: 6057, description: '中医药相关的专利申请及文献。' }
    ];
    
    data.sort((a, b) => b.value - a.value);
	var option;

    option = {
      title: {
        text: '中医药文献分类统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params) {
          const item = data.find(d => d.name === params[0].name);
          return `${item.name}：${item.value}篇<br />${item.description}`;
        }
      },
      xAxis: {
        type: 'category',
        data: data.map(item => item.name),
        axisLabel: {
          interval: 0,
          rotate: 30
        }
      },
      yAxis: {
        type: 'value',
        name: '文献数量（篇）'
      },
      series: [
        {
          name: '文献数量',
          type: 'bar',
          barWidth: '50%',
          data: data.map(item => item.value),
          label: {
            show: true,
            position: 'top'
          },
          itemStyle: {
            color: function (params) {
              let colors = ['#5470C6', '#91CC75', '#EE6666', '#FAC858', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4'];
              return colors[params.dataIndex % colors.length];
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
}

function drawEchart12() {
    var chartDom = document.getElementById('diyibankuai5');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      color: [
        '#A05B3B', // 木棕色
        '#EC8150', // 杏仁橙
        '#EF8D57', // 柔暖橙
        '#F2996C', // 浅橘色
        '#F4AF84', // 浅桃色
        '#F7C59A', // 浅暖棕
        '#FAD4AF', // 柔杏色
        '#FCE3C7', // 浅橙色
        '#FDF4E3' // 米白色
      ],
      tooltip: {
        trigger: 'item', // 鼠标触发项
        formatter: function (params) {
          return `${params.name}: ${params.value}`; // 显示板块名称和数值
        }
      },
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: '药材数量',
              value: 20545,
              children: [
                { name: '藏族', value: 1114 },
                { name: '满族', value: 29 },
                { name: '维吾尔族', value: 997 },
                { name: '朝鲜族', value: 3096 },
                { name: '蒙古族', value: 1154 },
                { name: '彝族', value: 5833 },
                { name: '朝族', value: 623 },
                { name: '回族', value: 29 },
                { name: '畲族', value: 257 },
                { name: '土家族', value: 1551 },
                { name: '壮族', value: 2115 },
                { name: '苗族', value: 3747 }
              ]
            },
            {
              name: '期刊文献数量',
              value: 8764,
              children: [
                { name: '藏族', value: 1501 },
                { name: '满族', value: 54 },
                { name: '维吾尔族', value: 165 },
                { name: '朝鲜族', value: 207 },
                { name: '蒙古族', value: 1874 },
                { name: '彝族', value: 347 },
                { name: '朝族', value: 167 },
                { name: '回族', value: 119 },
                { name: '畲族', value: 210 },
                { name: '土家族', value: 241 },
                { name: '壮族', value: 942 },
                { name: '苗族', value: 2937 }
              ]
            },
            {
              name: '方剂数量',
              value: 156,
              children: [
                { name: '藏族', value: 43 },
                { name: '蒙古族', value: 57 },
                { name: '维吾尔族', value: 38 },
                { name: '彝族', value: 18 }
              ]
            },
            {
              name: '成药数量',
              value: 368,
              children: [
                { name: '藏族', value: 199 },
                { name: '蒙古族', value: 8 },
                { name: '维吾尔族', value: 8 },
                { name: '彝族', value: 29 },
                { name: '朝鲜族', value: 124 }
              ]
            },
            {
              name: '术语数量',
              value: 460,
              children: [
                { name: '壮族', value: 99 },
                { name: '侗族', value: 130 },
                { name: '土家族', value: 231 }
              ]
            }
          ],
          width: '100%', // 增加宽度以占满更多空间
          height: '100%', // 保持合理高度比例
          label: {
            show: true,
            position: 'inside',
            fontSize: 12 // 字体大小适中
          },
          upperLabel: {
            show: true,
            position: 'inside',
            fontSize: 13 // 字体大小适中
          }
        }
      ]
    };

    option && myChart.setOption(option);
}


function drawEchart111() {
    var chartDom = document.getElementById('feiyizhiguang1');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: '非遗文化代表性项目中传统医药的占比',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        show: false // 添加这一行，设置图例不显示
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 11.7, name: '传统医药非遗项目 11.7%', itemStyle: { color: 'rgb(154, 208, 164)' } },
            { value: 88.3, name: '其他非遗项目 88.3%', itemStyle: { color: 'rgb(155, 0, 0 )' } }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
}

function drawEchart222() {
    var chartDom = document.getElementById('feiyizhiguang2');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category',
        data: ['2006', '2008', '2011', '2014', '2021'],
        name: '年份', // 添加 x 轴名称
        axisLabel: {
          fontSize: 12 // 设置 x 轴标签字体大小
        }
      },
      yAxis: {
        type: 'value',
        name: '传统医药非遗项目数量', // 添加 y 轴名称
        axisLabel: {
          fontSize: 12 // 设置 y 轴标签字体大小
        },
        axisTick: {
          show: true // 显示 y 轴刻度
        }
      },
      series: [
        {
          data: [13, 40, 36, 48, 45],
          type: 'line',
          smooth: true,
          itemStyle: {
            color: 'green' // 曲线颜色改为绿色
          },
          label: {
            show: true, // 显示节点上方的标签
            position: 'top', // 标签显示在节点上方
            formatter: '{c}' // 显示纵轴数值
          }
        }
      ]
    };

    option && myChart.setOption(option);
}

function drawEchart1() {
    var chartDom = document.getElementById('xiandaiyangsheng1');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        legend: {
            orient: 'vertical',
            top: '50%',
            right: '5%',
            transform: 'translateY(-50%)',
            data: ['养生应用', '养生方法']
        },
        series: [
            {
                name: '养生方法与应用',
                type: 'pie',
                radius: ['40%', '55%'],
                label: {
                    show: true,
                    position: 'inner',
                    formatter: '{b}'
                },
                data: [
                    { value: 20 + 426 + 9 + 400 + 811, name: '养生应用' },
                    {
                        value: 12752 + 10551 + 1296 + 409 + 1971 + 11076 + 173 + 37 + 35 + 171,
                        name: '养生方法'
                    }
                ]
            },
            {
                name: '具体种类',
                type: 'pie',
                radius: ['60%', '80%'],
                label: {
                    show: true,
                    formatter: '{b}: {c}'
                },
                data: [
                    { value: 20, name: '经脉养生' },
                    { value: 426, name: '节气养生' },
                    { value: 9, name: '体质养生' },
                    { value: 400, name: '穴位养生' },
                    { value: 811, name: '证候养生' },
                    { value: 12752, name: '药膳养生' },
                    { value: 10551, name: '药物养生' },
                    { value: 1296, name: '针灸养生' },
                    { value: 409, name: '按摩养生' },
                    { value: 1971, name: '气功养生' },
                    { value: 11076, name: '食物养生' },
                    { value: 173, name: '起居养生' },
                    { value: 37, name: '情志养生' },
                    { value: 35, name: '娱乐养生' },
                    { value: 171, name: '运动养生' }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}

function drawEchart2() {
    var chartDom = document.getElementById('xiandaiyangsheng2');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                // 获取百分比和名称
                var percent = params.percent.toFixed(2) + '%'; // 将百分比格式化为两位小数
                return `${params.seriesName}<br />${params.name}: ${percent}`; // 返回系列名称、类别名称和百分比
            }
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Z世代消费类别', // 设置系列名称
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center',
                    fontSize: 16
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 30,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 34.3, name: '旅游' },
                    { value: 33.2, name: '数码产品' },
                    { value: 32.5, name: '保健养生' }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}

function drawEchart3() {
    var chartDom = document.getElementById('xiandaiyangsheng3');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let percentage = (params.value / 100).toFixed(2) * 100 + '%';
                return `${params.name}: ${percentage}`;
            }
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '保养方式',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 360,
                data: [
                    { value: 30.6, name: '饮食调理' },
                    { value: 35.7, name: '运动健身' },
                    { value: 33.7, name: '保健品/中医药调理' }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}



// 调用函数
window.onload = function() {
	drawEchart11();
	drawEchart12();
	drawEchart111();
	drawEchart222();
	drawEchart1();
    drawEchart2();
	drawEchart3();
	
};