class LoginPage{
    //semua locator di halaman login
    // get usernameTextbox(){return $('#username')}
    // get passwordTextbox(){return $('#password')}
    // get loginButton(){return $('button[type="submit"]')}
    // get loginMessage(){return $('#flash')}

    get usernameTextbox(){
            return $('[name="user-name"]')
        }
        get passwordTextbox(){
            return $('[name="password"]')
        }
        get loginButton(){
            return $('input[type="submit"]')
        }
        get homeText(){
            return $('//div[@class="product_label"]')
        }

    //method login
    async login(username, password){
        await this.usernameTextbox.setValue(username)
        await browser.pause (2000)
        await this.passwordTextbox.setValue(password)
        await browser.pause (2000)
        await this.loginButton.click()
    }
    //method untuk validasi teks di homepage
    async checkMessage(textMsg){
        await expect(this.homeText).toHaveTextContaining(textMsg)
    }
}
module.exports = new LoginPage()