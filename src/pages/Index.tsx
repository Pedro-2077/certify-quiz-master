import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, BookOpen, Users, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-quiz-warm/10 to-quiz-accent/20">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/90">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/334005dd-80e7-4825-bc33-bbadac816dfa.png" 
              alt="CertifyQuiz Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-2xl font-bold text-quiz-primary">CertifyQuiz</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-quiz-primary hover:text-quiz-secondary">
              Login
            </Button>
            <Button className="bg-quiz-secondary hover:bg-quiz-secondary/90 text-white">
              Cadastrar
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-quiz-accent/20 text-quiz-secondary border-quiz-accent/30">
            ✨ Certificação Digital Oficial
          </Badge>
          <h2 className="text-5xl font-bold text-quiz-primary mb-6 leading-tight">
            Teste seus conhecimentos e 
            <span className="text-quiz-secondary"> obtenha certificados</span>
          </h2>
          <p className="text-xl text-quiz-neutral mb-8 max-w-2xl mx-auto">
            Plataforma educacional moderna que oferece quizzes especializados e certificados digitais 
            para validar suas competências profissionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-quiz-secondary hover:bg-quiz-secondary/90 text-white">
              Começar Teste Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-quiz-secondary text-quiz-secondary hover:bg-quiz-secondary hover:text-white">
              Ver Certificados
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-quiz-primary mb-4">Como funciona</h3>
          <p className="text-quiz-neutral max-w-2xl mx-auto">
            Processo simples e eficiente para validar seus conhecimentos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-quiz-warm/30 hover:shadow-lg hover:shadow-quiz-accent/20 transition-all">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-quiz-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-quiz-secondary" />
              </div>
              <CardTitle className="text-quiz-primary">1. Escolha o Tema</CardTitle>
              <CardDescription className="text-quiz-neutral">
                Selecione entre diversos temas e áreas de conhecimento disponíveis
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-quiz-warm/30 hover:shadow-lg hover:shadow-quiz-accent/20 transition-all">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-quiz-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-quiz-secondary" />
              </div>
              <CardTitle className="text-quiz-primary">2. Responda 20 Questões</CardTitle>
              <CardDescription className="text-quiz-neutral">
                Complete o quiz com questões de múltipla escolha selecionadas aleatoriamente
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-quiz-warm/30 hover:shadow-lg hover:shadow-quiz-accent/20 transition-all">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-quiz-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-quiz-secondary" />
              </div>
              <CardTitle className="text-quiz-primary">3. Obtenha seu Certificado</CardTitle>
              <CardDescription className="text-quiz-neutral">
                Acerte mais de 70% e receba seu certificado digital em PDF
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-quiz-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-quiz-accent mb-2">10,000+</div>
              <div className="text-quiz-warm">Certificados Emitidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-quiz-accent mb-2">50+</div>
              <div className="text-quiz-warm">Áreas de Conhecimento</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-quiz-accent mb-2">95%</div>
              <div className="text-quiz-warm">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-quiz-primary mb-4">
            Pronto para validar seus conhecimentos?
          </h3>
          <p className="text-quiz-neutral mb-8">
            Junte-se a milhares de profissionais que já certificaram suas competências conosco.
          </p>
          <Button size="lg" className="bg-quiz-secondary hover:bg-quiz-secondary/90 text-white">
            Começar Agora - É Grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-quiz-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/334005dd-80e7-4825-bc33-bbadac816dfa.png" 
              alt="CertifyQuiz Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-quiz-primary font-semibold">CertifyQuiz</span>
          </div>
          <p className="text-quiz-neutral text-sm">
            © 2024 CertifyQuiz. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
