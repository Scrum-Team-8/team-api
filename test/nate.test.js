it('Nate test', async () => {
    const response = await fetch('http://localhost:3000/nate');
    const name = await response.text();
    expect(name).toBe("nate");
});