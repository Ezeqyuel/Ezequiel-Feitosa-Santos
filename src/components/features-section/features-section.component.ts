import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string; // Placeholder for icon class or SVG name
  title: string;
  description: string;
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
  features = signal<Feature[]>([
    {
      icon: 'fa-solid fa-envelope',
      title: 'Automação de E-mail Marketing',
      description: 'Crie e envie campanhas de e-mail personalizadas e automatizadas que convertem. Segmentação avançada e relatórios detalhados.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Gestão de Leads e CRM',
      description: 'Organize, acompanhe e nutra seus leads com um CRM integrado. Não perca nenhuma oportunidade de negócio.'
    },
    {
      icon: 'fa-solid fa-comments',
      title: 'Chatbots e Engajamento',
      description: 'Atenda seus clientes 24/7 com chatbots inteligentes e personalize a experiência do usuário em tempo real.'
    },
    {
      icon: 'fa-solid fa-chart-column',
      title: 'Análise e Relatórios',
      description: 'Monitore o desempenho de suas campanhas com dashboards intuitivos e insights acionáveis para otimização contínua.'
    },
    {
      icon: 'fa-solid fa-crosshairs',
      title: 'Segmentação Inteligente',
      description: 'Divida sua audiência em grupos específicos para mensagens mais relevantes e impactantes, aumentando a taxa de conversão.'
    },
    {
      icon: 'fa-solid fa-link',
      title: 'Integrações Simplificadas',
      description: 'Conecte-se facilmente com suas ferramentas favoritas e plataformas existentes para um fluxo de trabalho unificado.'
    }
  ]);
}