var tf = require("@tensorflow/tfjs")
console.log(tf)

/*
let X =  tf.input({ shape : [1]});
            let Y = tf.layers.dense({ units: 1}).apply(X);
            let model = tf.model({inputs : X, outputs : Y});
            let compileParam = { optimizer : tf.train.adam(), loss : tf.losses.meanSquaredError}
            model.compile(compileParam);
            */