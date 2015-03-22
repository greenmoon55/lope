// seajs 的简单配置
seajs.config({
  base: "./sea-modules/",
  alias: {
    "ionejs": "phyxdown/ionejs/1.0.0/ionejs.js"
  }
})



// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    // Code for About page
    if (page.name === '路线编辑') {
        // 加载入口模块
		seajs.use("./canvasCtrl");
    }
});