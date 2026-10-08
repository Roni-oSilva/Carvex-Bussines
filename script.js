// Número do WhatsApp da Carvex (DDI+DDD+número, só dígitos). TROCAR pelo número real.
const WHATSAPP = '5500000000000';
const wa = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;

const CATS = ['Gestão','Financeiro','Estoque','Vendas','Atendimento','Marketing','Automação'];
const KITS = [
  {i:'🍽️',n:'Restaurantes',d:'Pedidos, cozinha e caixa sob controle.',t:'Um pacote completo para organizar, controlar e automatizar seu restaurante.'},
  {i:'🏥',n:'Clínicas',d:'Agenda, pacientes e retornos organizados.',t:'Um pacote completo para organizar, controlar e automatizar sua clínica.'},
  {i:'🏪',n:'Lojas',d:'Vendas, estoque e clientes em um só lugar.',t:'Um pacote completo para organizar, controlar e automatizar sua loja.'},
  {i:'💈',n:'Salões e Barbearias',d:'Agenda cheia e clientes que voltam.',t:'Um pacote completo para organizar, controlar e automatizar seu salão ou barbearia.'},
  {i:'🏢',n:'Escritórios',d:'Processos e tarefas sem retrabalho.',t:'Um pacote completo para organizar, controlar e automatizar seu escritório.'},
  {i:'🚗',n:'Oficinas',d:'Ordens de serviço e peças no controle.',t:'Um pacote completo para organizar, controlar e automatizar sua oficina.'},
  {i:'🏗️',n:'Construção',d:'Obras, custos e equipes organizados.',t:'Um pacote completo para organizar, controlar e automatizar sua construtora.'},
  {i:'🚚',n:'Transportadoras',d:'Rotas, frota e entregas rastreadas.',t:'Um pacote completo para organizar, controlar e automatizar sua transportadora.'},
  {i:'🏠',n:'Imobiliárias',d:'Imóveis, leads e contratos num funil.',t:'Um pacote completo para organizar, controlar e automatizar sua imobiliária.'},
  {i:'🏋️',n:'Academias',d:'Alunos, planos e cobranças no automático.',t:'Um pacote completo para organizar, controlar e automatizar sua academia.'},
];

const $ = s => document.querySelector(s);
const grid = $('#kitGrid');
grid.innerHTML = KITS.map((k,x)=>`
  <article class="card glass">
    <div class="ico">${k.i}</div>
    <h3>${k.n.toUpperCase()}</h3>
    <p>${k.d}</p>
    <button class="btn btn-ghost" data-kit="${x}">VER KIT</button>
  </article>`).join('');
$('#dSeg').innerHTML = KITS.map(k=>`<option>${k.n}</option>`).join('') + '<option>Outro</option>';
document.querySelectorAll('[data-wa]').forEach(a=>a.href = wa('Olá! Quero falar com a Carvex.'));

const open = m => { m.hidden = false; document.body.style.overflow = 'hidden'; };
const close = () => { document.querySelectorAll('.modal').forEach(m=>m.hidden = true); document.body.style.overflow = ''; };

document.addEventListener('click', e => {
  const kb = e.target.closest('[data-kit]');
  if (kb) {
    const k = KITS[kb.dataset.kit];
    $('#kitIcon').textContent = k.i;
    $('#kitTitle').textContent = 'KIT ' + k.n.toUpperCase();
    $('#kitText').textContent = k.t;
    $('#kitCats').innerHTML = CATS.map(c=>`<li>${c}</li>`).join('');
    $('#kitCta').href = wa(`Olá! Quero o Kit ${k.n} da Carvex.`);
    open($('#kitModal'));
  }
  if (e.target.closest('[data-open="diag"]')) open($('#diagModal'));
  if (e.target.closest('[data-close]') || e.target.classList.contains('modal')) close();
});
document.addEventListener('keydown', e => e.key === 'Escape' && close());

$('#diagForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  window.open(wa(`Diagnóstico Carvex\nEmpresa: ${f.get('seg')}\nProblema: ${f.get('prob')}`), '_blank', 'noopener');
  close(); e.target.reset();
});
