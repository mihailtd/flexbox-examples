document.addEventListener('DOMContentLoaded', function(){
  const cards = document.getElementsByClassName('card')

  Object.keys(cards).forEach( key => {
    cards[key].addEventListener('mouseover', e => {
      if(e.target === e.currentTarget) {
        e.target.className = 'card selected'
        getSiblings(e.target).forEach(sibling => {
          sibling.className = 'card'
        })
      } else {
        const parrent = e.target.parentElement
        if (parrent !== e.currentTarget) return
        parrent.className = 'card selected'
        getSiblings(parrent).forEach(sibling => {
          sibling.className = 'card'
        })
      }
    })
  })
}, false);

var getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  var skipMe = elem;
  for ( ; sibling; sibling = sibling.nextSibling ) 
     if ( sibling.nodeType == 1 && sibling != elem )
        siblings.push( sibling );
  return siblings;
}