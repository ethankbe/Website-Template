import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#hero' },
    { id: 'research', label: 'Research', href: '#research' },
    { id: 'results', label: 'Results', href: '#results' },
    { id: 'plots', label: 'Plots', href: '#plots' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="font-heading font-bold text-xl lg:text-2xl text-foreground">
            Research Portfolio
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-6 py-3 text-base font-normal transition-colors duration-200 hover:text-primary cursor-pointer ${
                      activeSection === item.id
                        ? 'text-primary font-medium'
                        : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile MenuIcon Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden bg-transparent text-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col w-full">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id} className="w-full">
                    <NavigationMenuLink
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block w-full px-8 py-5 text-base font-normal transition-colors duration-200 hover:bg-muted cursor-pointer ${
                        activeSection === item.id
                          ? 'text-primary font-medium bg-muted'
                          : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </nav>
    </header>
  );
}
