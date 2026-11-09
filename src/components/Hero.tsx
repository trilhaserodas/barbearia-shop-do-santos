import {useRef} from 'react';import {motion,useScroll,useTransform,useReducedMotion} from 'framer-motion';import {wa} from '@/lib/data';
export default function Hero(){const r=useRef<HTMLElement>(null),rm=useReducedMotion();
const {scrollYProgress:p}=useScroll({target:r,offset:['start start','end start']});
const y=useTransform(p,[0,1],['0%',rm?'0%':'22%']),s=useTransform(p,[0,1],[1.12,rm?1.12:1.28]),ty=useTransform(p,[0,1],['0%',rm?'0%':'-18%']);
return(<section ref={r} className="hero"><motion.div className="hero-bg" style={{y,scale:s,backgroundImage:'url(/img/hero-sinuca.jpg)'}}/>
<div className="hero-shade"/><motion.div className="hero-txt" style={{y:ty}} initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.2,.7,.2,1]}}>
<p className="tag">Paiçandu, Paraná</p><h1>BARBEARIA<br/>DO SANTOS <span>✦</span></h1><p className="lead">O corte é só o começo.</p>
<p>Barbearia, bar e boa companhia. Um lugar com personalidade. Como você.</p>
<div className="row"><a className="btn" href={wa('Olá! Quero agendar um horário.')}>Agendar meu horário</a><a className="btn ghost" href="#espaco">Conheça o espaço</a></div></motion.div></section>)}
