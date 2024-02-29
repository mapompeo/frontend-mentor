let toggle = document.getElementById('toggle')
let annuallyElements = document.getElementsByClassName('annually')
let monthlyElements = document.getElementsByClassName('monthly')

window.addEventListener("load", function() {
  carregar()
})

function carregar() {
  toggle.addEventListener('click', () => {
    if (toggle.checked) {
      // Ocultar elementos anuais
      for (let i = 0; i < annuallyElements.length; i++) {
        annuallyElements[i].style.display = 'none';
      }
      // Mostrar elementos mensais
      for (let i = 0; i < monthlyElements.length; i++) {
        monthlyElements[i].style.display = 'block';
      }
    } else {
      // Mostrar elementos anuais
      for (let i = 0; i < annuallyElements.length; i++) {
        annuallyElements[i].style.display = 'block';
      }
      // Ocultar elementos mensais
      for (let i = 0; i < monthlyElements.length; i++) {
        monthlyElements[i].style.display = 'none';
      }
    }
  })
}