window.addEventListener('scroll', onScroll) // Adiciona o evento scroll executando a função onScroll

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

//innerHeight mostra o tamanho da tela visível.
//scrollY + innerHeight/2 calculo
function activateMenuAtCurrentSection(section) {
  //linha alvo:
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //dados necessários:

  //topo da seção:
  const sectionTop = section.offsetTop
  //altura total da seção:
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou passou da linha alvo.
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo
  //dados necessários:

  //a seção termina onde? (Base)
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  //pega o atributo id da seção em forma de stringe
  const sectionId = section.getAttribute('id')

  //No documento, faz uma pesquisa pelo seletor, no menu, todo elemento a, e procurar o atributo que contenha o id.
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)