$(window).scroll(function() {
if ($(this).scrollTop()<300)
{
$('.back-to-top').hide(100);
}
else
{
$('.back-to-top').show(100);
}
});
