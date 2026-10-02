// Abas do menu de apps: mostra um app por vez e guarda a escolha no endereço (#downloader, #grabber)
const tabs = [...document.querySelectorAll('.apps-tab')];
const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));

const mostrar = (id, foco = false) => {
  const i = Math.max(0, panels.findIndex((p) => p.id === id));
  tabs.forEach((t, j) => {
    t.setAttribute('aria-selected', String(i === j));
    t.tabIndex = i === j ? 0 : -1;
    panels[j].hidden = i !== j;
  });
  if (foco) tabs[i].focus();
};

tabs.forEach((t, i) => {
  t.addEventListener('click', (e) => {
    e.preventDefault();
    history.replaceState(null, '', t.hash);
    mostrar(panels[i].id);
  });
  // Setas do teclado trocam de aba
  t.addEventListener('keydown', (e) => {
    const passo = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!passo) return;
    const prox = tabs[(i + passo + tabs.length) % tabs.length];
    history.replaceState(null, '', prox.hash);
    mostrar(prox.getAttribute('aria-controls'), true);
  });
});

window.addEventListener('hashchange', () => mostrar(location.hash.slice(1)));
mostrar(location.hash.slice(1));
