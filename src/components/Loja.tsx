import {useState} from 'react';import {CATS,PRODUTOS,wa} from '@/lib/data';
export default function Loja({limit}:{limit?:number}){const [c,setC]=useState('Todos'),[q,setQ]=useState('');
const l=PRODUTOS.filter(p=>(c==='Todos'||p.cat===c)&&(p.nome+p.marca).toLowerCase().includes(q.toLowerCase())).slice(0,limit??99);
return(<div>{!limit&&<div className="filtros" role="group" aria-label="Categorias">{CATS.map(k=><button key={k} aria-pressed={k===c} onClick={()=>setC(k)}>{k}</button>)}
<input value={q} maxLength={40} onChange={e=>setQ(e.target.value)} placeholder="Buscar produto" aria-label="Buscar produto"/></div>}
{!limit&&<p className="nota">{l.length} produtos. Preços e disponibilidade sob consulta. Valores sujeitos a confirmação.</p>}
<ul className="grid">{l.map(p=><li key={p.id}><a href={wa(`Olá! Quero saber sobre o produto: ${p.nome}${p.marca?' ('+p.marca+')':''}.`)}>
<img src={p.img} alt={`${p.nome} ${p.marca}`} loading="lazy"/><small>{p.marca}</small><h3>{p.nome}</h3><span>Sob consulta · Pedir pelo WhatsApp</span></a></li>)}</ul></div>)}
