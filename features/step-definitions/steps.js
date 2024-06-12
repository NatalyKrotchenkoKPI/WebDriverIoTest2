const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page.js');
const credentials = require('../pageobjects/credentials.js')

Given(/^User is located on the main page of saucedemo website$/, async () => {
	await LoginPage.open();
});

When(/^User click “Login” button$/, async () => {
    await LoginPage.login(credentials.username, credentials.password);
});

Then(/^User should see “Epic sadface: Username is required” error message$/, async () => {
	const errorMessageText = await LoginPage.getErrorMessage();
    expect(errorMessageText).toContain('Epic sadface: Username is required');
});