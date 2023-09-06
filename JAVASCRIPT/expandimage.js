function expandImage(img) {
    var expandedBackground = document.createElement("div");
    expandedBackground.className = "expanded-background";
    expandedBackground.onclick = closeExpandedImage;
    document.body.appendChild(expandedBackground);
  
    var expandedImg = document.createElement("img");
    expandedImg.src = img.src;
    expandedImg.className = "expanded-image";
    expandedImg.onclick = closeExpandedImage;
    document.body.appendChild(expandedImg);
  
    var closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = closeExpandedImage;
    document.body.appendChild(closeButton);
  
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        closeExpandedImage();
      }
    });
  }
  
  function closeExpandedImage() {
    var expandedBackground = document.querySelector(".expanded-background");
    var expandedImg = document.querySelector(".expanded-image");
    var closeButton = document.querySelector(".close-button");
  
    expandedBackground.parentNode.removeChild(expandedBackground);
    expandedImg.parentNode.removeChild(expandedImg);
    closeButton.parentNode.removeChild(closeButton);
  }
  