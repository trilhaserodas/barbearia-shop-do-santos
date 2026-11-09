import React from 'react';import {createRoot} from 'react-dom/client';import {BrowserRouter} from 'react-router-dom';
import '@fontsource/roboto-slab/500.css';import '@fontsource/roboto-slab/700.css';import '@fontsource/barlow/400.css';import '@fontsource/barlow/600.css';
import './index.css';import App from './App';
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
