it ('Should return Hello', async ()=> {
    const response = await fetch('http://localhost:3000/dani');
    const name = await response.text();
    expect(name).toBe("dani");

})