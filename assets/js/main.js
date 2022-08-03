
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }



  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
   let navbarlinks = select('#navbar .scrollto', true)
   const navbarlinksActive = () => {
     let position = window.scrollY + 200
     navbarlinks.forEach(navbarlink => {
       if (!navbarlink.hash) return
       let section = select(navbarlink.hash)
       if (!section) return
       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
         navbarlink.classList.add('active')
       } else {
         navbarlink.classList.remove('active')
       }
     })
   }
   window.addEventListener('load', navbarlinksActive)
   onscroll(document, navbarlinksActive)
 
  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)






  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  



  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();
  /**
   * Events slider
   */
   new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

   const constraints = {
       name: {
           presence: { allowEmpty: false }
       },
       email: {
           presence: { allowEmpty: false },
           email: true
       },
       message: {
           presence: { allowEmpty: false }
       }
   };

   const form = document.getElementById('contact-form');

   form.addEventListener('submit', function (event) {
     const formValues = {
         name: form.elements.name.value,
         email: form.elements.email.value,
         message: form.elements.message.value
     };

     const errors = validate(formValues, constraints);

     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { return fieldValues.join(', ')})
           .join("\n");

       alert(errorMessage);
     }
   }, false);

   console.log('it works!!')

   $(document).ready(function() {
   $('.submit').click(function(event){
     console.log('Clicked button!!!!!!!!')
   
     var email = $('.email').val()
     var name = $('.name').val()
     var subject = $('.subject').val()
     var message = $('.message').val()
     var statusElm = $('.status')
     statusElm.empty()
   
     if(email.length > 5 && email.includes('@') && email.includes('.')) {
       statusElm.append('<div>email is valid!!!!!</div>')
     } else {
       event.preventDefault()
       statusElm.append('<div>email is not valid!!!!!!</div>')
     }
     
     if(subject.length>2){
       statusElm.append('<div>Subject is valid!!!</div>')
     } else {
       event.preventDefault()
       statusElm.append('<div>Subject is not valid!!!</div>')
     }

     if(name.length>2){
      statusElm.append('<div>Name is valid!!!</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Nameis not valid!!!</div>')
    }
      
     if(message.length >20) {
       statusElm.append('<div>Message is valid!!!</div>')
     } else {
       event.preventDefault()
       statusElm.append('<div>Message is not valid!!!!!</div>')
     }
   
   })
   })

