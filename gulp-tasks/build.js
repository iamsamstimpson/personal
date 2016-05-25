// =============================================
// Build 'gulp build'
// builds all assets, also has `--production` option to build production ready assets
// =============================================

module.exports = function (nodeModule) {
    return function (cb) {
        nodeModule.runSequence('clean', 'scss', 'js', 'images', 'fonts', cb);
    };
};
