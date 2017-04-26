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



  $("#container1").hover(function() {
    $("#container1").addClass('show-description');
    $("#container1").mouseout(function() {
      $("#container1").removeClass('show-description');
    });
  });

  $("#container2").hover(function() {
    $("#container2").addClass('show-description');
    $("#container2").mouseout(function() {
      $("#container2").removeClass('show-description');
    });
  });

  $("#container3").hover(function() {
    $("#container3").addClass('show-description');
    $("#container3").mouseout(function() {
      $("#container3").removeClass('show-description');
    });
  });
  $("#container4").hover(function() {
    $("#container4").addClass('show-description');
    $("#container4").mouseout(function() {
      $("#container4").removeClass('show-description');
    });
  });
  $("#container5").hover(function() {
    $("#container5").addClass('show-description');
    $("#container5").mouseout(function() {
      $("#container5").removeClass('show-description');
    });
  });
  $("#container6").hover(function() {
    $("#container6").addClass('show-description');
    $("#container6").mouseout(function() {
      $("#container6").removeClass('show-description');
    });
  });
  $("#container7").hover(function() {
    $("#container7").addClass('show-description');
    $("#container7").mouseout(function() {
      $("#container7").removeClass('show-description');
    });
  });
  $("#container8").hover(function() {
    $("#container8").addClass('show-description');
    $("#container8").mouseout(function() {
      $("#container8").removeClass('show-description');
    });
  });
  $("#container9").hover(function() {
    $("#container9").addClass('show-description');
    $("#container9").mouseout(function() {
      $("#container9").removeClass('show-description');
    });
  });


});
