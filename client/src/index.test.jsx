describe('Reviews', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
  });

  it('should load Reviews page', async () => {
    await expect(page).toMatch('Reviews')
  })

  it('should pop up the share component when Share button is pressed', async () => {
    await page.click('.share')
    let content = await page.content()
    await expect(content).toContain('popup-container')
  })

});

