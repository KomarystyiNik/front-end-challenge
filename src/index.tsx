import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { TablePage } from './pages/TablePage';

const App = () => <TablePage />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
