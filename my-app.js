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
    } else if (page.name === 'custom') {
      $$('.sortable').on('open', function(event) {
        var source = event.target || event.srcElement;
        if ($$(source).hasClass('swipeout')) {
          return false;
        }
        $$(".info-between").remove();
      });
      $$('.sortable').on('close', function(event) {
        var source = event.target || event.srcElement;
        if ($$(source).hasClass('swipeout')) {
          return false;
        }
        $$(".info-between").remove();
        var html="<div class='info-between' style='padding-left:40px;font-size:small'>￥30RMB 折扣价xxRMB 耗时30min 点击查看路线</div>";
        var lis = $$(this).find('li');
        for (var i = 0; i < lis.length; i++) {
          $$(html).insertAfter(lis[i]);
        }
      });
    }
});
