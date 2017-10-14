document.addEventListener('DOMContentLoaded', function(){
  const languages = document.getElementsByClassName('languages')[0].children

  Object.keys(languages).forEach( key => {
    languages[key].addEventListener('click', e => {
      e.target.className = 'selected'
    })
  })
}, false);
