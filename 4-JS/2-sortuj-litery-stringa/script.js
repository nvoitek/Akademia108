function reverse(stringToReverse) {
    return Array.from(stringToReverse).sort().join('');
  }
  
  let akademia = 'Akademia108';
  
  console.log(reverse(akademia));