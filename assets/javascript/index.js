let displayFlecha = document.getElementById('flechaViñedo')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('botonViñedoAnimacion');
        entry.target=(displayFlecha).classList.add(`d-block`);
      } else {entry.target.classList.remove('botonViñedoAnimacion');
                 }
    });
  });
  observer.observe(document.getElementById(`boton_viñedo`));



