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

  it('should sort reviews by rating', async () => {
    await page.click('.rating-checkbox')
    let elementsLength = await page.evaluate(() => {
      return document.getElementsByClassName('rating-circle-full').length;
    });
    expect(elementsLength/10).toBe(5)
  })

  // it('should search reviews by search term')
});

