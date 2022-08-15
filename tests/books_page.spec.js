const { test, expect } = require('@playwright/test');

test.use({ 
    headless: false 
});

test('guest_can_log_in', async ({page}) =>{
    await page.goto('https://demoqa.com/books');
    await page.locator('//*[@id="login"]').click();
    await page.locator('//*[@id="userName"]').type('Kyle_Smith');
    await page.locator('//*[@id="password"]').type("123qweASD!");
    await page.locator('//*[@id="login"]').click();
    await expect(page.locator('//*[@id="userName-value"]')).toHaveText('Kyle_Smith');
});

test('guest_can_find_book_in_searchbox', async ({page}) =>{
    await page.goto('https://demoqa.com/books');
    await page.locator('//*[@id="searchBox"]').type('Speaking JavaScript');
    await page.locator('text="Speaking JavaScript"');
    await expect(page.locator('//*[@class="action-buttons"]/span/a')).toHaveText('Speaking JavaScript');
});

test('guest_can_change_option_in_dropdown_list', async ({page}) =>{
    await page.goto('https://demoqa.com/books');
    await page.locator('select').selectOption({ value: '5' });
    await expect(page.locator('//*[@class="-pageInfo"]/span')).toHaveText('2');
});

test('guest_can_use_previous_and_next_buttons', async ({page}) =>{
    await page.goto('https://demoqa.com/books');
    await page.locator('select').selectOption({ value: '5' });
    await page.locator('button:has-text("Next")').click();
    await expect(page.locator('//*[@class="-pageJump"]/input')).toHaveValue('2');
    await page.locator('button:has-text("Previous")').click();
    await expect(page.locator('//*[@class="-pageJump"]/input')).toHaveValue('1');
});