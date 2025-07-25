import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Satellite, Globe, Star, Users, Trophy } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-space-warm/10 to-space-secondary/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/334005dd-80e7-4825-bc33-bbadac816dfa.png" 
              alt="Bitwave Logo" 
              className="w-10 h-10 rounded-xl"
            />
            <div>
              <span className="text-xl font-bold text-space-primary">Bitwave</span>
              <p className="text-xs text-space-neutral">NASA Space Challenge</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="text-space-primary hover:text-space-secondary">
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-space-primary">Acesse sua conta</DialogTitle>
                  <DialogDescription>
                    Entre para participar dos desafios espaciais da NASA
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Cadastrar</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full bg-space-secondary hover:bg-space-secondary/90">
                      Entrar
                    </Button>
                  </TabsContent>
                  <TabsContent value="register" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-reg">Email</Label>
                      <Input id="email-reg" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-reg">Senha</Label>
                      <Input id="password-reg" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full bg-space-accent hover:bg-space-accent/90">
                      Criar conta
                    </Button>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            <Button className="bg-gradient-to-r from-space-secondary to-space-accent hover:opacity-90 text-white shadow-lg" onClick={() => window.location.href = '/quiz'}>
              Começar Quiz
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-space-secondary/10 px-4 py-2 rounded-full mb-6">
              <Satellite className="w-4 h-4 text-space-secondary" />
              <span className="text-sm font-medium text-space-secondary">NASA Space Challenge 2024</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-space-primary mb-6">
            Explore o <span className="bg-gradient-to-r from-space-secondary to-space-accent bg-clip-text text-transparent">Cosmos</span>
          </h1>
          <p className="text-xl text-space-neutral mb-8 max-w-2xl mx-auto">
            Teste seus conhecimentos sobre astronomia, exploração espacial e as missões da NASA. 
            Ganhe certificados oficiais e se torne um expert em ciências espaciais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-space-secondary to-space-accent hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg" onClick={() => window.location.href = '/quiz'}>
              <Rocket className="w-5 h-5 mr-2" />
              Iniciar Missão
            </Button>
            <Button size="lg" variant="outline" className="border-space-secondary text-space-secondary hover:bg-space-secondary hover:text-white px-8 py-6 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Explorar API NASA
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-space-primary mb-4">
            Sua Jornada Espacial
          </h2>
          <p className="text-lg text-space-neutral max-w-2xl mx-auto">
            Explore o universo através de desafios baseados nos dados reais da NASA
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-space-warm/30 hover:border-space-secondary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-space-secondary/20 to-space-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Satellite className="w-8 h-8 text-space-secondary" />
              </div>
              <CardTitle className="text-space-primary">Dados da NASA</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-space-neutral">
                Questões baseadas em dados reais da API da NASA sobre missões, planetas e descobertas
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-space-warm/30 hover:border-space-accent/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-space-accent/20 to-space-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-space-accent" />
              </div>
              <CardTitle className="text-space-primary">20 Questões Espaciais</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-space-neutral">
                Responda perguntas sobre astronomia, missões espaciais e exploração do cosmos
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-space-warm/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-space-primary">Certificado NASA</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-space-neutral">
                Conquiste 70% de acertos e receba seu certificado oficial do Bitwave Space Challenge
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-space-secondary/10 via-space-accent/10 to-space-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-space-primary mb-4">
              NASA Space Challenge Stats
            </h2>
            <p className="text-lg text-space-neutral">
              Exploradores espaciais já embarcaram nesta jornada cósmica
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-space-secondary to-space-accent bg-clip-text text-transparent mb-2">2.5K+</div>
              <div className="text-space-neutral">Astronautas Digitais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-space-secondary to-space-accent bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-space-neutral">Missões Espaciais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-space-secondary to-space-accent bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-space-neutral">Dados NASA Processados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-space-secondary to-space-accent bg-clip-text text-transparent mb-2">1.2K+</div>
              <div className="text-space-neutral">Certificados Conquistados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-space-secondary to-space-accent rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-space-primary">Bitwave</span>
          </div>
          <p className="text-space-neutral mb-2">NASA Space Challenge 2024</p>
          <p className="text-sm text-space-neutral/70">
            Desenvolvido com dados da NASA API • &copy; 2024 Bitwave Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;