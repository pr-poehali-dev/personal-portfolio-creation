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
    title: 'Свадебная фотосессия',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    description: 'Романтическая церемония в классическом стиле'
  },
  {
    id: 2,
    title: 'Портретная съемка',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    description: 'Индивидуальная фотосессия в студии'
  },
  {
    id: 3,
    title: 'Семейная съемка',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
    description: 'Теплая семейная фотосессия на природе'
  },
  {
    id: 4,
    title: 'Love Story',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
    description: 'История любви в городских локациях'
  },
  {
    id: 5,
    title: 'Детская фотосессия',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    description: 'Искренние эмоции малышей'
  },
  {
    id: 6,
    title: 'Фэшн съемка',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    description: 'Стильная фотосессия для портфолио'
  }
];

const services = [
  {
    icon: 'Heart',
    title: 'Свадебная съемка',
    description: 'Запечатлею самый важный день вашей жизни с вниманием к каждой детали и эмоции'
  },
  {
    icon: 'User',
    title: 'Портретная фотография',
    description: 'Индивидуальные и семейные портреты, раскрывающие вашу уникальность'
  },
  {
    icon: 'Trees',
    title: 'Съемка на природе',
    description: 'Фотосессии в живописных природных локациях с использованием естественного света'
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
            <h1 className="text-2xl font-bold gradient-text">Фотограф</h1>
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
              Запечатлеваю<br />моменты жизни
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная фотосъемка для ваших особенных событий. 
              Более 200 довольных клиентов за 5 лет работы.
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
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Избранные работы, демонстрирующие мой взгляд на искусство фотографии
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {(['all', 'web', 'mobile', 'branding'] as Category[]).map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={activeCategory === category ? 'gradient-primary' : 'hover:scale-105 transition-transform'}
              >
                {category === 'all' ? 'Все' : category === 'web' ? 'Свадьбы' : category === 'mobile' ? 'Портреты' : 'Семьи'}
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

              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная фотосъемка для любых целей и событий
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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


            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Фотограф</h3>
              <p className="text-background/70">© 2025 Все права защищены</p>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:+79502855685" className="hover:opacity-70 transition-opacity text-sm">
                +7 (950) 285 56-85
              </a>
              <span className="text-background/50">•</span>
              <a href="mailto:myrlinmag@gmail.com" className="hover:opacity-70 transition-opacity text-sm">
                myrlinmag@gmail.com
              </a>
            </div>

            <div className="flex gap-6">
              <a href="https://t.me/pupukaka228666" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Icon name="Send" size={24} />
              </a>
              <a href="https://vk.com/id706646370" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.97h-1.34c-.7 0-.91-.56-2.16-1.81-1.09-1.04-1.58-1.18-1.85-1.18-.38 0-.49.11-.49.63v1.65c0 .45-.14.72-1.34.72-1.99 0-4.21-1.21-5.77-3.46C3.51 10.3 3 8.04 3 7.59c0-.27.11-.52.63-.52h1.34c.47 0 .65.21.83.72.93 2.69 2.49 5.04 3.13 5.04.24 0 .35-.11.35-.72V9.38c-.07-1.19-.7-1.29-.7-1.71 0-.22.18-.43.47-.43h2.11c.39 0 .54.22.54.68v3.66c0 .39.18.54.29.54.24 0 .43-.15.87-.59 1.36-1.54 2.34-3.92 2.34-3.92.13-.27.34-.52.81-.52h1.34c.56 0 .68.29.56.68-.21.96-2.47 4.15-2.47 4.15-.2.33-.28.48 0 .85.2.28.87.85 1.32 1.37.82.9 1.45 1.65 1.62 2.18.17.52-.09.78-.61.78z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}