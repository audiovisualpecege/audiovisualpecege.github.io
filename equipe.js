const $ = (sel) => document.querySelector(sel);
const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const initials = (nome) => nome.split(/\s+/).filter((p) => p.length > 2).slice(0, 2).map((p) => p[0]).join('');

// ===== Render =====
const selos = (p) => [
  p.anos ? `<span class="selo selo-${p.anos}">${p.anos} anos</span>` : '',
  p.novo ? '<span class="selo selo-novo">Novo</span>' : '',
  p.freela ? '<span class="selo selo-freela">Freela</span>' : '',
].join('');

const tags = (p) => [p.gestao, p.novo && 'novo', p.freela && 'freela'].filter(Boolean).join(' ');

const pessoa = (p) => `
  <li class="pessoa g-${p.gestao || 'none'}" data-tags="${tags(p)}" data-busca="${escape(normalize(p.nome))}">
    <span class="nome">${escape(p.nome)}</span>${selos(p)}
  </li>`;

const lista = (pessoas) => `<ul class="pessoas">${pessoas.map(pessoa).join('')}</ul>`;

const contar = (t) => (t.pessoas || []).length + (t.subtimes || []).reduce((n, s) => n + s.pessoas.length, 0);

const time = (t) => `
  <article class="time" data-grupo>
    <h3>${escape(t.nome)} <span class="n">${contar(t)}</span></h3>
    ${t.pessoas ? lista(t.pessoas) : ''}
    ${(t.subtimes || []).map((s) => `
      <div class="sub" data-grupo>
        <h4>${escape(s.nome)}</h4>
        ${lista(s.pessoas)}
      </div>`).join('')}
  </article>`;

const lider = (p, cargo) => `
  <div class="lider g-${p.gestao || 'none'}" data-tags="${tags(p)}" data-busca="${escape(normalize(p.nome))}">
    <span class="iniciais" aria-hidden="true">${escape(initials(p.nome))}</span>
    <span class="lider-txt">
      <span class="cargo">${escape(cargo)}</span>
      <span class="nome">${escape(p.nome)}</span>
    </span>
    ${selos(p)}
  </div>`;

const area = (a, extraClass = '') => {
  const total = (a.coordenacao || []).length + a.times.reduce((n, t) => n + contar(t), 0);
  return `
  <section class="area ${extraClass}" data-area>
    <header class="area-head">
      <div class="area-titulo">
        <h2>${escape(a.nome)}</h2>
        <span class="area-n">${total} ${total === 1 ? 'pessoa' : 'pessoas'}</span>
      </div>
      ${(a.coordenacao || []).map((p) => lider(p, a.cargo)).join('')}
    </header>
    <div class="times">${a.times.map(time).join('')}</div>
  </section>`;
};

$('#miro').href = EQUIPE.miro;
$('#total').textContent = EQUIPE.total;
$('#atualizacao').textContent = EQUIPE.atualizacao;
$('#gestao').innerHTML = EQUIPE.gestao.map((p) => lider(p, 'Gestão')).join('');
$('#relacionados').innerHTML = `<span>Gestores relacionados</span> ${EQUIPE.relacionados.map((n) => `<b>${escape(n)}</b>`).join(' · ')}`;
$('#areas').innerHTML = EQUIPE.areas.map((a) => area(a)).join('') + area(EQUIPE.marketing, 'area-mkt');

// ===== Busca e filtros =====
const busca = $('#busca');
const filtros = [...document.querySelectorAll('.filtro')];
const itens = [...document.querySelectorAll('.pessoa, .lider')];
let filtroAtivo = null;

const aplicar = () => {
  const termos = normalize(busca.value.trim()).split(/\s+/).filter(Boolean);
  const ativo = termos.length > 0 || filtroAtivo;
  document.body.classList.toggle('filtrando', Boolean(ativo));

  let visiveis = 0;
  itens.forEach((el) => {
    const ok = termos.every((t) => el.dataset.busca.includes(t))
      && (!filtroAtivo || el.dataset.tags.split(' ').includes(filtroAtivo));
    el.hidden = !ok;
    if (ok) visiveis++;
  });

  // Esconde subtimes, times e áreas sem ninguém visível
  document.querySelectorAll('[data-grupo]').forEach((g) => {
    g.hidden = ativo && !g.querySelector('.pessoa:not([hidden])');
  });
  document.querySelectorAll('[data-area]').forEach((a) => {
    a.hidden = ativo && !a.querySelector('.pessoa:not([hidden]), .lider:not([hidden])');
  });
  $('#vazio').hidden = !ativo || visiveis > 0;
};

busca.addEventListener('input', aplicar);
busca.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { busca.value = ''; aplicar(); busca.blur(); }
});

filtros.forEach((btn) => btn.addEventListener('click', () => {
  filtroAtivo = filtroAtivo === btn.dataset.filtro ? null : btn.dataset.filtro;
  filtros.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === filtroAtivo)));
  aplicar();
}));

document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== busca) { e.preventDefault(); busca.focus(); }
});
