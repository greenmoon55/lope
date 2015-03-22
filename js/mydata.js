var myplacedata = {
	"imgsrc1":"img/hangzhou.jpg",
	"imgsrc2":"img/suzhou.png",
	"imgsrc3":"img/jiudian.png",
	"imgsrc4":"img/shenhu.png",
	"searchdata":[
		"杭州",
		"苏州汤包馆",
		"杭州大酒店",
		"神户"
	],
	"discription1":"杭州是著名的旅游城市，以风景秀丽著称。与苏州并称“苏杭”，素有“上有天堂下有苏杭”的美誉。",
	"discription2":"苏州是中国首批24座国家历史文化名城之一，是吴文化的发祥地。苏州城始建于公元前514年，有2500多年历史。[1] 苏州园林是中国私家园林的代表。",
	"discription3":"日本首都，位于本州岛关东平原南端。古时的东京是一个荒凉的渔村，最早的名称叫千代田。",
	"discription4":"日本国际贸易港口城市，位于日本四大岛中最大的一个岛—本州岛的西南部，西枕六甲山，面向大阪湾。",
	"icon":"img/flight.png"
}

 function getPlaceData(key) {
    //console.log(myplacedata["imgsrc1"]);
    return myplacedata[key];
}

var itemsArr = new Array();
var count = 0;
itemsArr.push({
	"imsrc":myplacedata["imgsrc1"],
	"destination":myplacedata["searchdata"][0],
	"description":myplacedata["description1"]
});

var itemHtml = "<div><li class='swipeout' style=''>"+
                "<div class='swipeout-content item-content'>"+
                  "<div class='item-media'><img src='"+itemsArr[count]["imsrc"]+"'></div>"+
                  "<div class='item-inner'>"+itemsArr[count]["destination"]+"</div>"+
                "</div>"+
                "<div class='swipeout-actions-right '>"+
                  "<a href='#' data-panel='right' class='action1 open-panel'>详情</a>"+
                  "<a href='#' class='swipeout-delete'>删除</a>"+
                "</div>"+
              "</li>"+
              "<p style='padding-left:40px;font-size:small'>"+itemsArr[count]["description"]+"</p>"+
            "</div>";

function reloadData() {
	console.log(itemsArr.length - 1);
	for (; count <= itemsArr.length - 1; count++) {
		$('#itemListPanel').children().add(itemHtml);
		console.log($('#itemListPanel').children());
	};
	count=0;
}

function reloadInfo1 () {
	//'imgsrc1'"+ ", 'description1'
	// console.log(key1);
	// console.log(key2);
	document.getElementById("placeImg1").src = myplacedata['imgsrc1'];
            
    document.getElementById("placeDiscription").innerHTML = myplacedata['discription1'];
}

function reloadInfo2 () {
	//'imgsrc1'"+ ", 'description1'
	// console.log(key1);
	// console.log(key2);
	document.getElementById("placeImg1").src = myplacedata['imgsrc2'];
            
    document.getElementById("placeDiscription").innerHTML = myplacedata['discription2'];
}

function reloadInfo3 () {
	//'imgsrc1'"+ ", 'description1'
	// console.log(key1);
	// console.log(key2);
	document.getElementById("placeImg1").src = myplacedata['imgsrc3'];
            
    document.getElementById("placeDiscription").innerHTML = myplacedata['discription3'];
}

function reloadInfo4 () {
	//'imgsrc1'"+ ", 'description1'
	// console.log(key1);
	// console.log(key2);
	document.getElementById("placeImg1").src = myplacedata['imgsrc4'];
            
    document.getElementById("placeDiscription").innerHTML = myplacedata['discription4'];
}