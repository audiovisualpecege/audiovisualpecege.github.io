// Avatar animado: fica parado (no poster) para quem prefere menos movimento
const avatar = document.querySelector('.avatar');
if (avatar && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  avatar.removeAttribute('autoplay');
  avatar.pause();
}

const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// ===== Plataformas Pecege (botão flutuante) =====
const botaoPlat = document.querySelector('.plataformas-botao');
const menuPlat = document.getElementById('plataformas-menu');
const abrirPlat = (abrir) => {
  if (!botaoPlat) return;
  menuPlat.hidden = !abrir;
  botaoPlat.setAttribute('aria-expanded', String(abrir));
};
if (botaoPlat) {
  botaoPlat.addEventListener('click', () => abrirPlat(menuPlat.hidden));
  document.addEventListener('click', (e) => {
    if (!menuPlat.hidden && !e.target.closest('.plataformas')) abrirPlat(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menuPlat.hidden) { abrirPlat(false); botaoPlat.focus(); }
  });
}

// ===== Busca de atalhos =====
// Filtra os botões da página; Enter abre o primeiro resultado.
// Se o termo só existir no menu de páginas ou em Plataformas Pecege, o Enter abre esse link.
const busca = document.getElementById('busca');
if (busca) {
  const prep = (a) => { a.dataset.texto = normalize(`${a.textContent} ${a.dataset.busca || ''}`); return a; };
  const links = [...document.querySelectorAll('[data-grupo] .link')].map(prep);
  const extras = [...document.querySelectorAll('.menu-paginas a, .plataformas-menu a')].map(prep);
  const grupos = [...document.querySelectorAll('[data-grupo]')];
  const vazio = document.getElementById('vazio');
  let termos = [];
  const casa = (a) => termos.every((t) => a.dataset.texto.includes(t));

  const aplicar = () => {
    termos = normalize(busca.value.trim()).split(/\s+/).filter(Boolean);
    links.forEach((a) => { a.hidden = !casa(a); });
    grupos.forEach((g) => { g.hidden = !g.querySelector('.link:not([hidden])'); });
    const algum = links.some((a) => !a.hidden);
    const extra = !algum && termos.length ? extras.find(casa) : null;
    vazio.textContent = extra ? `Aperte Enter para abrir “${extra.textContent.trim()}”.` : 'Nenhum atalho encontrado.';
    vazio.hidden = algum;
  };

  busca.addEventListener('input', aplicar);
  busca.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && termos.length) {
      const alvo = links.find((a) => !a.hidden) || extras.find(casa);
      if (alvo) { e.preventDefault(); alvo.click(); }
    }
    if (e.key === 'Escape') { busca.value = ''; aplicar(); busca.blur(); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== busca && !e.target.closest('input, textarea')) { e.preventDefault(); busca.focus(); }
  });
}
