document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('.has-dropdown > a').forEach((link) => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 800) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });
  }

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav > ul > li').forEach((li) => {
    const link = li.querySelector(':scope > a');
    if (link && link.getAttribute('href') === current) {
      li.classList.add('active');
    }
  });

  const amountCards = document.querySelectorAll('.amount-card[data-amount]');
  const customInput = document.querySelector('#custom-amount');
  amountCards.forEach((card) => {
    card.addEventListener('click', () => {
      amountCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      if (customInput && !card.classList.contains('custom')) {
        customInput.value = '';
      }
    });
  });
  if (customInput) {
    customInput.addEventListener('focus', () => {
      amountCards.forEach((c) => c.classList.remove('selected'));
      customInput.closest('.amount-card')?.classList.add('selected');
    });
  }

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = 'Merci, votre message a bien été pris en compte (démo).';
        feedback.style.display = 'block';
      }
      form.reset();
    });
  }
});
