
$('.banner-slider').slick({
    dots: true,
    autoplay:true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });

  $('.test-slider').slick({
    dots: true,
    autoplay:true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    
  });

  $('.class-slider').slick({
    dots: false,
    autoplay:false,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class=" far fa-arrow-alt-circle-left prev"></i>',
    nextArrow:'<i class="far fa-arrow-alt-circle-right next"></i>',
    
  });



  $(document).ready(function(){
    $('.venobox').venobox(); 
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});



$(document).ready(function(){
        
  $("#colorful").colorfulTab();    
  
  $("#colorful-elliptic").colorfulTab({
      theme: "elliptic"
  }); 
 
 $("#colorful-flatline").colorfulTab({
      theme: "flatline"
  });    
  
  $("#colorful-background-image").colorfulTab({
      theme: "flatline",
      backgroundImage: "true",
      overlayColor: "#002F68",
      overlayOpacity: "0.8"
  });   

});



          