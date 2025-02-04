/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=========== MENU SHOW ===========*/
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*=========== MENU HIDDEN ===========*/
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== TEAMCARD - SHOW SOCIAL NETWORKS ===============*/
const showtcSocial = (toggle1, social1) =>{
  const toggle2 = document.getElementById(toggle1),
        social2 = document.getElementById(social1)

        toggle2.addEventListener('click', () => {
          if(social2.classList.contains('animation')){
            social2.classList.add('down-animation')

            setTimeout(() => {
              social2.classList.remove('down-animation')
            }, 1000)
          }

          social2.classList.toggle('animation')
        })
}

showtcSocial('teamcard-toggle1', 'teamcard-social1')
showtcSocial('teamcard-toggle2', 'teamcard-social2')
showtcSocial('teamcard-toggle3', 'teamcard-social3')
showtcSocial('teamcard-toggle4', 'teamcard-social4')
showtcSocial('teamcard-toggle5', 'teamcard-social5')
showtcSocial('teamcard-toggle6', 'teamcard-social6')

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 68,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          }else{
            sectionClass.classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously choose a topic
if(selectedTheme){
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
})

sr.reveal(`.home__perfill, .about__image`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info
            , .contact__socoial, contact__data`, {origin: 'left'})
sr.reveal(`.updates__card, .projects__card`, {interval: 100})