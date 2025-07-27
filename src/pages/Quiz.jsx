import React, { useState } from "react";
import Button from "../components/ui/Button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card.jsx";
import { RadioGroup, RadioGroupItem } from "../components/ui/RadioGroup.jsx";
import Label from "../components/ui/Label.jsx";
import Progress from "../components/ui/Progress.jsx";
import styles from "./Quiz.module.css";
import catAstronaut from "../assets/cat-astronaut.png";

// Mock questions data
const mockQuestions = [
  {
    question: "Qual é o planeta mais próximo do Sol?",
    options: ["Vênus", "Terra", "Mercúrio", "Marte"],
    correct: 2
  },
  {
    question: "Quantas luas tem Júpiter?",
    options: ["12", "95", "67", "23"],
    correct: 1
  },
  {
    question: "Qual é o nome da nossa galáxia?",
    options: ["Andrômeda", "Via Láctea", "Sombrero", "Whirlpool"],
    correct: 1
  },
  {
    question: "Em que ano o homem pisou na Lua pela primeira vez?",
    options: ["1967", "1969", "1971", "1973"],
    correct: 1
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Saturno", "Netuno", "Júpiter", "Urano"],
    correct: 2
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (selectedAnswer === "") return;

    const newAnswers = [...answers, parseInt(selectedAnswer)];
    setAnswers(newAnswers);

    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // Calculate final score
      const finalScore = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === mockQuestions[index].correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]?.toString() || "");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const progressPercentage = ((currentQuestion + 1) / mockQuestions.length) * 100;
  const scorePercentage = (score / mockQuestions.length) * 100;

  if (showResults) {
    return (
      <div className={styles.container}>
        <div className={styles.resultsCard}>
          <div className={styles.resultsContent}>
            <div className={styles.catIcon}>🐱‍🚀</div>
            <h1 className={styles.resultsTitle}>
              Missão Espacial Concluída!
            </h1>
            
            <div className={styles.scoreContainer}>
              <div className={styles.scoreCircle}>
                <span className={styles.scoreText}>{score}/{mockQuestions.length}</span>
                <span className={styles.scorePercentage}>{scorePercentage.toFixed(0)}%</span>
              </div>
            </div>

            <div className={styles.resultMessage}>
              {scorePercentage >= 70 ? (
                <div className={styles.successMessage}>
                  <h2>🏆 Parabéns, Astronauta!</h2>
                  <p>Você conquistou o cosmos com {scorePercentage.toFixed(0)}% de acertos!</p>
                  <p>Seu certificado NASA está sendo preparado...</p>
                </div>
              ) : (
                <div className={styles.tryAgainMessage}>
                  <h2>🚀 Continue Explorando!</h2>
                  <p>Você acertou {scorePercentage.toFixed(0)}% das questões.</p>
                  <p>Que tal tentar novamente para conquistar as estrelas?</p>
                </div>
              )}
            </div>

            <div className={styles.resultButtons}>
              <Button 
                className={styles.retakeButton}
                onClick={resetQuiz}
              >
                🔄 Refazer Quiz
              </Button>
              <Button 
                variant="outline"
                className={styles.homeButton}
                onClick={() => window.location.href = '/'}
              >
                🏠 Voltar ao Início
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <img 
                src="/lovable-uploads/334005dd-80e7-4825-bc33-bbadac816dfa.png" 
                alt="Bitwave Logo" 
                className={styles.logoImage}
              />
              <span className={styles.logoText}>NASA Quiz Challenge</span>
            </div>
            <Button 
              variant="outline"
              className={styles.exitButton}
              onClick={() => window.location.href = '/'}
            >
              ← Sair
            </Button>
          </div>
        </div>

        {/* Progress Section */}
        <div className={styles.progressSection}>
          <div className={styles.progressContainer}>
            <div className={styles.progressHeader}>
              <span className={styles.progressText}>
                Questão {currentQuestion + 1} de {mockQuestions.length}
              </span>
              <div className={styles.catProgress}>🐱‍🚀</div>
            </div>
            <Progress value={progressPercentage} className={styles.progressBar} />
          </div>
        </div>

        {/* Question Card */}
        <div className={styles.questionContainer}>
          <Card className={styles.questionCard}>
            <CardHeader className={styles.questionHeader}>
              <CardTitle className={styles.questionTitle}>
                {mockQuestions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.questionContent}>
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className={styles.optionsGrid}>
                  {mockQuestions[currentQuestion].options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`${styles.optionCard} ${
                        selectedAnswer === index.toString() ? styles.optionSelected : ''
                      }`}
                      onClick={() => setSelectedAnswer(index.toString())}
                    >
                      <div className={styles.optionContent}>
                        <RadioGroupItem 
                          value={index.toString()} 
                          id={`option-${index}`} 
                          className={styles.radioItem}
                        />
                        <Label 
                          htmlFor={`option-${index}`} 
                          className={styles.optionLabel}
                        >
                          {option}
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <div className={styles.navigationButtons}>
                <div className={styles.questionInfo}>
                  <span className={styles.questionCounter}>
                    Questão {currentQuestion + 1} de {mockQuestions.length}
                  </span>
                </div>
                
                <div className={styles.buttonGroup}>
                  <Button 
                    variant="outline"
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                    className={styles.prevButton}
                  >
                    ← Anterior
                  </Button>
                  <Button 
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    className={styles.nextButton}
                  >
                    {currentQuestion === mockQuestions.length - 1 ? 'Finalizar' : 'Próxima'} →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;