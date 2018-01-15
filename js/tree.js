$(function () {

    var json =
        [{
            "name": "中科慈航",
            "code":"ZKCH",
            "icon": "icon-th",
            "child": [
                {
                    "name": "广州中科慈航",
                    "icon": "icon-minus-sign",
                    "code":"GZZKCH",
                    "parentCode": "ZKCH",
                    "child": [
                        {
                            "name": "广州中科慈航天河区分行",
                            "code":"GZZKCHTQFH",
                            "icon": "",
                            "parentCode": "GZZKCH",
                            "child": []
                        }
                    ]
                },
                {
                    "name": "北京中科慈航",
                    "icon": "",
                    "code":"BJZKCH",
                    "parentCode": "ZKCH",
                    "child": [
                        {
                            "name": "北京中科慈航中城区分行",
                            "code":"BJZKCHZCFH",
                            "icon": "",
                            "parentCode": "BJZKCH",
                            "child": []
                        }
                    ]
                }
            ]
        }, {
            "name": "中科科技",
            "code":"ZKKJ",
            "icon": "icon-th",
            "child": [
                {
                    "name": "广州中科科技",
                    "code":"GZZKKJ",
                    "icon": "icon-minus-sign",
                    "parentCode": "ZKKJ",
                    "child": [
                        {
                            "name": "广州天河中科科技",
                            "code":"GZTHZKKJ",
                            "icon": "",
                            "parentCode": "GZZKKJ",
                            "child": []
                        }
                    ]
                }
            ]
        }];

        var tree_ = [{
            "name":"118256.01",
            "date": "2017-01-09",
            "level": 1,
            "price": 118256.01,
            "icon": "icon-chevron-sign-down",
            "child": [
                {
                    "name":"118256.02",
                    "date": "2017-01-09",
                    "level": 1,
                    "parentCode": "118256.01",
                    "icon": "icon-chevron-sign-down",
                    "price": 118256.02,
                    "child": [
                        {
                            "name":"118256.04",
                            "date": "2017-01-09",
                            "level": 1,
                            "parentCode": "118256.02",
                            "icon": "icon-minus-sign",
                            "price": 118256.04,
                            "child":[],
                        },
                        {
                            "name":"118256.04",
                            "date": "2017-01-09",
                            "level": 1,
                            "parentCode": "118256.02",
                            "icon": "icon-minus-sign",
                            "price": 118256.04,
                            "child":[],
                        }
                    ]
                },
                {
                    "name":"118256.03",
                    "date": "2017-01-09",
                    "level": 1,
                    "parentCode": "118256.01",
                    "price": 118256.02,
                    "icon": "icon-chevron-sign-down",
                    "child":[
                        {
                            "name":"118256.05",
                            "date": "2017-01-09",
                            "level": 1,
                            "parentCode": "118256.03",
                            "price": 118256.05,
                            "child":[],
                        }
                    ],
                }
            ]
        }];

    function tree(data) {
        for (var i = 0; i < data.length; i++) {
            var data2 = data[i];
            if (data[i].icon == "icon-chevron-sign-down") {
                // $("#rootUL").append("<li data-name='" + data[i].name + "'><span><i class='" + data[i].icon + "'></i> " + data[i].price + "</span></li>");
                $("#rootUL").append(
                "<li data-name=" +
                    data[i].name +
                    '><span class="bg_color"><i class=' +
                    data[i].icon +
                    "></i>" +
                    data[i].price +
                    '</span><span><span class="v_img"></span><span class="level">' +
                    data[i].level +
                    "</span></span><span>" +
                    data[i].date +
                    "</span></li>"
                );
            } else {
                var children = $("li[data-name='" + data[i].parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + data[i].parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + data[i].parentCode + "'] > ul").append(
                "<li data-name=" +
                    data[i].name +
                    '><span class="bg_color"><i class=' +
                    data[i].icon +
                    "></i>" +
                    data[i].price +
                    '</span><span><span class="v_img"></span><span class="level">' +
                    data[i].level +
                    "</span></span><span>" +
                    data[i].date +
                    "</span></li>"
                );
            }
            for (var j = 0; j < data[i].child.length; j++) {
                var child = data[i].child[j];
                var children = $("li[data-name='" + child.parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + child.parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + child.parentCode + "'] > ul").append(
                "<li data-name=" +
                    child.name +
                    '><span class="bg_color"><i class=' +
                    child.icon +
                    "></i>" +
                    child.price +
                    '</span><span><span class="v_img"></span><span class="level">' +
                    child.level +
                    "</span></span><span>" +
                    child.date +
                    "</span></li>"
                );
                var child2 = data[i].child[j].child;
                tree(child2)
            }
            tree(data[i]);
        }

    }

    tree(tree_)


});