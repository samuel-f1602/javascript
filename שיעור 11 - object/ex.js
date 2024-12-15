//ex1
const user = {
    fullName: 'gal Lavi',
    userName: 'gallavi',
    password: 'gal123',
    ls_login: false,
    //ex3
    changeName: function (fullName) {
        this.fullName = fullName;

    },

    login: function () {
        let userName = prompt('userName');
        let password = prompt('password');
        if (userName === 'gallavi' && password === 'gal123') {
            user.ls_login = true;
        }
    },
    //ex5
    logout: function (ls_login) {
        this.ls_login = ls_login;
    },
    //ex6
    //op1
    changePassword: function (password) {
        this.password = password;
    },
    //op2
    newP: function () {
        let lastPassword = prompt('enter the last password');
        let newPassword = prompt('enter a new password');
        if (newPassword !== lastPassword) {
            newPassword = this.password
        }
    },
}

console.log(typeof user);
console.log(user);

//ex2
console.log("שלום ", user.fullName);

//ex3
user.changeName('samuel frau');
console.log(user);

//ex4
user.login()
console.log(user.ls_login);

//ex5
user.logout('false');
console.log(user);

//ex6
user.changePassword('sam123');
console.log(user);

user.newP();
console.log(user);


const user_bank_acount = {
    fullName: 'gal Lavi',
    userName: 'gallavi',
    password: 'gal123',
    status_login: 'false',
    total: 0,
    credit: 500,

    //ex2
    changeName: function (fullName) {
        this.fullName = fullName;
    },

    login: function () {
        let userName = prompt('userName');
        let password = prompt('password');
        if (userName === 'gallavi' && password === 'gal123') {
            user.ls_login = true;
        }
    },
    logout: function (ls_login) {
        this.ls_login = ls_login;
    },
    changePassword: function (password) {
        this.password = password;
    },
    //ex3
    add: function (total) {
        this.total += total;
    }
}


//user_bank ex
//ex1
console.log(typeof user_bank_acount);
console.log(user_bank_acount);

//ex2
console.log("שלום ", user_bank_acount.fullName);

user_bank_acount.changeName('samuel frau')
console.log(user);

user_bank_acount.login()
console.log(user.ls_login);

user_bank_acount.logout('false');
console.log(user);

user_bank_acount.changePassword('sam123');
console.log(user);

user_bank_acount.add(10)
console.log(user_bank_acount);

