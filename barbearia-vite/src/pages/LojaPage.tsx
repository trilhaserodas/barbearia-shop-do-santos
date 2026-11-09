import {useEffect} from 'react';import Loja from '@/components/Loja';
export default function LojaPage(){useEffect(()=>{document.title='Loja | Barbearia do Santos'},[]);
return(<main className="loja"><h1>Seu estilo.<br/><em>Todos os dias.</em></h1><p className="sub">Os produtos que fazem parte da nossa barbearia, também na sua rotina.</p><Loja/></main>)}
