$(function(){
  $(".event .eve li:nth-child(1)").click(function(){
    $(".popup1").fadeIn();/*서서히나타남*/
  });
  $(".popup1 a").click(function(){
    $(".popup1").fadeOut();/*서서히사라짐 */
  });

  $(".event .eve li:nth-child(2)").click(function(){
    $(".popup2").fadeIn();/*서서히나타남*/
  });
  $(".popup2 a").click(function(){
    $(".popup2").fadeOut();/*서서히사라짐 */
  });

  $(".event .eve li:nth-child(3)").click(function(){
    $(".popup3").fadeIn();/*서서히나타남*/
  });
  $(".popup3 a").click(function(){
    $(".popup3").fadeOut();/*서서히사라짐 */
  });

  $(".event .eve li:nth-child(4)").click(function(){
    $(".popup4").fadeIn();/*서서히나타남*/
  });
  $(".popup4 a").click(function(){
    $(".popup4").fadeOut();/*서서히사라짐 */
  });

  $(".event .eve li:nth-child(5)").click(function(){
    $(".popup5").fadeIn();/*서서히나타남*/
  });
  $(".popup5 a").click(function(){
    $(".popup5").fadeOut();/*서서히사라짐 */
  });
});