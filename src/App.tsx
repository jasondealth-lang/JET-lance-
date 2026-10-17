import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

// Public Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { SignupPage, LoginPage, ForgotPasswordPage, AccountPage } from './pages/AuthPages';
import { PrivacyPage, TermsPage } from './pages/LegalPages';

// Admin Pages & Visual Builder
import { AdminPages } from './pages/admin/AdminPages';
import { SiteEditorPage } from './pages/admin/SiteEditorPage';

function MainRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [currentSearch, setCurrentSearch] = useState<string>(() => {
    return window.location.search || '';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setCurrentSearch(window.location.search || '');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    const [pathPart, queryPart] = to.split('?');
    window.history.pushState({}, '', to);
    setCurrentPath(pathPart || '/');
    setCurrentSearch(queryPart ? `?${queryPart}` : '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to extract query parameters
  const queryParams = new URLSearchParams(currentSearch);

  // Routing Logic
  const renderCurrentRoute = () => {
    // 1. Visual Website Editor (Fullscreen workspace)
    if (currentPath === '/admin/site-editor') {
      return <SiteEditorPage navigate={navigate} />;
    }

    // 2. Admin Workspace Tabs
    if (currentPath === '/admin' || currentPath.startsWith('/admin/')) {
      const subRoute = currentPath.replace('/admin', '').replace(/^\//, '') || 'overview';
      return <AdminPages subRoute={subRoute} navigate={navigate} />;
    }

    // 3. Service Detail Route: /services/:slug
    if (currentPath.startsWith('/services/') && currentPath.length > 10) {
      const slug = currentPath.replace('/services/', '');
      return <ServiceDetailPage slug={slug} navigate={navigate} />;
    }

    // 4. Portfolio Detail Route: /portfolio/:slug
    if (currentPath.startsWith('/portfolio/') && currentPath.length > 11) {
      const slug = currentPath.replace('/portfolio/', '');
      return <PortfolioDetailPage slug={slug} navigate={navigate} />;
    }

    // 5. Public Static & Feature Routes
    switch (currentPath) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/services':
        return <ServicesPage navigate={navigate} initialCategory={queryParams.get('cat') || undefined} />;
      case '/portfolio':
        return <PortfolioPage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/process':
        return <ProcessPage navigate={navigate} />;
      case '/faq':
        return <FaqPage navigate={navigate} />;
      case '/contact':
        return <ContactPage navigate={navigate} initialServiceSlug={queryParams.get('service') || undefined} />;
      case '/signup':
        return <SignupPage navigate={navigate} />;
      case '/login':
        return <LoginPage navigate={navigate} />;
      case '/forgot-password':
        return <ForgotPasswordPage navigate={navigate} />;
      case '/account':
        return <AccountPage navigate={navigate} />;
      case '/privacy':
        return <PrivacyPage navigate={navigate} />;
      case '/terms':
        return <TermsPage navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  const isSiteEditor = currentPath === '/admin/site-editor';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {!isSiteEditor && <Navbar currentPath={currentPath} navigate={navigate} />}
      <main className="flex-1">
        {renderCurrentRoute()}
      </main>
      {!isSiteEditor && <Footer navigate={navigate} />}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
