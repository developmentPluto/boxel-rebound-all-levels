let level_score = parseInt(prompt("Average score per level:", "100"));
for (let i = 0; i <= 50; i++) {
  a = 'level_' + i + '_score'  
  localStorage.setItem(a, level_score)
}
