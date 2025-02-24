import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@contexts/ThemeContext'; // No need for .tsx extension

import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';

// Lazy-load Installation
const Installation = lazy(() => import('./pages/Installation.tsx'));

import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path='installation'
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Installation />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;