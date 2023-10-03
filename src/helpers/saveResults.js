export function saveResults(shuffledNumbers) {
  const resultsText = shuffledNumbers.join('\n');
  const blob = new Blob([resultsText], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'shuffled_numbers.txt';
  link.click();
}