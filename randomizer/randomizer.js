// Randomizer ver.1.0.2 data:2016-04-22
$(function(){
  function random(array, num) {
    var a = array;
    var t = [];
    var r = [];
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
      var i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    return r;
  }
  var arrayEC = [2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var arrayTD = [36, 37, 38, 39, 40, 42, 43, 44, 46, 47, 61, 62];
  var arrayOT = [16, 18, 20, 21, 23, 26, 28, 30, 31, 32, 33, 34, 48, 49, 51, 53, 54, 55, 56, 57, 58, 59, 60, 64, 65];
  // var arrayHB = [1, 4, 25, 35, 41, 45, 50, 63];
  // var exception =[3, 17, 19, 24, 27, 29];
  var $results = $('#result');
  $('#randomize').on('click', function() {
    if ( $('#result li').length ) $('#result li').remove();
    var memberEC = random(arrayEC, 1)
      , memberTD = random(arrayTD, 1)
      , memberOT = random(arrayOT, 2);
    $results.append('<li>'+ memberEC +'</li>').append('<li>'+ memberTD +'</li>');
    for (var i = memberOT.length - 1; i >= 0; i--) {
      $results.append('<li>' + memberOT[i] + '</li>');
    }
  });
})