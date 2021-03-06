const path = require ('path');

module.exports = (env) => {
const isProduction = env === 'production';
 return {
    entry:['babel-polyfill','./src/app.js'],
    output:{
        path:path.join(__dirname, 'public'),
        filename:'bundel.js'
    },
   module:{
       rules: [{
           loader: 'babel-loader',
           test:/\.js$/,
           exclude:/node_modules/
       },{
          test:/\.s?css$/,
          use:['style-loader','css-loader','sass-loader'] 
       }]
   },
   devtool: isProduction ? 'source-map':'cheap-module-eval-source-map',
   devServer: {
       contentBase:path.join(__dirname, 'public')
   }
}; 
};
