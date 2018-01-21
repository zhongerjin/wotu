var polyline_option = {
    title: {
        text: '市场行情',
        left: "center",
        top: "10%"
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:["昨日","今日"]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
        right:"3%",
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['12/21/17','12/22/17','12/23/17','12/25/17','12/26/17','12/27/17','12/28/17']
    },
    yAxis: {
        type: 'value',
        axisLabel:{formatter:'{value} USD'},
        data: [0, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5],
    },
    series: [
        {
            name:'昨日',
            type:'line',
            stack: '总量',
            data:[0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.4]
        },
        {
            name:'今日',
            type:'line',
            stack: '总量',
            data:[0.3,0.3,0.3,0.3,0.5,0.5,0.5,0.4,0.4]
        }
    ]
};
var polyline_option_day = {
    title: {
        text: '市场行情',
        left: "center",
        top: "10%"
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:["昨日","今日"]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
        right:"3%",
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['12/21/17','12/22/17','12/23/17','12/25/17','12/26/17','12/27/17','12/28/17']
    },
    yAxis: {
        type: 'value',
        axisLabel:{formatter:'{value} USD'},
        data: [0, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5],
    },
    series: [
        {
            name:'昨日',
            type:'line',
            stack: '总量',
            data:[0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.4]
        },
        {
            name:'今日',
            type:'line',
            stack: '总量',
            data:[0.3,0.3,0.3,0.3,0.5,0.5,0.5,0.4,0.4]
        }
    ]
};
var polyline_option_week = {
    title: {
        text: '市场行情',
        left: "center",
        top: "10%"
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:["上周","本周"]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
        right:"3%",
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['11/6/17','11/13/17','11/20/17','11/27/17','12/4/17','12/11/17','12/18/17']
    },
    yAxis: {
        type: 'value',
        axisLabel:{formatter:'{value} USD'},
        data: [0, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5],
    },
    series: [
        {
            name:'上周',
            type:'line',
            stack: '总量',
            data:[0.3,0.1,0.2,0.3,0.3,0.2,0.3,0.3,0.4]
        },
        {
            name:'本周',
            type:'line',
            stack: '总量',
            data:[0.3,0.2,0.3,0.1,0.5,0.2,0.5,0.4,0.4]
        }
    ]
};
var polyline_option_month = {
    title: {
        text: '市场行情',
        left: "center",
        top: "10%"
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:["上月","本月"]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
        right:"3%",
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1/17','2/17','3/17','4/17','5/17','6/17','7/17']
    },
    yAxis: {
        type: 'value',
        axisLabel:{formatter:'{value} USD'},
        data: [0, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5],
    },
    series: [
        {
            name:'上月',
            type:'line',
            stack: '总量',
            data:[0.3,0.1,0.1,0.4,0.3,0.2,0.3,0.3,0.4]
        },
        {
            name:'本月',
            type:'line',
            stack: '总量',
            data:[0.2,0.2,0.3,0.1,0.3,0.2,0.5,0.4,0.4]
        }
    ]
};
var pillar_option = {
    title: {
        text: '成交总额（万）',
        left: "center",
        top: "10%"
    },
    color: ['#19d1c4'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data: ['12/21/17','12/22/17','12/23/17','12/25/17','12/26/17','12/27/17','12/28/17'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{formatter:'{value} 万'},
        }
    ],
    series : [
        {
            name:'金额',
            type:'bar',
            barWidth: '30%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};