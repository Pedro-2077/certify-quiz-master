import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowRight, Cat, Home, RotateCcw, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import catAstronaut from "@/assets/cat-astronaut.png";


interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é o nome da primeira missão tripulada da NASA que pousou na Lua?",
    options: ["Apollo 10", "Apollo 11", "Apollo 12", "Apollo 13"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Quantos dias dura um ano em Marte?",
    options: ["365 dias", "687 dias", "225 dias", "1,408 dias"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual é o nome do telescópio espacial mais famoso da NASA?",
    options: ["Kepler", "Spitzer", "Hubble", "James Webb"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
    options: ["Vênus", "Júpiter", "Marte", "Saturno"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Em que ano foi fundada a NASA?",
    options: ["1955", "1958", "1961", "1969"],
    correctAnswer: 1
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());

  const progress = ((currentQuestion + (selectedAnswer ? 1 : 0)) / mockQuestions.length) * 100;
  const catPosition = (currentQuestion / mockQuestions.length) * 100;

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers, parseInt(selectedAnswer)];
      setAnswers(newAnswers);
      
      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        setShowResult(true);
      }
    }
  };

  const timeElapsed = Math.round((Date.now() - startTime) / 1000);
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setAnswers([]);
    setShowResult(false);
  };
  const correctAnswers = answers.filter((answer, index) => answer === mockQuestions[index].correctAnswer).length;
  const percentage = (correctAnswers / mockQuestions.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-space-primary via-space-warm/20 to-space-secondary/20 relative overflow-hidden">
        {/* Background Cat Astronaut */}
        <div 
          className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
          style={{ 
            backgroundImage: `url(${catAstronaut})`,
            backgroundSize: '40%',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <Card className="w-full max-w-2xl border-space-warm/30 shadow-2xl backdrop-blur-sm bg-background/95">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-space-secondary/20 to-space-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-space-secondary" />
              </div>
              <CardTitle className="text-3xl text-space-primary mb-2">
                NASA Space Challenge
              </CardTitle>
              <div className="flex items-center justify-center space-x-4 text-sm text-space-neutral">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{minutes}:{seconds.toString().padStart(2, '0')}</span>
                </div>
                <div>•</div>
                <div>{mockQuestions.length} questões</div>
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="relative">
                <div className="text-8xl font-bold bg-gradient-to-r from-space-secondary to-space-accent bg-clip-text text-transparent">
                  {percentage.toFixed(0)}%
                </div>
                <div className="absolute -top-2 -right-2">
                  {percentage >= 70 ? "🏆" : percentage >= 50 ? "🎯" : "📚"}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-space-warm/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-space-secondary">{correctAnswers}</div>
                  <div className="text-sm text-space-neutral">Acertos</div>
                </div>
                <div className="bg-space-warm/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-500">{mockQuestions.length - correctAnswers}</div>
                  <div className="text-sm text-space-neutral">Erros</div>
                </div>
                <div className="bg-space-warm/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-space-accent">{mockQuestions.length}</div>
                  <div className="text-sm text-space-neutral">Total</div>
                </div>
              </div>

              {percentage >= 70 ? (
                <div className="space-y-4 bg-gradient-to-r from-space-secondary/10 to-space-accent/10 p-6 rounded-lg">
                  <p className="text-lg text-space-secondary font-semibold">
                    🎉 Parabéns! Você conquistou o certificado NASA Space Challenge!
                  </p>
                  <Button className="bg-gradient-to-r from-space-secondary to-space-accent hover:opacity-90 text-white">
                    <Award className="w-4 h-4 mr-2" />
                    Baixar Certificado
                  </Button>
                </div>
              ) : (
                <div className="bg-space-warm/10 p-6 rounded-lg">
                  <p className="text-lg text-space-neutral mb-4">
                    Continue estudando! Você precisa de 70% para conquistar o certificado.
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-space-secondary to-space-accent hover:opacity-90 text-white"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Refazer Quiz
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="border-space-secondary text-space-secondary hover:bg-space-secondary hover:text-white"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-primary via-space-warm/20 to-space-secondary/20 relative overflow-hidden">
      {/* Background Cat Astronaut */}
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
        style={{ 
          backgroundImage: `url(${catAstronaut})`,
          backgroundSize: '50%',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Modern Header with Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-space-primary mb-1">NASA Space Challenge</h1>
              <p className="text-space-neutral">Questão {currentQuestion + 1} de {mockQuestions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-space-secondary">
                {minutes}:{seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-space-neutral">Tempo decorrido</div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar with Cat Animation */}
          <div className="relative bg-space-warm/20 rounded-full p-1">
            <Progress value={progress} className="h-8 bg-transparent" />
            <div 
              className="absolute top-1/2 transition-all duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${catPosition}%` }}
            >
              <div className="bg-gradient-to-r from-space-secondary to-space-accent text-white p-3 rounded-full shadow-lg animate-bounce border-2 border-white/20">
                <Cat className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-space-neutral mt-3">
            <span>Progresso: {Math.round(progress)}%</span>
            <span>{mockQuestions.length - currentQuestion - 1} questões restantes</span>
          </div>
        </div>

        {/* Modern Question Card */}
        <Card className="w-full max-w-4xl mx-auto border-space-warm/30 shadow-2xl backdrop-blur-sm bg-background/95 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-space-secondary/5 to-space-accent/5 border-b border-space-warm/20">
            <CardTitle className="text-2xl text-space-primary leading-relaxed">
              {mockQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              <div className="grid gap-4">
                {mockQuestions[currentQuestion].options.map((option, index) => (
                  <div 
                    key={index} 
                    className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                      selectedAnswer === index.toString() 
                        ? 'border-space-secondary bg-gradient-to-r from-space-secondary/10 to-space-accent/10 shadow-lg' 
                        : 'border-space-warm/20 hover:border-space-secondary/50 hover:bg-space-warm/5'
                    }`}
                    onClick={() => setSelectedAnswer(index.toString())}
                  >
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} className="flex-shrink-0" />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="text-space-neutral cursor-pointer flex-1 text-lg leading-relaxed"
                      >
                        {option}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-between items-center pt-6 border-t border-space-warm/20">
              <div className="text-sm text-space-neutral">
                {selectedAnswer && `Opção ${String.fromCharCode(65 + parseInt(selectedAnswer))} selecionada`}
              </div>
              <Button 
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-space-secondary to-space-accent hover:opacity-90 text-white px-8 py-3 text-lg disabled:opacity-50"
              >
                {currentQuestion === mockQuestions.length - 1 ? "Finalizar Quiz" : "Próxima Questão"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;