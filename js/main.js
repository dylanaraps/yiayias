jQuery(document).ready(function(o){o('a[href^="#"]').on("click",function(l){var e=o(o(this).attr("href"));e.length&&(l.preventDefault(),o("html, body").animate({scrollTop:e.offset().top},1e3))})}),$(window).scroll(function(){var o=$(window).scrollTop();o>=10?$(".navbar-default").addClass("navbar-color-scroll"):$(".navbar-default").removeClass("navbar-color-scroll")}),jQuery(document).ready(function(o){window.sr=new scrollReveal({mobile:!1}),scrollReveal.init()});