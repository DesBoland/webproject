$(window).load(function(){
var images=new Array('Images/Background1.jpg','Images/Background2.jpg','Images/Background3.jpg');
var nextimage=0;

doSlideshow();
lastModified();
function doSlideshow()
{
    if($('.slideshowimage').length!=0)
    {
        $('.slideshowimage').fadeOut(500,function(){slideshowFadeIn();$(this).remove()});
    }
    else
    {
        slideshowFadeIn();
    }
}
function slideshowFadeIn()
{
    $('.slideshow').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(500,function(){setTimeout(doSlideshow,10000);}));
    if(nextimage>=images.length)
        nextimage=0;
}


function lastModified() {
    var x = document.lastModified;
    document.getElementById("update").innerHTML = x;
}
});//]]>  