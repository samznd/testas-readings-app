import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import 'froala-editor/js/plugins.pkgd.min.js';

import './styles/globals.css';

// components
import ReadingsPage from './pages/readings';
import CreateReadingPage from './pages/readings/create-reading';
import ReadingPage from './pages/readings/reading';

const router = createHashRouter([
  {
    id: '1',
    path: '/',
    element: <ReadingsPage />,
  },
  {
    id: '2',
    path: '/readings/create',
    element: <CreateReadingPage />,
  },
  {
    id: '3',
    path: '/reading/:id',
    element: <ReadingPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
