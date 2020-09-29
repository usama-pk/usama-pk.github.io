$(document).ready(function () {
    var allShown = false;
    $("#projects").load("/lists.txt #2014");
    
    $("button").click(function (e) {
        $(".active").removeClass("active");
        e.target.className = "active";
        $("#projects").load("/lists.txt #" + e.target.textContent.substr(0, 4));
    });


    $(".grid-cell").click(function (e) {
		var initialString = $(e.target).closest('.grid-cell').html()
		var re = /<img.*?>/
		var imgString = re.exec(initialString)[0]
        $("#spaceForIMG").html(initialString.replace(imgString, '') + imgString);
        $("#projectDescription").text(e.target.parentNode.name);
    });

    function updateSelected() {
        if(!allShown) {
            $(".ns").addClass("hidden");
        } else {
            $(".ns").removeClass("hidden");
        }
    }

    $("#selectedPapers").click(function (e) {
        if(allShown) {
            e.target.innerText = "Show all";
            allShown = false;
        } else {
            e.target.innerText = "Show selected";
            allShown = true;
        }
        updateSelected();
    });

    updateSelected();
});
