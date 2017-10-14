document.addEventListener('DOMContentLoaded', function(){
  const languages = document.getElementsByClassName('languages')[0].children

  Object.keys(languages).forEach( key => {
    languages[key].addEventListener('click', e => {
      e.target.className = 'selected'
    })
  })

  // window.addEventListener('mousewheel', (e) => {
  //   const pomegranate = document.getElementsByClassName('pomegranate')[0]
  //   const lemon = document.getElementsByClassName('lemon')[0]
  //   const left = document.getElementsByClassName('left')[0]

  //   if (e.deltaY === 100) {
  //     pomegranate.style.visibility = "hidden"
  //     pomegranate.style.display = "none"
  //     lemon.style.visibility = "visible"
  //     lemon.style.display = "block"
  //     left.style.background = '#FFC40F'
  //   }
  //   if (e.deltaY === -100) {
  //     pomegranate.style.visibility = "visible"
  //     pomegranate.style.display = "block"
  //     lemon.style.visibility = "hidden"
  //     lemon.style.display = "none"
  //     left.style.background = '#F63B55'
  //   }
  // })
}, false);
