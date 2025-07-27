import React, { useState } from "react";
import Button from "../components/ui/Button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card.jsx";
import styles from "./Index.module.css";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img 
              src="/lovable-uploads/334005dd-80e7-4825-bc33-bbadac816dfa.png" 
              alt="Bitwave Logo" 
              className={styles.logoImage}
            />
            <div>
              <span className={styles.logoText}>Bitwave</span>
              <p className={styles.logoSubtext}>NASA Space Challenge</p>
            </div>
          </div>
          <div className={styles.navButtons}>
            <Button 
              variant="ghost" 
              className={styles.loginButton}
              onClick={() => setIsLoginOpen(!isLoginOpen)}
            >
              Login
            </Button>
            <Button 
              className={styles.startButton}
              onClick={() => window.location.href = '/quiz'}
            >
              Começar Quiz
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>NASA Space Challenge 2024</span>
          </div>
          <h1 className={styles.heroTitle}>
            Explore o <span className={styles.heroGradient}>Cosmos</span>
          </h1>
          <p className={styles.heroDescription}>
            Teste seus conhecimentos sobre astronomia, exploração espacial e as missões da NASA. 
            Ganhe certificados oficiais e se torne um expert em ciências espaciais.
          </p>
          <div className={styles.heroButtons}>
            <Button 
              size="lg" 
              className={styles.missionButton}
              onClick={() => window.location.href = '/quiz'}
            >
              🚀 Iniciar Missão
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className={styles.exploreButton}
            >
              🌍 Explorar API NASA
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>
            Sua Jornada Espacial
          </h2>
          <p className={styles.featuresDescription}>
            Explore o universo através de desafios baseados nos dados reais da NASA
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          <Card className={styles.featureCard}>
            <CardHeader className={styles.featureCardHeader}>
              <div className={styles.featureIcon}>
                🛰️
              </div>
              <CardTitle className={styles.featureCardTitle}>Dados da NASA</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className={styles.featureCardDescription}>
                Questões baseadas em dados reais da API da NASA sobre missões, planetas e descobertas
              </CardDescription>
            </CardContent>
          </Card>

          <Card className={styles.featureCard}>
            <CardHeader className={styles.featureCardHeader}>
              <div className={styles.featureIcon}>
                🌍
              </div>
              <CardTitle className={styles.featureCardTitle}>20 Questões Espaciais</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className={styles.featureCardDescription}>
                Responda perguntas sobre astronomia, missões espaciais e exploração do cosmos
              </CardDescription>
            </CardContent>
          </Card>

          <Card className={styles.featureCard}>
            <CardHeader className={styles.featureCardHeader}>
              <div className={styles.featureIcon}>
                🏆
              </div>
              <CardTitle className={styles.featureCardTitle}>Certificado NASA</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className={styles.featureCardDescription}>
                Conquiste 70% de acertos e receba seu certificado oficial do Bitwave Space Challenge
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsContainer}>
          <div className={styles.statsHeader}>
            <h2 className={styles.statsTitle}>
              NASA Space Challenge Stats
            </h2>
            <p className={styles.statsDescription}>
              Exploradores espaciais já embarcaram nesta jornada cósmica
            </p>
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2.5K+</div>
              <div className={styles.statLabel}>Astronautas Digitais</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Missões Espaciais</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Dados NASA Processados</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1.2K+</div>
              <div className={styles.statLabel}>Certificados Conquistados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <div className={styles.footerIcon}>🚀</div>
            <span className={styles.footerTitle}>Bitwave</span>
          </div>
          <p className={styles.footerText}>NASA Space Challenge 2024</p>
          <p className={styles.footerCopyright}>
            Desenvolvido com dados da NASA API • © 2024 Bitwave Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;