export default function factory($, env) {
    return function task() {
        return $.gulp
        .src(env.paths.input.scripts.src)
        .pipe($.istanbul({ includeUntested: true, instrumenter: $.isparta.Instrumenter }))
        .pipe($.istanbul.hookRequire());
    };
}
