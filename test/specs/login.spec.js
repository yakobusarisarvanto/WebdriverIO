const LoginPage = require('../pages/login.page')
describe('Demo test', () => {

    it('Login Test', async () => {
        //browser.url('https://the-internet.herokuapp.com/secure')
        browser.url('https://www.saucedemo.com/v1/')

        var username = "standard_user"
        var password =  "secret_sauce"
        var textHomepage = "Products"
        await LoginPage.login(username, password)
        await browser.pause(3000)
        await LoginPage.checkMessage(textHomepage)

        // await $('#username').setValue('tomsmith')
        // await browser.pause(1000)
        // await $('#password').setValue('SuperSecretPassword!')
        // await browser.pause(1000)
        // await $('button[type="submit"]').click()
        //await browser.keys('Enter')
        // await browser.pause(1000)
        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
        // await browser.pause(2000)

        //cetak text
        //const elem = await $('#flash')
        //console.log(await elem.getText())

        //expected text
        //await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')

        //await $('[fill="currentColor"]').toBeDisplayed()
    })
})

