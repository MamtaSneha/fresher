var p = document.getElementByID('some-paragraph');
p.addEventListener('click', function(event) {
  p.innerHTML = 'You clicked it!';
});