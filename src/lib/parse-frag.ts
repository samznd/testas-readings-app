  const parseFrag = (rawInput: string) => {
    const lines = rawInput.split('\n').filter(line => line.trim() !== '');
    const title = lines[0];
    const options = lines.slice(1).map(line => {
      const match = line.match(/^[A-Da-d]\.?\s*(.*)/);
      return match ? match[1] : line;
    });

    if (options.length !== 4) {
      // handle error or warning
      return;
    }

    return ({ title, options });
  };
