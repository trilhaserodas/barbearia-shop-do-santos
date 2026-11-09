import {useEffect} from 'react';import {Routes,Route,useLocation} from 'react-router-dom';
import Nav from '@/components/Nav';import Home from '@/pages/Home';import LojaPage from '@/pages/LojaPage';
export default function App(){const {pathname,hash}=useLocation();
useEffect(()=>{if(hash){setTimeout(()=>document.getElementById(hash.slice(1))?.scrollIntoView(),50)}else window.scrollTo(0,0)},[pathname,hash]);
return(<><Nav/><Routes><Route path="/" element={<Home/>}/><Route path="/loja" element={<LojaPage/>}/><Route path="*" element={<Home/>}/></Routes></>)}
