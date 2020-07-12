module.exports = {
apps : [
     {
       name          : 'apiserver',
       script        : 'node ./index.js',
       env_production : {
         NODE_ENV: 'production',
         NODE_PORT: '3002'
       }
     }
   ]
}
