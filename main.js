// show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// change background header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll section active link 
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// email js
const contactForm = document.getElementById('contact-form'),
      contactMassage = document.getElementById('contact-message'),
      conatactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    //check if the field has a value
    if (conatactUser.value === ''){
        // add and remove color
        contactMassage.classList.remove('color-green')
        contactMassage.classList.add('color-red')

        //show message
        contactMassage.textContent = 'You must enter your email 😊'

        //remove message three second
        setTimeout(() =>{
            contactMassage.textContent = '';
        }, 3000)
    } else {
        // serviceID - templateID - form - publicKey
        emailjs.sendForm('service_nw384ed','template_91nddoq','#contact-form','OeuPF6ZitJ9ksl5ur')
        .then(() =>{
            //show message and add color
            contactMassage.classList.add('color-green')
            contactMassage.textContent = 'You registered succesfully 😎'

            //revome message after three seconf
            setTimeout(() =>{
              contactMassage.textContent = ''  
            }, 3000)
            
        }, (error) =>{
            // mail sending error
            alert('OPPS! SOMETING HAS FAILED...', error)
        })

        // to clear the input field 
        conatactUser.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)



// show scroll up
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data, .footer__container, .footer__group, .About__us, .highlightsvid')
sr.reveal('.home__images img, .card img', {delay: 700, origin: 'bottom'})
sr.reveal('.logos__container img, .logos__shape, .program__card, .pricing__card', {interval: 100})
sr.reveal('.choose__img', {origin: 'left'})
sr.reveal('.choose__content', {origin: 'right'})

function openPopup() {
    document.getElementById('login-popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('login-popup').style.display = 'none';
  }





