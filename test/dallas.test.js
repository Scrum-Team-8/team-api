it ('Should return Hello', async ()=> {
    const response = await fetch('http://localhost:3000/dallas');
    const name = await response.text();
    expect(name).toBe("dallas");

})