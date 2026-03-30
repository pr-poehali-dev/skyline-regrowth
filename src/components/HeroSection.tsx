import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80',
    label: 'Быстрое решение проблем',
  },
  {
    bg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80',
    label: 'Удалённая поддержка 24/7',
  },
  {
    bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
    label: 'Настройка оборудования',
  },
  {
    bg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
    label: 'Обслуживание бизнеса',
  },
];

const services = [
  { icon: 'Monitor', text: 'Компьютеры и ноутбуки' },
  { icon: 'Wifi', text: 'Сети и роутеры' },
  { icon: 'Shield', text: 'Антивирусная защита' },
  { icon: 'Settings', text: 'Настройка ПО' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.bg}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={slide.bg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                <img
                  src="/placeholder-user.jpg"
                  alt="Специалист технической поддержки"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-3">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Техническая поддержка
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Оператор IT-поддержки | Решаю проблемы быстро
                </p>
                <p className="text-base text-white/60 max-w-md pt-1">
                  Помогу с настройкой компьютера, сети, программ и оборудования — удалённо или с выездом.
                </p>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="grid grid-cols-2 gap-3 max-w-md">
                {services.map((s) => (
                  <div key={s.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                    <Icon name={s.icon} size={18} className="text-blue-300 shrink-0" />
                    <span className="text-white/90 text-sm">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex gap-4">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Написать в Telegram
                </a>
                <a
                  href="tel:+7"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  <Icon name="Phone" size={18} />
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 z-20">
        <span className="text-white/50 text-sm">{slides[currentIndex].label}</span>
      </div>
    </section>
  );
}
