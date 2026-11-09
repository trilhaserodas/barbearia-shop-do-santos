import {useEffect} from 'react';import {Link} from 'react-router-dom';import Hero from '@/components/Hero';import Loja from '@/components/Loja';import {INFO,wa,MAPA} from '@/lib/data';
const T=['Corte & barba','Um brinde à boa companhia','Na mesa, só jogo bom','Do Santos, do seu jeito'];
export default function Home(){useEffect(()=>{document.title='Barbearia do Santos | Barbearia, bar e sinuca em Paiçandu-PR'},[]);return(<main><Hero/>
<div className="ticker" aria-hidden="true"><div>{[...T,...T,...T,...T].map((t,i)=><span key={i}>{t} ✦</span>)}</div></div>
<section id="barbearia" className="split"><img src="/img/barbearia.jpg" alt="Barbeiro da Barbearia do Santos cortando o cabelo de um cliente"/>
<div><h2>O seu estilo.<br/>A nossa assinatura.</h2><p>Da cadeira ao espelho, atenção em cada detalhe. Aqui, corte e barba têm personalidade, e a conversa também.</p>
<ul className="serv"><li><b>Corte de cabelo</b><span>Seu visual, seu jeito.</span></li><li><b>Barba</b><span>Cuidado e acabamento.</span></li></ul>
<a className="btn" href={wa('Olá! Quero agendar um horário.')}>Encontre seu próximo horário</a></div></section>
<section id="espaco" className="espaco"><h2>Mais que uma barbearia.<br/>Um ponto de encontro.</h2><p>Madeira, histórias e um clima que convida a ficar. Puxe uma cadeira. A casa é sua.</p>
<div className="duo"><figure><img src="/img/espaco-sinuca.jpg" alt="Mesa de sinuca vermelha e bar de madeira" loading="lazy"/><figcaption>Uma partida. Uma boa história.</figcaption></figure>
<figure><img src="/img/espaco-poste.jpg" alt="Poste de barbeiro e balcão do bar" loading="lazy"/><figcaption>Entre. Fique à vontade.</figcaption></figure></div>
<p className="areas">Barbearia · Bar · Sinuca · Boa companhia</p></section>
<section id="eventos" className="split rev"><div><h2>Gente reunida.<br/>Histórias pra contar.</h2><p>Encontros, sinuca e momentos que fazem parte da casa.</p>
<p><b>Sorteio mensal:</b> todo dia 1º sorteamos uma camisa oficial do seu time favorito. O resultado sai na página da Barbearia do Santos no Facebook.</p>
<a className="btn ghost" href={wa('Olá! Quero saber a programação da barbearia.')}>Consultar programação</a></div>
<img src="/img/eventos-bar.jpg" alt="Clientes no balcão do bar ao lado da mesa de sinuca" loading="lazy"/></section>
<section className="prev"><div className="head"><h2>Da nossa bancada<br/>para a sua rotina.</h2><Link to="/loja" className="btn ghost">Conhecer a loja</Link></div><Loja limit={3}/></section>
<section id="contato" className="contato"><img src="/img/logo.png" alt="" width={260} height={260} loading="lazy"/>
<div><h2>Seu próximo corte.<br/>Seu novo ponto de encontro.</h2><address><p>{INFO.end}</p><p><a href={'tel:+'+INFO.fone}>{INFO.foneTxt}</a></p><p>{INFO.horario}</p></address>
<div className="row"><a className="btn" href={wa('Olá! Quero agendar um horário.')}>Vamos marcar?</a><a className="btn ghost" href={MAPA} target="_blank" rel="noopener noreferrer">Ver no mapa</a></div></div></section></main>)}
