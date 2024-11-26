import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeTester from './components/CodeTester';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <CodeTester />
        <Pricing />
      </main>
    </div>
  );
}

export default App;