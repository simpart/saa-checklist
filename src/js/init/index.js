/**
 * @file index.js
 * @brief index page initialize
 */
const mf = require('mofron');
require('expose-loader?app!../conf/namesp.js');
require('tetraring4js');
/* component */
const Appbs = require('mofron-comp-appbase');
const Tree  = require('mofron-comp-sptree');
const Frame = require('mofron-comp-flowframe');
const Text  = require('mofron-comp-text');
const Icon  = require('mofron-comp-dev');
/* layout */
const HrzCent = require('mofron-layout-hrzcenter');
const Margin  = require('mofron-layout-margin');
/* effect */
const HrzPos = require('mofron-effect-hrzpos');
const Shadow = require('mofron-effect-shadow');
const Fade   = require('mofron-effect-fade');
/* app ctrl */
const theme = require('../conf/theme.js');
const base  = require('../conf/basestyle.js');
//const scr   = require('../ctrl/screen.js');
const card  = require('../comp/card.js');

let tree = new Tree({
    layout         : new Margin('top', '0.2rem'),
    effect         : new Fade([10, 400]),
    naviText       : new mf.Option({ size : '0.2rem' }),
    backEvent      : card.back,
    nextEvent      : card.next,
    indexElem_func : card.index,
    kvElem_func    : card.keyVal
});

let appbase = new Appbs({
    header    : new mf.Option({
        logo      : [ './check_ico.png', '-0.1rem' ],
        title     : new Text({
            text    : 'AWS SAA CheckList',
            font    : '"M PLUS Rounded 1c"'
        }),
        baseColor : 'white',
        effect    : new Shadow('0.1rem'),
        //navi      : scr.get()
    }),
    baseColor : [248, 248, 253],
    layout    : new HrzCent( ('mobile' !== mofron.func.devType()) ? 50 : 100),
    effect    : new Fade(),
    child     : [
        tree,
        new mf.Component(
            new Icon({
                basePrefix : 'fab',
                icon       : 'github',
                url        : 'https://github.com/simpart/saa-checklist',
                effect     : [ new HrzPos('center') ],
                sizeValue  : [ "margin", "0.2rem" ]
            })
        )
    ]
});

//backEvent

//let 

/**
 * build component contents
 * 
 * @return mf.Component object
 */
let start = () => {
    try {
        let ret = appbase;
        
        /* load tree contetns */
        let load = (p1) => {
            try { tree.load(p1); } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
        ttrg.rest.get('./list.json', null, load);
        
        return ret;
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
    app.root.visible(true);
    
} catch (e) {
    console.error(e.stack);
}
/* end of file */
