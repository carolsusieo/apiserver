module.exports = {
apps : [
     {
       name          : 'apiserver',
       script        : './index.js',
       env_production : {
         NODE_ENV: 'production',
         NODE_PORT: '3002'
       }
     }
   ]
}
