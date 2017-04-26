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

 $("#proj-img-1").hover(function() {
   $("#proj-img-1").addClass('show-description');
   $("#proj-img-1").mouseout(function() {
     $("#proj-img-1").removeClass('show-description');
   });
 });
 $("#proj-img-2").hover(function() {
   $("#proj-img-2").addClass('show-description');
   $("#proj-img-2").mouseout(function() {
     $("#proj-img-2").removeClass('show-description');
   });
 });
 $("#proj-img-3").hover(function() {
   $("#proj-img-3").addClass('show-description');
   $("#proj-img-3").mouseout(function() {
     $("#proj-img-3").removeClass('show-description');
   });
 });
});
