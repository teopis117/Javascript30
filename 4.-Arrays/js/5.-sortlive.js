  // 5. Sort the inventors by years lived

  const oldest=inventors.sort(function(a,b)
  {
      const lastguy=a.passed;
      const netxGuy=b.passed;
      return lastguy>netxGuy ? -1:1;
  });

  console.table(oldest);