export const INFO={nome:'Barbearia do Santos',fone:'5544998358189',foneTxt:'(44) 99835-8189',
end:'Av. Ver. Sílvio Alves, 1482 - Jardim Pioneiros, Paiçandu - PR, 87140-000',horario:'Segunda a sábado, das 10h às 22h'};
export const wa=(t:string)=>`https://wa.me/${INFO.fone}?text=${encodeURIComponent(t)}`;
export const MAPA='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(INFO.end);
export const CATS=['Todos','Pomadas e ceras','Géis','Barba','Cuidados e kits'];
export type Produto={id:number;nome:string;marca:string;cat:string;img:string};
const L:string[][]=[['Pomada Fixadora','Dicolore Barber Shop','Pomadas e ceras','p01'],['Block Style','Gomgel','Pomadas e ceras','p02'],
['göt2b playful','Schwarzkopf','Pomadas e ceras','p03'],['Cube Wax','','Pomadas e ceras','p05'],['Gel Oficina Hair','Oficina Hair','Géis','p06'],
['Balm Pós Barba','Dicolore Barber Shop','Barba','p07'],['Yamatif Cola','Yamatif','Géis','p08'],['Shampoo e pomada','Runner','Cuidados e kits','p09'],
['Pomada Modeladora','Oficina Hair','Pomadas e ceras','p10'],['Mandioca Alisamento','Runner','Cuidados e kits','p11'],['Shampoo e pomada','Runner','Cuidados e kits','p12']];
export const PRODUTOS:Produto[]=L.map(([nome,marca,cat,img],id)=>({id,nome,marca,cat,img:`/img/loja/${img}.jpg`}));
