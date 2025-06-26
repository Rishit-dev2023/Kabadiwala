import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 text-center text-2xl font-bold">
        Kabadiwala ♻️
      </header>

      {/* Main Content */}
      <main className="p-6 flex-1">
        <h2 className="text-xl font-semibold mb-4">♻️ Did You Know?</h2>
        <FactCard />
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center p-4">
        © 2025 Kabadiwala. All rights reserved.
      </footer>
    </div>
  );
}

// Simple FactCard Component
function FactCard() {
  return (
    <div className="bg-white p-4 shadow-lg rounded-xl max-w-md mx-auto">
      <p>🌿 Recycling one ton of paper saves 17 trees!</p>
    </div>
  );
}

export default App;
