// PROGRESS BAR

let progressBars = document.querySelectorAll('[data-component="circle-progress"]')

progressBars.forEach((item) => {

    let circle = item.querySelector('[data-progress-circle="circle"]');
    let percents = item.querySelector('[data-progress-circle="percents"]');
    
    
    let circleRadius = circle.getAttribute('r');
    let circleLength = Math.PI * 2 * circleRadius;

    let progress = circle.getAttribute('data-progress');

    circle.setAttribute('transform', `rotate(-90 ${circle.getAttribute('cx')} ${circle.getAttribute('cy')})`);
    circle.setAttribute('stroke-dasharray', circleLength);
    circle.setAttribute('stroke-dashoffset', circleLength * (1 - progress));
    percents.textContent = `${parseInt(progress * 100)} %`
});

//PASSWORD REVEAL

let accesibleForm = document.querySelectorAll('[data-component="accesible-form"]');

accesibleForm.forEach((form)=>{

    let fieldsToReveal = form.querySelectorAll('[data-reveal]');

        fieldsToReveal.forEach((field)=>{

            let input = field.querySelector('[type="password"]')
            let toggle = field.querySelector('[type="button"]')


            toggle.addEventListener('click', ()=>{

                let isRevealed = field.getAttribute('data-reveal') == 'true';


                field.setAttribute('data-reveal', String(!isRevealed));
                input.setAttribute('type', !isRevealed ? 'text' : 'password');
                toggle.setAttribute('aria-pressed', String(!isRevealed));

                toggle.style.setProperty('--reveal-display', !isRevealed ? 'block' : 'none');


            })

        })

})

