'use strict';

const a = function () {
    console.log(this);
};

a();
a.customBind({ b: 1 })();   // { b: 1 }
