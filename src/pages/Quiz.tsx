import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowRight, Cat } from "lucide-react";


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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

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

  const correctAnswers = answers.filter((answer, index) => answer === mockQuestions[index].correctAnswer).length;
  const percentage = (correctAnswers / mockQuestions.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-space-primary via-space-warm/20 to-space-secondary/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-space-warm/30 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-space-primary mb-4">
              🏆 Resultado do NASA Space Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl font-bold bg-gradient-to-r from-space-secondary to-space-accent bg-clip-text text-transparent">
              {percentage.toFixed(0)}%
            </div>
            <p className="text-lg text-space-neutral">
              Você acertou {correctAnswers} de {mockQuestions.length} questões
            </p>
            {percentage >= 70 ? (
              <div className="space-y-4">
                <p className="text-lg text-space-secondary font-semibold">
                  🎉 Parabéns! Você está qualificado para receber o certificado NASA Space Challenge!
                </p>
                <Button className="bg-gradient-to-r from-space-secondary to-space-accent hover:opacity-90 text-white">
                  Baixar Certificado
                </Button>
              </div>
            ) : (
              <p className="text-lg text-space-neutral">
                Continue estudando e tente novamente para conquistar seu certificado!
              </p>
            )}
            <Button variant="outline" className="border-space-secondary text-space-secondary hover:bg-space-secondary hover:text-white">
              Voltar ao Início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-primary via-space-warm/20 to-space-secondary/20 relative overflow-hidden">
      {/* Background Logo */}
      <div 
        className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
        style={{ 
          backgroundImage: `url(/lovable-uploads/334005dd-80e7-4825-bc33-bbadac816dfa.png)`,
          backgroundSize: '60%',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-space-primary">NASA Space Challenge</h1>
            <div className="text-space-neutral">
              Questão {currentQuestion + 1} de {mockQuestions.length}
            </div>
          </div>
          
          {/* Progress Bar with Cat Animation */}
          <div className="relative">
            <Progress value={progress} className="h-6 bg-space-warm/20" />
            <div 
              className="absolute top-0 transition-all duration-500 ease-out transform -translate-x-1/2"
              style={{ left: `${catPosition}%` }}
            >
              <div className="bg-space-accent text-white p-2 rounded-full shadow-lg animate-bounce">
                <Cat className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-space-neutral mt-2">
            {Math.round(progress)}% completo
          </div>
        </div>

        {/* Question Card */}
        <Card className="w-full max-w-4xl mx-auto border-space-warm/30 shadow-2xl backdrop-blur-sm bg-background/95">
          <CardHeader>
            <CardTitle className="text-xl text-space-primary">
              {mockQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {mockQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-space-warm/20 hover:border-space-secondary/50 hover:bg-space-warm/5 transition-all duration-200">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-space-neutral cursor-pointer flex-1 text-base"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-end pt-4">
              <Button 
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-space-secondary to-space-accent hover:opacity-90 text-white px-8"
              >
                {currentQuestion === mockQuestions.length - 1 ? "Finalizar" : "Próxima"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;