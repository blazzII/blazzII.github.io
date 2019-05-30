$.getJSON("scripts/templesWorked.json", function (data) {
    $.each(data.items, function (i, item) {
        $("<h2>").innerHTML(item.loc.m).appendTo("section");
        $("<img>").attr("src", item.img.m).appendTo("section");
    });
});