function collapse(contentId){
        var content = document.getElementById(contentId);
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            content.style.display = "none";
          } else {
            content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";

            } 
}
