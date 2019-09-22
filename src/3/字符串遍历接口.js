for (let codePoint of 'foo\u4e2d')
    console.log(codePoint); // 能正确分割出中文
