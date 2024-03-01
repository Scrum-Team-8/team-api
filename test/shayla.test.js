it ('Should return Hello', async ()=> {
    const response = await fetch('http://localhost:3000/shayla');
    const name = await response.text();
    expect(name).toBe("shayla");

})

