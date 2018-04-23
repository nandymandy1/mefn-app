
if(process.env.NODE_ENV === 'production'){
    module.exports = {database:'mongodb://nandymandy:nandymandy@ds239368.mlab.com:39368/mean-auth-app', secret: 'yoursecret'}
} else {
    module.exports = {database:'mongodb://localhost:27017/atapp', secret: 'yoursecret'}
}


/*

module.exports = {
    database: 'mongodb://nandymandy:nandymandy@ds239368.mlab.com:39368/mean-auth-app',
    secret: 'yoursecret'
}


module.exports = {
    database: 'mongodb://localhost:27017/atapp',
    secret: 'yoursecret'
}

if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:'mongodb://nandymandy:nandymandy@ds151809.mlab.com:51809/vid-jot'}
} else {
    module.exports = {mongoURI:'mongodb://127.0.0.1:27017/vidjot-dev'}
}



*/
