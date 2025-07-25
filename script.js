function checkAnswers() {
    const inputs = document.querySelectorAll('#puzzle input');
    let correctCount = 0;
    let total = 0;
  
    inputs.forEach(input => {
      const expected = input.dataset.answer.toUpperCase();
      const given = input.value.toUpperCase();
  
      // Only check if there's an expected answer
      if (expected) {
        total++;
        if (given === expected) {
          input.classList.add('correct');
          input.classList.remove('incorrect');
          correctCount++;
        } else {
          input.classList.add('incorrect');
          input.classList.remove('correct');
        }
      }
    });
  
    document.getElementById('result').textContent = 
      `You got ${correctCount} out of ${total} correct!`;
  }
  