var buttons = document.getElementsByClassName("expand-button");
var currentActiveButton = null;
var currentActiveDescription = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // Get the icon element inside the clicked button
        var icon = this.querySelector("i");
        // If there is an active button and it's not the current one
        if (currentActiveButton && currentActiveButton !== this) {
            // Reset previous button and description
            currentActiveButton.style.backgroundColor = "white";
            currentActiveDescription.style.display = "none";
            // Reset the icon of the previous button
            var prevIcon = currentActiveButton.querySelector("i");
            prevIcon.classList.remove("fa-chevron-up");
            prevIcon.classList.add("fa-chevron-down");
        }

        var content = this.nextElementSibling;

        if (this === currentActiveButton) {
            // If clicking the same button, toggle the description and background color
            content.style.display = content.style.display === "block" ? "none" : "block";
            this.style.backgroundColor = content.style.display === "block" ? "#ebeaea" : "white";
            // Toggle the icon
            if (content.style.display === "block") {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");
            } else {
                icon.classList.remove("fa-chevron-up");
                icon.classList.add("fa-chevron-down");
            }

            currentActiveButton = content.style.display === "block" ? this : null;
            currentActiveDescription = content.style.display === "block" ? content : null;
        } else {
            // Set the new button and description as active
            this.style.backgroundColor = "#ebeaea";
            content.style.display = "block";
            // Change the icon to show an 'up' arrow when active
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");

            currentActiveButton = this;
            currentActiveDescription = content;
        }
    });
}