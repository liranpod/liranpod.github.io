function toggleInfoDS() {
    var aiElement = document.getElementById("AI");
    var mlElement = document.getElementById("ML");
    var saElement = document.getElementById("SA");
  
    // Toggle the display property of the elements
    if (aiElement.style.display === "none") {
      aiElement.style.display = "block";
      mlElement.style.display = "block";
      saElement.style.display = "block";
    } else {
      aiElement.style.display = "none";
      mlElement.style.display = "none";
      saElement.style.display = "none";
    }
  }


function toggleInfoDV() {
    var tabElement = document.getElementById("TAB");
    var pbiElement = document.getElementById("PBI");
  
    // Toggle the display property of the elements
    if (tabElement.style.display === "none") {
        tabElement.style.display = "block";
        pbiElement.style.display = "block";
    } else {
        tabElement.style.display = "none";
        pbiElement.style.display = "none";
    }
}


var plus2InProgress = false;

function toggleLanguages() {
    if (plus2InProgress) {
        return; // Return if the operation is in progress
    }

    plus2InProgress = true; // Mark operation as in progress

    var images = [
        document.getElementById("java"),
        document.getElementById("matlab"),
        document.getElementById("sql"),
        document.getElementById("rStudio"),
        document.getElementById("python"),
        document.getElementById("html"),
        document.getElementById("css"),
        document.getElementById("javaScript"),
        document.getElementById("cpp")
    ];

    // Define the time interval between image appearances (in milliseconds)
    var interval = 570;

    // Check if the images are currently visible or hidden
    var areImagesVisible = images[8].style.display === "block";

    // Disable the plus2 button while the images are being displayed or hidden
    var plus2Button = document.getElementById("plus2");
    plus2Button.disabled = true;

    // If images are currently visible, hide them in reverse order
    if (areImagesVisible) {
        for (var i = images.length - 1; i >= 0; i--) {
            (function(index) {
                setTimeout(function() {
                    images[index].style.display = "none";

                    // If all images are hidden, enable the plus2 button
                    if (index === 0) {
                        plus2Button.disabled = false;
                        plus2InProgress = false; // Mark operation as complete
                    }
                }, interval * (images.length - index));
            })(i);
        }
    } else { // If images are currently hidden, show them in order
        for (var i = 0; i < images.length; i++) {
            (function(index) {
                setTimeout(function() {
                    images[index].style.display = "block";
                    scrollToAnchor("scrollDestination");

                    // If all images are displayed, enable the plus2 button
                    if (index === images.length - 1) {
                        plus2Button.disabled = false;
                        plus2InProgress = false; // Mark operation as complete
                    }
                }, interval * (index + 1));
            })(i);
        }
    }
}





function scrollToAnchor(anchorId) {
var anchorElement = document.getElementById(anchorId);

if (anchorElement) {
    anchorElement.scrollIntoView({
    behavior: 'smooth'
    });
}
}
  

