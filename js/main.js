document.addEventListener('DOMContentLoaded', (e) => {
   const switchToggle = document.getElementById('switch-toggle');
   const pricings = document.querySelectorAll('.pricing');

   switchToggle.addEventListener('change', ({ target }) => {
      if (target.checked) {
         pricings.forEach(pricing => pricing.classList.add('monthly'));
      } else {
         pricings.forEach(pricing => pricing.classList.remove('monthly'));
      }
   });
});