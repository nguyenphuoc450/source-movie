module.exports = {
    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/assets/scss/variables.scss";`
          }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/movies/' // Thay tên repository của các bạn vào đây nhé
    : '/'
};

