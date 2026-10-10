// Número do WhatsApp da Carvex (DDI+DDD+número, só dígitos). (91) 98190-2529.
const WHATSAPP = '5591981902529';
const wa = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;

const PAINS = {"rest": [["Desperdício de alimentos", "Controle de perdas e validade"], ["Estoque sem controle", "Ficha técnica e baixa automática de insumos"], ["Custo dos insumos alto", "Cálculo de CMV e preço por prato"], ["Delivery desorganizado", "Pedidos de todos os canais em uma tela"], ["Comanda e cozinha confusas", "Pedidos digitais direto na cozinha"], ["Sem visão dos números", "Painel de vendas e pratos mais pedidos"]], "clin": [["Faltas de pacientes (no-show)", "Confirmação e lembrete automático por WhatsApp"], ["Agenda desorganizada", "Agenda online com encaixe de horários vagos"], ["Prontuário em papel", "Prontuário eletrônico organizado"], ["Convênios e repasses confusos", "Controle de faturamento e glosas"], ["Pacientes que não retornam", "Campanhas de retorno e pós-consulta"], ["Financeiro sem controle", "Fluxo de caixa e repasse por profissional"]], "loja": [["Estoque parado ou em falta", "Controle de entrada, saída e reposição"], ["Compras sem planejamento", "Alertas de reposição e giro de produtos"], ["Caixa apertado", "Fluxo de caixa e contas a pagar e receber"], ["Clientes que não voltam", "Cadastro, fidelidade e mensagens automáticas"], ["Vendas só no balcão", "Catálogo e atendimento via WhatsApp"], ["Sem saber o que lucra", "Relatório de margem por produto"]], "salao": [["Faltas e cancelamentos", "Lembretes automáticos e lista de espera"], ["Agenda no caderno", "Agendamento online 24h pelo WhatsApp"], ["Cliente fiel que some", "Aviso de retorno no tempo certo"], ["Comissão manual", "Cálculo automático por profissional"], ["Horários vagos", "Promoções para preencher a agenda"], ["Caixa misturado", "Financeiro e estoque de produtos separados"]], "esc": [["Prazos perdidos", "Calendário com alertas de vencimento"], ["Tarefas espalhadas", "Gestão de tarefas por equipe e por cliente"], ["Documentos desorganizados", "Arquivo digital com busca e histórico"], ["Controle manual que não escala", "Fluxos automáticos para rotinas repetitivas"], ["Equipe sem visibilidade", "Painel com andamento de cada demanda"], ["Cobrança de clientes atrasada", "Honorários e cobranças automatizadas"]], "ofi": [["Ordem de serviço em papel", "OS digital com histórico do veículo"], ["Orçamento sem aprovação registrada", "Orçamento enviado e aprovado pelo cliente"], ["Peças sem controle", "Estoque de peças e markup definido"], ["Retrabalho sem registro", "Histórico de reparos e garantias"], ["Cliente ligando para saber do carro", "Avisos de status pelo WhatsApp"], ["Cliente que não volta", "Lembrete de revisão e manutenção preventiva"]], "cons": [["Custo real da obra desconhecido", "Previsto x realizado por obra"], ["Caixa sem folga", "Fluxo de caixa e cronograma de pagamentos"], ["Cronograma que atrasa", "Cronograma ligado à execução e às compras"], ["Atraso de materiais", "Pedidos e entregas acompanhados"], ["Retrabalho e falhas de qualidade", "Checklists de vistoria no campo"], ["Equipe sem comunicação", "Diário de obra e tarefas por equipe"]], "transp": [["Combustível pesa no custo", "Controle de abastecimento e consumo"], ["Manutenção só quando quebra", "Plano de manutenção preventiva da frota"], ["Rotas mal planejadas", "Roteirização para menos km e mais entregas"], ["Atrasos nas entregas", "Rastreio e aviso de status ao cliente"], ["Documentos fiscais e multas", "Controle de documentos e vencimentos"], ["Custo por viagem desconhecido", "Painel de custo e margem por rota"]], "imob": [["Leads que esfriam", "Follow-up automático por WhatsApp e e-mail"], ["Funil sem visibilidade", "Funil de vendas com cada negociação"], ["Contatos presos ao corretor", "Base de leads centralizada na empresa"], ["Captação sem critério", "Avaliação padronizada de imóveis"], ["Contratos e documentos soltos", "Gestão de contratos, prazos e renovações"], ["Anúncios sem retorno", "Relatório de origem e custo por lead"]], "acad": [["Alunos que cancelam", "Alertas de alunos ausentes e plano de retenção"], ["Inadimplência", "Cobrança recorrente automática por WhatsApp"], ["Controle de acesso manual", "Check-in e frequência dos alunos"], ["Planos e contratos confusos", "Gestão de planos, trancamentos e renovações"], ["Captação de novos alunos", "Aula experimental e funil de matrículas"], ["Caixa imprevisível", "Receita recorrente e metas no painel"]]};
const KITS = [
  {i:'rest',n:'Restaurantes',d:'Pedidos, cozinha e caixa sob controle.',t:'Um pacote completo para organizar, controlar e automatizar seu restaurante.'},
  {i:'clin',n:'Clínicas',d:'Agenda, pacientes e retornos organizados.',t:'Um pacote completo para organizar, controlar e automatizar sua clínica.'},
  {i:'loja',n:'Lojas',d:'Vendas, estoque e clientes em um só lugar.',t:'Um pacote completo para organizar, controlar e automatizar sua loja.'},
  {i:'salao',n:'Salões e Barbearias',d:'Agenda cheia e clientes que voltam.',t:'Um pacote completo para organizar, controlar e automatizar seu salão ou barbearia.'},
  {i:'esc',n:'Escritórios',d:'Processos e tarefas sem retrabalho.',t:'Um pacote completo para organizar, controlar e automatizar seu escritório.'},
  {i:'ofi',n:'Oficinas',d:'Ordens de serviço e peças no controle.',t:'Um pacote completo para organizar, controlar e automatizar sua oficina.'},
  {i:'cons',n:'Construção',d:'Obras, custos e equipes organizados.',t:'Um pacote completo para organizar, controlar e automatizar sua construtora.'},
  {i:'transp',n:'Transportadoras',d:'Rotas, frota e entregas rastreadas.',t:'Um pacote completo para organizar, controlar e automatizar sua transportadora.'},
  {i:'imob',n:'Imobiliárias',d:'Imóveis, leads e contratos num funil.',t:'Um pacote completo para organizar, controlar e automatizar sua imobiliária.'},
  {i:'acad',n:'Academias',d:'Alunos, planos e cobranças no automático.',t:'Um pacote completo para organizar, controlar e automatizar sua academia.'},
];

const ICONS = {
  rest:'<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-3 5-3 8h3v10"/>',
  clin:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
  loja:'<path d="M4 9l1-5h14l1 5M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 6 0 2.5 2.5 0 0 0 5 0M5 12v8h14v-8M10 20v-5h4v5"/>',
  salao:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8l12 10M8.5 16L20 6"/>',
  esc:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
  ofi:'<path d="M14.5 6a4 4 0 0 0 4.9 5L10 20.4a2.1 2.1 0 0 1-3-3L16.4 8A4 4 0 0 0 14.5 6z"/>',
  cons:'<path d="M3 18h18M5 18v-3a7 7 0 0 1 14 0v3M12 8v4"/>',
  transp:'<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  imob:'<path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
  acad:'<path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/>',
};
const svg = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;
const $ = s => document.querySelector(s);
const grid = $('#kitGrid');
grid.innerHTML = KITS.map((k,x)=>`
  <li class="rv" style="--i:${x%4}">
    <button class="row" data-kit="${x}">
      <span class="num">${String(x+1).padStart(2,'0')}</span>
      <span class="ico">${svg(k.i)}</span>
      <span><h3>${k.n}</h3><p>${k.d}</p></span>
      <span class="go"><span>VER KIT</span><i></i></span>
    </button>
  </li>`).join('');
$('#dSeg').innerHTML = KITS.map(k=>`<option>${k.n}</option>`).join('') + '<option>Outro</option>';
document.querySelectorAll('[data-wa]').forEach(a=>a.href = wa('Olá! Quero falar com a Carvex.'));

const open = m => { m.hidden = false; document.body.style.overflow = 'hidden'; };
const close = () => { document.querySelectorAll('.modal').forEach(m=>m.hidden = true); document.body.style.overflow = ''; };

document.addEventListener('click', e => {
  const kb = e.target.closest('[data-kit]');
  if (kb) {
    const k = KITS[kb.dataset.kit];
    $('#kitIcon').innerHTML = svg(k.i);
    $('#kitTitle').textContent = 'KIT ' + k.n.toUpperCase();
    $('#kitText').textContent = k.t;
    $('#kitCats').innerHTML = PAINS[k.i].map(([d,s],n)=>`<li style="--i:${n}"><b>${d}</b><span>${s}</span></li>`).join('');
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

// ---- animações ----
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.15});
document.querySelectorAll('.rv').forEach((el,i) => { if (!el.style.getPropertyValue('--i')) el.style.setProperty('--i', i % 3); io.observe(el); });

const bar = $('#progress'), ice = document.querySelector('.iceberg img');
addEventListener('scroll', () => {
  const m = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${m > 0 ? scrollY / m : 0})`;
  if (ice) ice.style.translate = `0 ${Math.min(scrollY,600) * .08}px`;
}, {passive:true});

// iceberg acompanha o mouse
const hero = document.querySelector('.hero');
hero.addEventListener('pointermove', e => {
  const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  document.querySelector('.iceberg').style.transform = `translate(${x*18}px,${y*12}px) rotateY(${x*6}deg)`;
});

// bolhas subindo
const bub = $('#bubbles');
for (let i = 0; i < 18; i++) {
  const s = document.createElement('span'), z = 4 + Math.random() * 14;
  s.style.cssText = `left:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${9+Math.random()*12}s;animation-delay:${-Math.random()*20}s;--dx:${(Math.random()-.5)*80}px;opacity:${.25+Math.random()*.5}`;
  bub.appendChild(s);
}
