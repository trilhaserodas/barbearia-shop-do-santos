Barbearia do Santos
Site institucional + loja (pedidos pelo WhatsApp) da Barbearia do Santos, Paiçandu - PR.
Tecnologias
Vite, TypeScript, React, React Router, Tailwind CSS, Framer Motion.
Rodar localmente
```sh
npm i
npm run dev
```
Publicar (Vercel)
Importe o repositório na Vercel e clique em Deploy. O `vercel.json` já trata a rota `/loja` e os headers de segurança.
Onde editar
`src/lib/data.ts`: telefone, endereço, horário e lista de produtos.
`src/pages/Home.tsx`: textos e seções da home.
`src/components/Hero.tsx`: topo com parallax.
`public/img/`: fotos originais (hero em `hero-sinuca.jpg`, 2560x1707).
Pendências
Confirmar horário, lista de serviços com preços, programação de eventos e domínio final.
