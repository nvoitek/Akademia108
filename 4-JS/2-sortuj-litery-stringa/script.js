function reverse(stringToSort) {
    return Array.from(stringToSort).sort().join('');
  }
  
  let akademia = 'Akademia108';
  
  console.log(reverse(akademia));