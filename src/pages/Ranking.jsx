import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card.jsx';
import styles from './Ranking.module.css';

// Mock data para 100 usuários
const generateMockUsers = () => {
  const names = [
    'Ana Silva', 'Bruno Costa', 'Carlos Santos', 'Diana Oliveira', 'Eduardo Lima',
    'Fernanda Rocha', 'Gabriel Alves', 'Helena Martins', 'Igor Ferreira', 'Julia Campos',
    'Lucas Pereira', 'Marina Souza', 'Nicolas Barbosa', 'Olivia Mendes', 'Pedro Gomes',
    'Rafaela Cruz', 'Samuel Dias', 'Tatiana Reis', 'Ulisses Moura', 'Vanessa Cardoso'
  ];
  
  const avatarColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
  ];

  return Array.from({ length: 100 }, (_, index) => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomScore = Math.floor(Math.random() * 100) + 1;
    const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
    
    return {
      id: index + 1,
      name: `${randomName} ${index + 1}`,
      score: 100 - index + Math.floor(Math.random() * 20) - 10, // Scores decrescentes com variação
      avatar: randomColor,
      position: index + 1
    };
  }).sort((a, b) => b.score - a.score); // Ordenar por score
};

const Ranking = () => {
  const users = generateMockUsers();

  const getRankIcon = (position) => {
    if (position === 1) return '🥇';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return `#${position}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>🏆 Ranking Espacial</h1>
        <p className={styles.subtitle}>Top 100 Astronautas Digitais</p>
      </div>

      <div className={styles.rankingGrid}>
        {users.map((user, index) => (
          <Card key={user.id} className={`${styles.userCard} ${index < 3 ? styles.topThree : ''}`}>
            <CardContent className={styles.cardContent}>
              <div className={styles.position}>
                {getRankIcon(user.position)}
              </div>
              
              <div 
                className={styles.avatar}
                style={{ backgroundColor: user.avatar }}
              >
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              
              <div className={styles.userInfo}>
                <h3 className={styles.userName}>{user.name}</h3>
                <div className={styles.score}>
                  <span className={styles.scoreValue}>{user.score}</span>
                  <span className={styles.scoreLabel}>pontos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Ranking;