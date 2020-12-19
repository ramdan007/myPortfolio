var dropdown1 = $('.dropdown1');
var dropdown2 = $('.dropdown2');
var dropdown3 = $('.dropdown3');
var dropdown4 = $('.dropdown4');
var dropdown5 = $('.dropdown5');

var item1 = $('.dropdown1 > .item');
var item2 = $('.dropdown2 > .item');
var item3 = $('.dropdown3 > .item');
var item4 = $('.dropdown4 > .item');
var item5 = $('.dropdown5 > .item');

item1.on('click', function() {
  item1.toggleClass('collapse');
  
  if (dropdown1.hasClass('dropped')) {
    dropdown1.toggleClass('dropped');
  } else {
    setTimeout(function() {
      dropdown1.toggleClass('dropped');
    }, 150);
  }
})

item2.on('click', function() {
  item2.toggleClass('collapse');
  
  if (dropdown2.hasClass('dropped')) {
    dropdown2.toggleClass('dropped');
  } else {
    setTimeout(function() {
      dropdown2.toggleClass('dropped');
    }, 150);
  }
})

item3.on('click', function() {
  item3.toggleClass('collapse');
  
  if (dropdown3.hasClass('dropped')) {
    dropdown3.toggleClass('dropped');
  } else {
    setTimeout(function() {
      dropdown3.toggleClass('dropped');
    }, 150);
  }
})

item4.on('click', function() {
  item4.toggleClass('collapse');
  
  if (dropdown4.hasClass('dropped')) {
    dropdown4.toggleClass('dropped');
  } else {
    setTimeout(function() {
      dropdown4.toggleClass('dropped');
    }, 150);
  }
})

item5.on('click', function() {
  item5.toggleClass('collapse');
  
  if (dropdown5.hasClass('dropped')) {
    dropdown5.toggleClass('dropped');
  } else {
    setTimeout(function() {
      dropdown5.toggleClass('dropped');
    }, 150);
  }
})