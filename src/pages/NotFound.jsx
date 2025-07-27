import React from "react";
import Button from "../components/ui/Button.jsx";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página não encontrada</h2>
        <p className={styles.description}>
          Ops! Parece que você se perdeu no espaço. 
          A página que você está procurando não existe.
        </p>
        <Button 
          className={styles.homeButton}
          onClick={() => window.location.href = '/'}
        >
          🚀 Voltar ao Início
        </Button>
      </div>
    </div>
  );
};

export default NotFound;