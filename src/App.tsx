import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { BrokersPage } from './pages/BrokersPage.tsx';
import { SignalsPage } from './pages/SignalsPage.tsx';
import { AirdropsPage } from './pages/AirdropsPage.tsx';
import { ToolsPage } from './pages/ToolsPage.tsx';
import { HustlesPage } from './pages/HustlesPage.tsx';
import { CalculatorsPage } from './pages/CalculatorsPage.tsx';
import { AcademyPage } from './pages/AcademyPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { RouteState, parseHash, buildHash } from './utils/navigation.ts';

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => {
    return parseHash(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (nextRoute: RouteState) => {
    const newHash = buildHash(nextRoute);
    window.location.hash = newHash;
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = route.page === 'home';

  return (
    <div className="min-h-screen bg-[#171717] text-zinc-100 flex flex-col font-sans selection:bg-[#A31C18] selection:text-white relative overflow-x-hidden">
      {/* Ambient background glow layers for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,17,12,0.8),rgba(23,23,23,0))] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-40 w-96 h-96 bg-[#A31C18]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 -left-40 w-96 h-96 bg-[#06110C]/90 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Top Header & Mobile Bottom Dock */}
      <Navigation
        currentRoute={route}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      {isHome ? (
        <main className="flex-1 w-full relative z-10">
          <HomePage onNavigate={handleNavigate} />
        </main>
      ) : (
        <main className="flex-1 pt-24 pb-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {route.page === 'brokers' && (
            <BrokersPage subpage={route.subpage} onNavigate={handleNavigate} />
          )}

          {route.page === 'signals' && (
            <SignalsPage subpage={route.subpage} onNavigate={handleNavigate} />
          )}

          {route.page === 'airdrops' && (
            <AirdropsPage subpage={route.subpage} onNavigate={handleNavigate} />
          )}

          {route.page === 'tools' && (
            <ToolsPage subpage={route.subpage} onNavigate={handleNavigate} />
          )}

          {route.page === 'hustles' && (
            <HustlesPage subpage={route.subpage} onNavigate={handleNavigate} />
          )}

          {route.page === 'calculators' && (
            <CalculatorsPage subpage={route.subpage} onNavigate={handleNavigate} />
          )}

          {route.page === 'academy' && (
            <AcademyPage subpage={route.subpage} onNavigate={handleNavigate} />
          )}

          {route.page === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}
        </main>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
