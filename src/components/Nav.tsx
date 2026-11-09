import {Link} from 'react-router-dom';import {wa} from '@/lib/data';
export default function Nav(){return(<header className="nav"><Link to="/" aria-label="Início"><img src="/img/logo.png" alt="Barbearia dos Santos" width={48} height={48}/></Link>
<nav><Link to="/#barbearia">Barbearia</Link><Link to="/#espaco">O espaço</Link><Link to="/#eventos">Eventos</Link><Link to="/loja">Loja</Link><Link to="/#contato">Contato</Link></nav>
<a className="btn" href={wa('Olá! Quero agendar um horário na Barbearia do Santos.')}>Agendar horário</a></header>)}
