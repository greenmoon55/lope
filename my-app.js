// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

$$(document).on('pageInit', '.page[data-page="custom"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  window.onload = reloadData();
  $$('.sortable').on('open', function() {
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
    var html="<div class='info-between' style='padding-left:40px;font-size:small'>耗时：30min ￥30RMB 折扣xxRMB</div>";
    var lis = $$(this).find('li');
    for (var i = 0; i < lis.length; i++) {
      $$(html).insertAfter(lis[i]);
    }
  });
})
