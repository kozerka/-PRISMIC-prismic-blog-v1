import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrismicProvider } from '@prismicio/react';
import { client } from './prismic';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PrismicProvider client={client}>
			<App />
		</PrismicProvider>
	</React.StrictMode>
);
