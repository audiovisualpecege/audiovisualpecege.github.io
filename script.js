// Avatar animado: fica parado (no poster) para quem prefere menos movimento
const avatar = document.querySelector('.avatar');
if (avatar && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  avatar.removeAttribute('autoplay');
  avatar.pause();
}
