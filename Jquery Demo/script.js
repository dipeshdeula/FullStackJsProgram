$(document).ready(function() {
    // Selectors
    $(".selector-example").css("color", "blue");
    $("#selector-example").css("font-weight", "bold");

    // Event Methods
    $("#clickButton").click(function() {
        alert("Button clicked!");
    });

    $("#hoverDiv").hover(function() {
        $(this).css("background-color", "yellow");
    }, function() {
        $(this).css("background-color", "lightgray");
    });

    $("#dblclickButton").dblclick(function() {
        alert("Button double-clicked!");
    });

    $("#keypressInput").keypress(function(event) {
        alert("Key pressed: " + event.key);
    });

    $("#keydownInput").keydown(function(event) {
        alert("Key down: " + event.key);
    });

    $("#keyupInput").keyup(function(event) {
        alert("Key up: " + event.key);
    });

    $("#changeSelect").change(function() {
        alert("Selected option: " + $(this).val());
    });


    // Effects
    $("#hideShowButton").click(function() {
        $("#hideShowDiv").toggle();
    });

    $("#fadeButton").click(function() {
        $("#fadeDiv").fadeToggle();
    });

    $("#slideButton").click(function() {
        $("#slideDiv").slideToggle();
    });

    $("#animateButton").click(function() {
        $("#animateDiv").animate({
            left: '250px',
            opacity: '0.5'
        });
    });

    // Get & Set Content and Attributes
    $("#getContentButton").click(function() {
        alert($("#contentExample").text());
    });

    $("#setContentButton").click(function() {
        $("#contentExample").text("New Content!");
    });

    $("#getAttrButton").click(function() {
        alert($("#imageExample").attr("src"));
    });

    $("#setAttrButton").click(function() {
        $("#imageExample").attr("src", "https://via.placeholder.com/200");
    });

    // Add & Remove Elements
    $("#addElementButton").click(function() {
        $("#myList").append("<li>New Item</li>");
    });

    $("#removeElementButton").click(function() {
        $("#myList li:last").remove();
    });

    // Get & Set CSS Classes
    $("#addClassButton").click(function() {
        $("#classExample").addClass("active");
    });

    $("#removeClassButton").click(function() {
        $("#classExample").removeClass("active");
    });

    $("#toggleClassButton").click(function() {
        $("#classExample").toggleClass("active");
    });

    // css() Method
    $("#getCssButton").click(function() {
        alert($("#cssExample").css("background-color"));
    });

    $("#setCssButton").click(function() {
        $("#cssExample").css("background-color", "purple");
    });

    // Dimension Methods
    $("#getDimensionsButton").click(function() {
        alert("Width: " + $("#dimensionExample").width() + ", Height: " + $("#dimensionExample").height());
    });

    $("#setDimensionsButton").click(function() {
        $("#dimensionExample").width(300).height(100);
    });
});
