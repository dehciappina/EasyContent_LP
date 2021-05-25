


    
document.onreadystatechange = function () {
  if (document.readyState == "interactive" || document.readyState == "complete") {

    document.querySelector('#loading_bg').style.opacity = 0;
    document.querySelector('#loading_bg').style.visibility = 'hidden';

    setTimeout(() => {
      document.querySelector('#loading_bg').style.display = 'none';
    }, 800);

    document.body.onscroll = function() {
      let windowPosition = window.pageYOffset;
        document.querySelector('.big_ilus').style.transform = "translateY(" + windowPosition / 10 + "px)";
      }
  }
}
