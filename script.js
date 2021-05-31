
const changeword01 = document.querySelector('#changing_words span:nth-child(1)');
const changeword02 = document.querySelector('#changing_words span:nth-child(2)');
const changeword03 = document.querySelector('#changing_words span:nth-child(3)');
const changeword04 = document.querySelector('#changing_words span:nth-child(4)');
const changeword05 = document.querySelector('#changing_words span:nth-child(5)');
const changeword06 = document.querySelector('#changing_words span:nth-child(6)');
const changeword07 = document.querySelector('#changing_words span:nth-child(7)');
const changeword08 = document.querySelector('#changing_words span:nth-child(8)');
const changeword09 = document.querySelector('#changing_words span:nth-child(9)');
    
document.onreadystatechange = function () {
  if (document.readyState == "interactive" || document.readyState == "complete") {

    document.querySelector('#loading_bg').style.opacity = 0;
    document.querySelector('#loading_bg').style.visibility = 'hidden';

    setTimeout(() => {
      document.querySelector('#loading_bg').style.display = 'none';
    }, 800);

    // document.body.onscroll = function() {
    //   }

    let titleanimation = false;
    let windowPosition;

    document.body.onscroll = function() {

          windowPosition = window.pageYOffset;
          document.querySelector('.big_ilus').style.transform = "translateY(" + windowPosition / 15 + "px)";


      if(titleanimation == false && document.querySelector('.title').getBoundingClientRect().top < window.innerHeight / 1.2) {

        console.log('NOKADSNOADSJBSO')
        titleanimation = true;
        changeword01.classList.remove('hidden_before');
    
          setTimeout(() => {
            changeword01.classList.add('hidden_after');
            changeword02.classList.remove('hidden_before');
    
            setTimeout(() => {
              changeword02.classList.add('hidden_after');
              changeword03.classList.remove('hidden_before');
    
              setTimeout(() => {
                changeword03.classList.add('hidden_after');
                changeword04.classList.remove('hidden_before');
                
                setTimeout(() => {
                  changeword04.classList.add('hidden_after');
                  changeword05.classList.remove('hidden_before');
                
                  setTimeout(() => {
                    changeword05.classList.add('hidden_after');
                    changeword06.classList.remove('hidden_before');
                
                    setTimeout(() => {
                      changeword06.classList.add('hidden_after');
                      changeword07.classList.remove('hidden_before');
                
                      setTimeout(() => {
                        changeword07.classList.add('hidden_after');
                        changeword08.classList.remove('hidden_before');
                
                        setTimeout(() => {
                          changeword08.classList.add('hidden_after');
                          changeword09.classList.remove('hidden_before');
                        }, 400);
                      }, 250);
                    }, 250);
                  }, 300);
                }, 400);
              }, 450);
            }, 600);
          }, 800);
      }

    }

  }
}
