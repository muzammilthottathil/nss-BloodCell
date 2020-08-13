class auth {
    constructor() {
        this.authenticated = false;
    }
    login(cb, username, password) {
        if (username === 'dummy' && password === 'dummy') {
            this.authenticated = true;
            console.log('username : ', username, ' ', 'password : ', password);
            console.log('login success');
            cb();
        } else {
            console.log('login error');
            return;
        }
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new auth();
