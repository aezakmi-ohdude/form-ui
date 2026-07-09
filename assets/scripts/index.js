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