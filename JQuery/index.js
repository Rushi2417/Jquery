$("h1").addClass("big-title margin-50");

$("h1").removeClass("margin-50");

$("h1").hasClass("big-title");


$("h1").text("bye");


$("h1").html("<em>hey</em>")

$("a").attr("href", "https://yahoo.com");


$("h1").click(function(){
    $("h1").css("color", "purple");
});

$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");


$("button").on("click", function(){
    $("h1").toggle();
});