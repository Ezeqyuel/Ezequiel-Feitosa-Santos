import { Component, ChangeDetectionStrategy, signal, inject, ElementRef, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string; // Will now hold SVG markup
  title: string;
  description: string;
  slogan: string;
}

interface Stat {
  icon: string;
  label: string;
  targetValue: number;
  suffix: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesSectionComponent {
  private elementRef = inject(ElementRef);
  private observer?: IntersectionObserver;
  private animationStarted = signal(false);

  features = signal<Feature[]>([
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
      title: 'Automação de E-mail Marketing',
      description: 'Crie e envie campanhas de e-mail personalizadas e automatizadas que convertem. Segmentação avançada e relatórios detalhados.',
      slogan: 'Comunicação que converte.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      title: 'Gestão de Leads e CRM',
      description: 'Organize, acompanhe e nutra seus leads com um CRM integrado. Não perca nenhuma oportunidade de negócio.',
      slogan: 'Cada lead, uma oportunidade.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="m13 8-4 5h3l-1 4"></path></svg>`,
      title: 'Chatbots e Engajamento',
      description: 'Atenda seus clientes 24/7 com chatbots inteligentes e personalize a experiência do usuário em tempo real.',
      slogan: 'Conexão instantânea, 24/7.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`,
      title: 'Análise e Relatórios',
      description: 'Monitore o desempenho de suas campanhas com dashboards intuitivos e insights acionáveis para otimização contínua.',
      slogan: 'Decisões baseadas em dados.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
      title: 'Segmentação Inteligente',
      description: 'Divida sua audiência em grupos específicos para mensagens mais relevantes e impactantes, aumentando a taxa de conversão.',
      slogan: 'A mensagem certa, para a pessoa certa.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>`,
      title: 'Integrações Simplificadas',
      description: 'Conecte-se facilmente com suas ferramentas favoritas e plataformas existentes para um fluxo de trabalho unificado.',
      slogan: 'Seu ecossistema, unificado.'
    }
  ]);

  stats = signal<Stat[]>([
    { icon: 'fa-solid fa-heart', label: 'Clientes Satisfeitos', targetValue: 1000, suffix: '+' },
    { icon: 'fa-solid fa-server', label: 'Uptime Garantido', targetValue: 99, suffix: '%' },
    { icon: 'fa-solid fa-headset', label: 'Suporte Dedicado', targetValue: 24, suffix: '/7' },
    { icon: 'fa-solid fa-puzzle-piece', label: 'Integrações Ativas', targetValue: 50, suffix: '+' }
  ]);

  // Cria um array de sinais, um para cada valor animado da estatística
  animatedValues = this.stats().map(stat => signal(0));

  constructor() {
    afterNextRender(() => {
      const options = {
        root: null, // relativo à viewport do documento
        rootMargin: '0px',
        threshold: 0.5 // aciona quando 50% do elemento está visível
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animationStarted()) {
            this.startAnimation();
            this.animationStarted.set(true);
            this.observer?.disconnect(); // Anima apenas uma vez para evitar re-acionamento
          }
        });
      }, options);

      const statsSection = this.elementRef.nativeElement.querySelector('#stats-section');
      if (statsSection) {
        this.observer.observe(statsSection);
      }
    });
  }

  startAnimation(): void {
    const duration = 2000; // Duração da animação em milissegundos

    this.stats().forEach((stat, index) => {
      const startValue = 0;
      const endValue = stat.targetValue;
      const valueSignal = this.animatedValues[index];

      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Função de ease-out para uma parada mais suave
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easedProgress * (endValue - startValue) + startValue);

        valueSignal.set(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          valueSignal.set(endValue); // Garante que termine no valor exato
        }
      };

      requestAnimationFrame(animate);
    });
  }
}