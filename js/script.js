function showResult() {
  const question1 = document.querySelector('input[name="question1"]:checked').value;
  const question2 = document.querySelector('input[name="question2"]:checked').value;
  const question3 = document.querySelector('input[name="question3"]:checked').value;
  const question4 = document.querySelector('input[name="question4"]:checked').value;
  const question5 = document.querySelector('input[name="question5"]:checked').value;
  
  let result = '';

  if (question1 === 'individual') {
      if (question2 === 'tall') {
          result = 'Esportes recomendados: Vôlei de Praia, Tênis.';
      } else if (question2 === 'medium') {
          result = 'Esportes recomendados: Corrida, Natação.';
      } else if (question2 === 'short') {
          result = 'Esportes recomendados: Ginástica, Escalada.';
      }
  } else if (question1 === 'team') {
      if (question2 === 'tall') {
          result = 'Esportes recomendados: Basquete, Vôlei.';
      } else if (question2 === 'medium') {
          result = 'Esportes recomendados: Futebol, Handebol.';
      } else if (question2 === 'short') {
          result = 'Esportes recomendados: Futsal, Rugby.';
      }
  } else if (question1 === 'either') {
      if (question2 === 'tall') {
          result = 'Esportes recomendados: Vôlei de Praia, Tênis, Basquete, Vôlei.';
      } else if (question2 === 'medium') {
          result = 'Esportes recomendados: Corrida, Natação, Futebol, Handebol.';
      } else if (question2 === 'short') {
          result = 'Esportes recomendados: Ginástica, Escalada, Futsal, Rugby.';
      }
  }

  // Adicionar lógica para question3, question4 e question5 se necessário
  if (question3 === 'dynamic') {
      result += ' Ideal para uma atividade dinâmica e completa.';
  } else if (question3 === 'burn_calories') {
      result += ' Ótimo para queimar calorias.';
  } else if (question3 === 'shows_results') {
      result += ' Resultados visíveis rapidamente.';
  } else if (question3 === 'relaxes_mind') {
      result += ' Ajuda a relaxar a mente.';
  }

  if (question4 === 'not_competitive') {
      result += ' Ideal para quem busca diversão.';
  } else if (question4 === 'healthy_competitive') {
      result += ' Perfeito para uma competição saudável.';
  } else if (question4 === 'very_competitive') {
      result += ' Excelente para os mais competitivos.';
  } else if (question4 === 'hate_competition') {
      result += ' Ótimo para quem não gosta de competir.';
  }

  if (question5 === 'coordination') {
      result += ' Bom para melhorar a coordenação.';
  } else if (question5 === 'breathlessness') {
      result += ' Ajuda a melhorar a respiração.';
  } else if (question5 === 'joint_pain') {
      result += ' Cuidado especial para as articulações.';
  } else if (question5 === 'back_pain') {
      result += ' Bom para a postura e a coluna.';
  }

  document.getElementById('result').innerText = result;
}
