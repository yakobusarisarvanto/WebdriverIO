
describe('Demo Test', function (){

    it('My First Test', async ()=> {
        browser.url('https://www.saucedemo.com/v1/')
        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(2000)
        await $('[name="password"]').setValue('secret_sauce')
        await browser.pause(2000)
        //await $('[type="submit"]').click()
        await browser.keys('Enter')
        await browser.pause(3000) 

    })

})