

// Core functions
var card = $$(".collapsible");
var i;

for (i = 0; i < card.length; i++) {
    card[i].addEvent("click", function() {
        this.toggleClass("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.setStyle("display", "none");
        } else {

            $$(".content").setStyle("display", "none");
            content.setStyle("display", "block");
        }
    });
}