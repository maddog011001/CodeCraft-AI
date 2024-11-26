import React, { useState, useEffect } from 'react';
import { Code2, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import Button from './Button';

interface CodeAnalysis {
  type: 'error' | 'warning' | 'suggestion';
  message: string;
  line?: number;
}

export default function CodeTester() {
  const [code, setCode] = useState(`// Try writing some code here
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<CodeAnalysis[]>([]);

  const analyzeCode = async () => {
    setIsAnalyzing(true);
    setAnalysis([]);

    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockAnalysis: CodeAnalysis[] = [
      {
        type: 'warning',
        message: 'This recursive implementation may cause stack overflow for large values of n',
        line: 2
      },
      {
        type: 'suggestion',
        message: 'Consider using dynamic programming for better performance',
        line: 2
      },
      {
        type: 'error',
        message: 'Missing parameter type annotation for n',
        line: 2
      }
    ];

    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
  };

  useEffect(() => {
    if (code.trim()) {
      const timeout = setTimeout(analyzeCode, 1000);
      return () => clearTimeout(timeout);
    }
  }, [code]);

  return (
    <section id="try-it" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Try CodeCraft AI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the power of AI-assisted coding. Write or paste your code below and see real-time analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300">Code Editor</span>
              </div>
              <Button
                variant="secondary"
                onClick={analyzeCode}
                disabled={isAnalyzing}
                className="text-sm px-3 py-1"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze'
                )}
              </Button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[400px] p-4 bg-gray-900 text-gray-100 font-mono text-sm focus:outline-none resize-none"
              spellCheck="false"
            />
          </div>

          {/* Analysis Panel */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="px-4 py-2 border-b border-gray-700">
              <h3 className="text-gray-300">Analysis Results</h3>
            </div>
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {isAnalyzing ? (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Analyzing your code...
                </div>
              ) : analysis.length > 0 ? (
                analysis.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      item.type === 'error'
                        ? 'bg-red-900/20 border-red-700'
                        : item.type === 'warning'
                        ? 'bg-yellow-900/20 border-yellow-700'
                        : 'bg-blue-900/20 border-blue-700'
                    }`}
                  >
                    <div className="flex items-start">
                      {item.type === 'error' ? (
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                      ) : item.type === 'warning' ? (
                        <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                      )}
                      <div>
                        <div className="text-gray-200 font-medium">
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          {item.line && <span className="text-gray-400 text-sm ml-2">Line {item.line}</span>}
                        </div>
                        <p className="text-gray-400 mt-1">{item.message}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <Code2 className="w-12 h-12 mb-4 text-gray-600" />
                  <p>Write or paste some code to see the analysis</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}