$(document).ready(function() {
  $("#img-logo").mouseenter(function() {
    $("#img-logo").fadeOut();
  });
  $("#img-logo-dark").mouseout(function() {
    $("#img-logo").fadeIn();
  });
  $("#topnav").mouseenter(function() {
    $("#img-logo").fadeIn();
  });
  $("#topnav").hover(function() {
    $("#img-logo").fadeIn();
  });

  function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0];
    return filename;
  }
  $(function(){
   var currentPageName = getPageName(window.location.pathname);
   $('#' + currentPageName).addClass('active');
 });

 function goToResume(){
 }

 $("button").click(function() {
   //window.location.href = 'https://drive.google.com/file/d/0B6zgBSF6SQM3cm5OOFJqY2lfZ0E/view';
   $(location).attr('href', 'https://drive.google.com/file/d/0B6zgBSF6SQM3cm5OOFJqY2lfZ0E/view');
 });


});
