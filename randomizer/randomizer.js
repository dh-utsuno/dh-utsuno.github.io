// Randomizer ver.1.0.2 data:2016-04-13
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
  var arrayEC = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var arrayTD = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 61, 62];
  var arrayOT = [16, 18, 20, 21, 23, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 59, 60, 63, 64, 65];
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