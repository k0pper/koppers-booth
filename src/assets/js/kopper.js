$(document).ready(function () {

  var el = $('#brand');
  var kopper = 'kopper';


  var i = 0;
  (function myLoop () {
    setTimeout(function () {
      el.append(kopper[i]);
      i++;
      if (i < 6) {
        myLoop();
      }
    }, 200)
  })();


});
