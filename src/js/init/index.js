/**
 * @file index.js
 * @brief index page initialize
 */
const mf = require('mofron');
require('expose-loader?app!../conf/namesp.js');

const Appbs = require('mofron-comp-appbase');
const HrzCent = require('mofron-layout-hrzcenter');
const Margin = require('mofron-layout-margin');
const Shadow = require('mofron-effect-shadow');
const Fade = require('mofron-effect-fade');

/* app ctrl */
const theme = require('../conf/theme.js');
const base = require('../conf/basestyle.js');
const json = require('../ctrl/json.js');

/**
 * build component contents
 * 
 * @return mf.Component object
 */
let start = () => {
    try {
        return new Appbs({
            title      : "SAA Check List",
            header     : new mf.Option({
                baseColor : 'white',
                effect    : new Shadow('0.1rem')
            }),
            background : new mf.Component({ baseColor : [245,245,245] }),
            layout     : [
                new HrzCent(50),
                //new Margin('top', '0.2rem')
            ],
            //effect : new Fade()
        });
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    base.init();
    let ret = start(app.root);
    app.root.child(
        (true === Array.isArray(ret)) ? ret : [ret]
    );
    theme.init(app.root);

//app.root.style({ opacity: 0 });    
app.root.effect(new Fade());
    json.init(ret);
    //app.root.visible(true);
    
} catch (e) {
    console.error(e.stack);
}
/* end of file */
