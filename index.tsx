
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component';
// fix: Replaced withAnchorScrolling with withInMemoryScrolling as it is the correct function.
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './src/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes, 
      withHashLocation(), 
      // fix: Correctly configure anchor scrolling using withInMemoryScrolling.
      withInMemoryScrolling({ anchorScrolling: 'enabled' })
    )
  ]
}).catch(err => console.error(err));
    

// AI Studio always uses an `index.tsx` file for all project types.
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Barber - Estilo e Sofisticação</title>
    <meta name="description" content="Barbearia Premium - Onde tradição encontra modernidade. Cortes exclusivos, ambiente sofisticado e atendimento diferenciado.">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gold: #d4af37;
            --dark-gold: #b8941f;
            --bronze: #cd7f32;
            --black: #0a0a0a;
            --dark-gray: #1a1a1a;
            --medium-gray: #2d2d2d;
            --light-gray: #f5f5f5;
            --white: #ffffff;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            color: #333;
            line-height: 1.7;
            overflow-x: hidden;
        }

        /* Header/Hero Luxuoso */
        .hero {
            min-height: 100vh;
            background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.90) 100%),
                        linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a),
                        linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a);
            background-size: 100% 100%, 60px 60px, 60px 60px;
            background-position: 0 0, 0 0, 30px 30px;
            background-color: #0a0a0a;
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%);
        }

        .hero::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212,175,55,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            animation: moveGrid 60s linear infinite;
            opacity: 0.3;
        }

        @keyframes moveGrid {
            0% { transform: translate(0, 0); }
            100% { transform: translate(40px, 40px); }
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 1000px;
            padding: 40px 20px;
            animation: fadeInUp 1.2s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .logo-ornament {
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            margin: 0 auto 30px;
            animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% { opacity: 0.5; box-shadow: 0 0 10px var(--gold); }
            50% { opacity: 1; box-shadow: 0 0 20px var(--gold), 0 0 30px var(--gold); }
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 5em;
            font-weight: 900;
            margin-bottom: 15px;
            color: var(--gold);
            text-transform: uppercase;
            letter-spacing: 8px;
            text-shadow: 
                2px 2px 4px rgba(0,0,0,0.8),
                0 0 40px rgba(212,175,55,0.3);
            animation: fadeInUp 1.2s ease-out 0.3s backwards;
        }

        .tagline {
            font-size: 1.5em;
            margin-bottom: 20px;
            color: var(--light-gray);
            font-weight: 300;
            letter-spacing: 3px;
            animation: fadeInUp 1.2s ease-out 0.6s backwards;
        }

        .hero-description {
            font-size: 1.15em;
            max-width: 700px;
            margin: 0 auto 40px;
            color: rgba(255,255,255,0.85);
            line-height: 1.8;
            animation: fadeInUp 1.2s ease-out 0.9s backwards;
        }

        .cta-container {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 1.2s ease-out 1.2s backwards;
        }

        .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, var(--gold), var(--bronze));
            color: var(--black);
            padding: 18px 45px;
            text-decoration: none;
            border-radius: 0;
            font-weight: 600;
            font-size: 1em;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            border: 2px solid var(--gold);
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
            background: linear-gradient(135deg, var(--bronze), var(--gold));
        }

        .cta-secondary {
            background: transparent;
            color: var(--gold);
            border: 2px solid var(--gold);
        }

        .cta-secondary:hover {
            background: var(--gold);
            color: var(--black);
        }

        /* Scroll Indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--gold);
            font-size: 2em;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(10px); }
        }

        /* Sections */
        section {
            padding: 120px 20px;
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
        }

        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }

        .section-label {
            font-size: 0.9em;
            color: var(--gold);
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 15px;
        }

        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 3.5em;
            margin-bottom: 20px;
            color: var(--dark-gray);
            font-weight: 700;
            position: relative;
            display: inline-block;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .section-description {
            max-width: 700px;
            margin: 30px auto 0;
            font-size: 1.1em;
            color: #666;
            line-height: 1.9;
        }

        /* Serviços Premium */
        .servicos {
            background: linear-gradient(180deg, var(--white) 0%, var(--light-gray) 100%);
        }

        .servicos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 40px;
            margin-top: 60px;
        }

        .servico-card {
            background: var(--white);
            border-radius: 0;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(212, 175, 55, 0.2);
            position: relative;
        }

        .servico-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--gold), var(--bronze));
            transform: scaleX(0);
            transition: transform 0.5s;
        }

        .servico-card:hover::before {
            transform: scaleX(1);
        }

        .servico-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            border-color: var(--gold);
        }

        .servico-img-container {
            height: 240px;
            overflow: hidden;
            position: relative;
            background: linear-gradient(135deg, var(--dark-gray), var(--medium-gray));
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .servico-img {
            font-size: 6em;
            transition: transform 0.6s;
        }

        .servico-card:hover .servico-img {
            transform: scale(1.2) rotate(5deg);
        }

        .servico-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.8), rgba(205, 127, 50, 0.8));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4em;
            opacity: 0;
            transition: opacity 0.4s;
        }

        .servico-card:hover .servico-overlay {
            opacity: 1;
        }

        .servico-content {
            padding: 35px;
        }

        .servico-card h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8em;
            color: var(--dark-gray);
            margin-bottom: 15px;
            font-weight: 700;
        }

        .servico-card p {
            color: #666;
            line-height: 1.8;
            margin-bottom: 20px;
        }

        .preco {
            color: var(--gold);
            font-size: 2em;
            font-weight: 700;
            font-family: 'Playfair Display', serif;
        }

        /* Galeria Luxo */
        .galeria {
            background: var(--dark-gray);
            color: var(--white);
        }

        .galeria h2 {
            color: var(--white);
        }

        .galeria-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 60px;
        }

        .galeria-item {
            height: 400px;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            background: linear-gradient(135deg, var(--dark-gray), var(--gold));
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .galeria-img {
            font-size: 5em;
            transition: transform 0.8s;
        }

        .galeria-item:hover .galeria-img {
            transform: scale(1.15) rotate(-5deg);
        }

        .galeria-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(10,10,10,0.7), rgba(212,175,55,0.5));
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.4s;
        }

        .galeria-item:hover .galeria-overlay {
            opacity: 1;
        }

        .galeria-overlay-icon {
            font-size: 3em;
            margin-bottom: 15px;
        }

        .galeria-overlay-text {
            font-size: 1.3em;
            font-weight: 600;
            letter-spacing: 2px;
        }

        /* Sobre Premium */
        .sobre {
            background: linear-gradient(180deg, var(--light-gray) 0%, var(--white) 100%);
        }

        .sobre-content {
            max-width: 900px;
            margin: 60px auto 0;
            text-align: center;
        }

        .sobre-text {
            font-size: 1.2em;
            line-height: 2;
            color: #555;
            margin-bottom: 30px;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-top: 60px;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 3.5em;
            color: var(--gold);
            font-weight: 700;
            margin-bottom: 10px;
        }

        .stat-label {
            font-size: 1em;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Contato Elegante */
        .contato {
            background: linear-gradient(135deg, rgba(10,10,10,0.98), rgba(26,26,26,0.98)),
                        repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.03) 10px, rgba(212,175,55,0.03) 20px);
            background-color: var(--black);
            color: var(--white);
        }

        .contato h2, .contato .section-label {
            color: var(--white);
        }

        .contato-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 60px;
        }

        .contato-card {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            padding: 40px;
            text-align: center;
            border: 1px solid rgba(212,175,55,0.3);
            transition: all 0.4s;
        }

        .contato-card:hover {
            background: rgba(212,175,55,0.1);
            border-color: var(--gold);
            transform: translateY(-5px);
        }

        .contato-icon {
            font-size: 3em;
            color: var(--gold);
            margin-bottom: 20px;
        }

        .contato-card h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.6em;
            margin-bottom: 15px;
            color: var(--gold);
        }

        .contato-card p {
            font-size: 1.1em;
            line-height: 1.8;
            color: rgba(255,255,255,0.85);
        }

        /* Footer Premium */
        footer {
            background: var(--black);
            color: #999;
            text-align: center;
            padding: 50px 20px;
            border-top: 1px solid rgba(212,175,55,0.2);
        }

        .footer-logo {
            font-family: 'Playfair Display', serif;
            font-size: 2em;
            color: var(--gold);
            margin-bottom: 20px;
            font-weight: 700;
        }

        /* WhatsApp Premium */
        .whatsapp-float {
            position: fixed;
            bottom: 40px;
            right: 40px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            color: white;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 35px;
            box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
            cursor: pointer;
            transition: all 0.4s;
            text-decoration: none;
            z-index: 1000;
            animation: pulse 3s infinite;
        }

        @keyframes pulse {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
            }
            50% { 
                transform: scale(1.05);
                box-shadow: 0 12px 40px rgba(37, 211, 102, 0.7);
            }
        }

        .whatsapp-float:hover {
            transform: scale(1.1) rotate(10deg);
            box-shadow: 0 15px 50px rgba(37, 211, 102, 0.8);
        }

        /* Responsivo */
        @media (max-width: 768px) {
            .logo {
                font-size: 3em;
                letter-spacing: 4px;
            }

            h2 {
                font-size: 2.5em;
            }

            section {
                padding: 80px 20px;
            }

            .servicos-grid,
            .galeria-grid {
                grid-template-columns: 1fr;
            }

            .cta-container {
                flex-direction: column;
                align-items: stretch;
            }

            .cta-button {
                width: 100%;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <!-- Hero Premium -->
    <div class="hero">
        <div class="hero-content">
            <div class="logo-ornament"></div>
            <h1 class="logo">PREMIUM</h1>
            <p class="tagline">BARBER STUDIO</p>
            <p class="hero-description">
                Onde tradição encontra excelência. Experimente o verdadeiro luxo em cortes masculinos, 
                com atendimento personalizado e ambiente sofisticado.
            </p>
            <div class="cta-container">
                <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário" class="cta-button">
                    💬 Agendar Horário
                </a>
                <a href="#servicos" class="cta-button cta-secondary">
                    Nossos Serviços
                </a>
            </div>
        </div>
        <div class="scroll-indicator">↓</div>
    </div>

    <!-- Serviços -->
    <section class="servicos" id="servicos">
        <div class="section-header">
            <div class="section-label">Experiências Exclusivas</div>
            <h2>Nossos Serviços</h2>
            <p class="section-description">
                Cada serviço é uma experiência única, executada por profissionais qualificados 
                que dominam tanto técnicas clássicas quanto tendências modernas.
            </p>
        </div>
        <div class="servicos-grid">
            <div class="servico-card">
                <div class="servico-img-container">
                    <div class="servico-img">✂️</div>
                    <div class="servico-overlay">✂️</div>
                </div>
                <div class="servico-content">
                    <h3>Corte Premium</h3>
                    <p>Corte personalizado com técnicas modernas, acabamento impecável e consultoria de estilo.</p>
                    <div class="preco">R$ 60</div>
                </div>
            </div>
            <div class="servico-card">
                <div class="servico-img-container">
                    <div class="servico-img">🪒</div>
                    <div class="servico-overlay">🪒</div>
                </div>
                <div class="servico-content">
                    <h3>Barba Clássica</h3>
                    <p>Ritual completo com toalha quente, óleos especiais e acabamento de navalha tradicional.</p>
                    <div class="preco">R$ 45</div>
                </div>
            </div>
            <div class="servico-card">
                <div class="servico-img-container">
                    <div class="servico-img">👑</div>
                    <div class="servico-overlay">👑</div>
                </div>
                <div class="servico-content">
                    <h3>Royal Package</h3>
                    <p>Experiência completa: corte, barba, massagem relaxante e tratamentos faciais premium.</p>
                    <div class="preco">R$ 95</div>
                </div>
            </div>
            <div class="servico-card">
                <div class="servico-img-container">
                    <div class="servico-img">🎨</div>
                    <div class="servico-overlay">🎨</div>
                </div>
                <div class="servico-content">
                    <h3>Coloração Exclusiva</h3>
                    <p>Platinados, luzes e colorações com produtos de alta qualidade e técnicas profissionais.</p>
                    <div class="preco">R$ 100</div>
                </div>
            </div>
            <div class="servico-card">
                <div class="servico-img-container">
                    <div class="servico-img">✨</div>
                    <div class="servico-overlay">✨</div>
                </div>
                <div class="servico-content">
                    <h3>Tratamentos Faciais</h3>
                    <p>Limpeza de pele, hidratação profunda e tratamentos anti-idade para cuidado completo.</p>
                    <div class="preco">R$ 80</div>
                </div>
            </div>
            <div class="servico-card">
                <div class="servico-img-container">
                    <div class="servico-img">👶</div>
                    <div class="servico-overlay">👶</div>
                </div>
                <div class="servico-content">
                    <h3>Kids Premium</h3>
                    <p>Corte infantil com atendimento especializado, ambiente lúdico e toda atenção que merecem.</p>
                    <div class="preco">R$ 40</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sobre -->
    <section class="sobre">
        <div class="section-header">
            <div class="section-label">Nossa História</div>
            <h2>Excelência e Tradição</h2>
        </div>
        <div class="sobre-content">
            <p class="sobre-text">
                Há mais de uma década, redefinimos o conceito de barbearia tradicional. Unimos técnicas 
                clássicas de barbear com as tendências mais modernas, criando uma experiência única para 
                homens que valorizam qualidade e estilo.
            </p>
            <p class="sobre-text">
                Nossa equipe é formada por barbeiros apaixonados e altamente qualificados, que transformam 
                cada atendimento em um momento de relaxamento e renovação. Aqui, cada detalhe importa.
            </p>
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Anos de Experiência</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">5000+</div>
                    <div class="stat-label">Clientes Satisfeitos</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Dedicação</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Galeria -->
    <section class="galeria">
        <div class="section-header">
            <div class="section-label">Portfolio</div>
            <h2>Nossos Trabalhos</h2>
            <p class="section-description">
                Cada corte conta uma história. Veja alguns dos nossos melhores trabalhos.
            </p>
        </div>
        <div class="galeria-grid">
            <div class="galeria-item">
                <div class="galeria-img">✂️</div>
                <div class="galeria-overlay">
                    <div class="galeria-overlay-icon">✂️</div>
                    <div class="galeria-overlay-text">FADE PREMIUM</div>
                </div>
            </div>
            <div class="galeria-item">
                <div class="galeria-img">🪒</div>
                <div class="galeria-overlay">
                    <div class="galeria-overlay-icon">🪒</div>
                    <div class="galeria-overlay-text">BARBA CLÁSSICA</div>
                </div>
            </div>
            <div class="galeria-item">
                <div class="galeria-img">💈</div>
                <div class="galeria-overlay">
                    <div class="galeria-overlay-icon">💈</div>
                    <div class="galeria-overlay-text">CORTE EXECUTIVO</div>
                </div>
            </div>
            <div class="galeria-item">
                <div class="galeria-img">🎨</div>
                <div class="galeria-overlay">
                    <div class="galeria-overlay-icon">🎨</div>
                    <div class="galeria-overlay-text">PLATINADO</div>
                </div>
            </div>
            <div class="galeria-item">
                <div class="galeria-img">✨</div>
                <div class="galeria-overlay">
                    <div class="galeria-overlay-icon">✨</div>
                    <div class="galeria-overlay-text">DEGRADÊ</div>
                </div>
            </div>
            <div class="galeria-item">
                <div class="galeria-img">👔</div>
                <div class="galeria-overlay">
                    <div class="galeria-overlay-icon">👔</div>
                    <div class="galeria-overlay-text">ESTILO MODERNO</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section class="contato" id="contato">
        <div class="section-header">
            <div class="section-label">Entre em Contato</div>
            <h2>Agende Sua Visita</h2>
            <p class="section-description">
                Estamos prontos para proporcionar a melhor experiência em barbearia. 
                Entre em contato e reserve seu horário.
            </p>
        </div>
        <div class="contato-grid">
            <div class="contato-card">
                <div class="contato-icon">📍</div>
                <h3>Localização</h3>
                <p>Rua Exemplo, 123<br>Centro - Sua Cidade/SP<br>CEP: 12345-678</p>
            </div>
            <div class="contato-card">
                <div class="contato-icon">⏰</div>
                <h3>Horários</h3>
                <p>Segunda a Sexta: 9h às 20h<br>Sábado: 9h às 18h<br>Domingo: Fechado</p>
            </div>
            <div class="contato-card">
                <div class="contato-icon">📱</div>
                <h3>Contato</h3>
                <p>WhatsApp: (11) 99999-9999<br>Instagram: @premiumbarberstudio<br>contato@premiumbarber.com</p>
            </div>
        </div>
        <div style="text-align: center; margin-top: 60px;">
            <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário" class="cta-button" style="font-size: 1.2em;">
                💬 Agendar pelo WhatsApp
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-logo">PREMIUM BARBER</div>
        <p>Onde estilo encontra sofisticação</p>
        <p style="margin-top: 30px;">&copy; 2025 Premium Barber Studio. Todos os direitos reservados.</p>
        <p style="margin-top: 10px; font-size: 0.85em;">Desenvolvido com excelência 💈</p>
    </footer>

    <!-- WhatsApp Flutuante -->
    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário" class="whatsapp-float" target="_blank" title="Falar no WhatsApp">
        💬
    </a>
</body>
</html>