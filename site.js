(function($){
  $('html').addClass('js').removeClass('no-js');
  $('#nav').before('<a id="js-nav" class="border-menu" href="#nav"></a>');
  $('#js-nav').on('click', function(e) {
    e.preventDefault();
    $('#nav ul').toggleClass('nav-is-visible');
    $('#nav').toggleClass('nav-is-visible');
    $('#header').toggleClass('nav-is-visible');
  });
  $("#slideshow > figure:gt(0)").hide();
  setInterval(function() {
    $('#slideshow > figure:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 3000);
  $('#pizza-customization-page h3 a').on('click', function(e) {
    e.preventDefault();
    $('#pizza-customization-page h3 a').removeClass('selected');
    $('.options-content').removeClass('selected');
    if ($(this).attr('href') === "#sauce-cheese-crust") { //disply chesse,sauce,etc
        $('#sauce-cheese-crust h3 a').addClass('selected');
        $('#pizza-options').addClass('selected');
        console.log(this);
    } else if ($(this).attr('href') === "#toppings-content") { //display toppings
        $('#toppings-section h3 a').addClass('selected');
        $('#toppings-content').addClass('selected');
      }
  });

  $('li').on('click', function(e) {
    e.preventDefault();
    console.log($(this));
    if ($(this).attr('id') === 'veggie-toppings') {   //Veggie header
      $('#veggie-toppings a[href="#veggies"]').addClass('selected');
      $('#meat-toppings a[href="#meats"]').removeClass('selected');
      $('#meat-toppings').removeClass('selected');
      $('#veggie-toppings').addClass('selected');
    } else if ($(this).attr('id') === 'meat-toppings') { //meat topping header
        $('#meat-toppings a[href="#meats"]').addClass('selected');
        $('#veggie-toppings a[href="#veggies"]').removeClass('selected');
        $('#veggie-toppings').removeClass('selected');
        $('#meat-toppings').addClass('selected');
    } else if ($(this).attr('class') === 'meat-item') { //meat item
        $(this).children('h5').children('a').toggleClass('selected');
        $(this).find('.topping-amount').toggleClass('selected');
        if($('ol.topping-amount.selected li').has('li.selected')){
          $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }
    } else if ($(this).attr('class') === 'veggie-item') { //veggie item
        $(this).children('h5').children('a').toggleClass('selected');
        $(this).find('.topping-amount').toggleClass('selected');
    } else if (($(this).is('ol.topping-amount.selected li'))) { // topping amount
        $(this).siblings().removeClass('selected');
        $(this).toggleClass('selected');
  })(jQuery);
