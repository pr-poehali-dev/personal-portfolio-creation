import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

type Category = 'all' | 'web' | 'mobile' | 'branding';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Современный интернет-магазин с интуитивным UX'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    description: 'Мобильное приложение для управления финансами'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    description: 'Комплексная айдентика для стартапа'
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Аналитическая панель для B2B-сервиса'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=800&q=80',
    description: 'Приложение для отслеживания тренировок'
  },
  {
    id: 6,
    title: 'Cafe Branding',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    description: 'Визуальная концепция для кофейни'
  }
];

const services = [
  {
    icon: 'Layout',
    title: 'Web Design',
    description: 'Создание современных и адаптивных веб-интерфейсов с фокусом на пользовательский опыт'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Apps',
    description: 'Разработка мобильных приложений для iOS и Android с нативным UX'
  },
  {
    icon: 'Palette',
    title: 'Branding',
    description: 'Разработка фирменного стиля, логотипов и визуальной айдентики'
  },
  {
    icon: 'Code',
    title: 'Development',
    description: 'Фронтенд и фулстек разработка с использованием современных технологий'
  }
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все поля',
        variant: 'destructive'
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: 'Ошибка',
        description: 'Некорректный email адрес',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Успешно!',
      description: 'Ваше сообщение отправлено'
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Создаю цифровые<br />продукты
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современный дизайн и разработка для вашего бизнеса. 
              Более 50 успешных проектов за 3 года работы.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => scrollToSection('portfolio')} size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
                Смотреть работы
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Связаться
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="animate-slide-up">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Проектов</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold gradient-text">30+</div>
              <div className="text-sm text-muted-foreground">Клиентов</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold gradient-text">3</div>
              <div className="text-sm text-muted-foreground">Года опыта</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Качество</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Избранные проекты, демонстрирующие мой подход к дизайну и разработке
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {(['all', 'web', 'mobile', 'branding'] as Category[]).map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={activeCategory === category ? 'gradient-primary' : 'hover:scale-105 transition-transform'}
              >
                {category === 'all' ? 'Все' : category === 'web' ? 'Web' : category === 'mobile' ? 'Mobile' : 'Branding'}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {item.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексные решения для вашего цифрового присутствия
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Готов обсудить ваш проект. Напишите мне!
          </p>

          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="border-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="border-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте"
                    rows={5}
                    className="border-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary hover:opacity-90 transition-opacity">
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <a href="mailto:myrlinmag@gmail.com" className="hover:text-primary transition-colors">
                    myrlinmag@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <a href="tel:+79502855685" className="hover:text-primary transition-colors">
                    +7 (950) 285-56-85
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
              <p className="text-background/70">© 2024 Все права защищены</p>
            </div>

            <div className="flex gap-6">
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Icon name="Send" size={24} />
              </a>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Icon name="Github" size={24} />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
