
import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const PredictDefaulterForm = lazy(() => import('./components/loan-defaulter-form/loan-defaulter-form'));
const DataGridDemo = lazy(() => import('./components/data-grid/data-grid'));
const DataVisualize = lazy(() => import('./components/data-visualization/DataVisualization'));

function App() {
  return (
    <div className="App">
    
      <Navigation />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<PredictDefaulterForm />} />
          <Route path="/DataGridDemo" element={<DataGridDemo />} />
          <Route path="/dataVisualize" element={<DataVisualize />} />
        </Routes>
        </Suspense>
      
    
    </div>
  );
}

export default App;
