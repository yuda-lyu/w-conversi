import SocketIOClient from 'socket.io-client'
import get from 'lodash-es/get.js'
import genPm from 'wsemi/src/genPm.mjs'
import genID from 'wsemi/src/genID.mjs'
import Evem from 'wsemi/src/evem.mjs'
import sendSplitData from './sendSplitData.mjs'
import mergeSplitData from './mergeSplitData.mjs'


/**
 * 建立SocketIO使用者(Node.js與Browser)端物件
 *
 * @class
 * @param {Object} opt 輸入設定參數物件
 * @param {String} [opt.url='http://localhost:8080'] 輸入SocketIO伺服器網址，預設為'http://localhost:8080'
 * @param {String} [opt.token='*'] 輸入使用者認證用token，預設為'*'
 * @param {Integer} [opt.strSplitLength=1000000] 輸入傳輸封包長度整數，預設為1000000
 * @param {Object} [opt.ioSettings={}] 輸入SocketIO初始化設定物件，預設為{}
 * @returns {Object} 回傳通訊物件，可監聽事件open、openOnce、close、error、reconn、broadcast、deliver，可使用函數execute、broadcast、deliver
 * @example
 *
 * import WConversiClient from 'w-conversi/dist/w-conversi-client.umd.js'
 *
 * let opt = {
 *     url: 'http://localhost:8080',
 *     token: '*',
 * }
 *
 * //new
 * let wo = new WConversiClient(opt)
 *
 * wo.on('open', function() {
 *     console.log('client nodejs: open')
 * })
 * wo.on('openOnce', function() {
 *     console.log('client nodejs: openOnce')
 *
 *     //execute
 *     wo.execute('add', { p1: 1, p2: 2 },
 *         function (prog) {
 *             console.log('client nodejs: execute prog=', prog)
 *         })
 *         .then(function(r) {
 *             console.log('client nodejs: execute: add=', r)
 *         })
 *
 *     //broadcast
 *     wo.broadcast('client nodejs broadcast hi', function (prog) {
 *         console.log('client nodejs: broadcast prog=', prog)
 *     })
 *
 *     //deliver
 *     wo.deliver('client deliver hi', function (prog) {
 *         console.log('client nodejs: deliver prog=', prog)
 *     })
 *
 * })
 * wo.on('close', function() {
 *     console.log('client nodejs: close')
 * })
 * wo.on('error', function(err) {
 *     console.log('client nodejs: error', err)
 * })
 * wo.on('reconn', function() {
 *     console.log('client nodejs: reconn')
 * })
 * wo.on('broadcast', function(data) {
 *     console.log('client nodejs: broadcast', data)
 * })
 * // wo.on('deliver', function(data) { //伺服器目前無法針對client直接deliver
 * //     console.log('client nodejs: deliver=', data)
 * // })
 *
 */
function WConversiClient(opt) {
    let bOpened = false //SocketIO是否第一次開啟
    let ioc = null //SocketIO


    //ee, ev
    let ee = new Evem()
    let ev = new Evem()


    //eeEmit
    function eeEmit(name, ...args) {
        setTimeout(() => {
            ee.emit(name, ...args)
        }, 1)
    }


    function core() {


        //default
        if (!opt.url) {
            opt.url = 'http://localhost:8080'
        }
        if (!opt.token) {
            opt.token = '*'
        }
        if (!opt.strSplitLength) {
            opt.strSplitLength = 1000000
        }
        if (!opt.ioSettings) {
            opt.ioSettings = {}
        }


        //socket.io-client
        try {
            ioc = new SocketIOClient(opt.url, opt.ioSettings)
        }
        catch (err) {
            error('create SocketIOClient catch error', err)
            return null
        }


        //check
        if (!ioc) {
            error('can not create SocketIOClient', 'ioc from SocketIOClient is null')
            return null
        }


        //connect
        ioc.on('connect', function() {
            open()
            openOnce()
        })


        //message
        ioc.on('message', function(data) {
            message(data)
        })


        //disconnect
        ioc.on('disconnect', function() {
            close()
        })


        //reconnect
        ioc.on('reconnect', function() {
            reconn()
        })


        //error
        ioc.on('error', function(err) {
            error('ioc error', err)
        })


        // //connect_error
        // ioc.on('connect_error', function(err) {
        //     error('ioc connect_error', err)
        // })
        // ioc.io.on('connect_error', function(err) {
        //     error('ioc.io connect_error', err)
        // })


        // //connect_timeout
        // ioc.on('connect_timeout', function(err) {
        //     error('ioc connect_timeout', err)
        // })


        // //reconnect_error
        // ioc.on('reconnect_error', function(err) {
        //     error('ioc reconnect_error', err)
        // })


        // //reconnect_failed
        // ioc.on('reconnect_failed', function(err) {
        //     error('ioc reconnect_failed', err)
        // })


        /**
         * SocketIO監聽開啟事件
         *
         * @memberof WConversiClient
         * @example
         * wo.on('open', function() {
         *     ...
         * })
         */
        function onOpen() {} onOpen()
        function open() {
            eeEmit('open')
        }


        /**
         * SocketIO監聽第一次開啟事件
         *
         * @memberof WConversiClient
         * @example
         * wo.on('openOnce', function() {
         *     ...
         * })
         */
        function onOpenOnce() {} onOpenOnce()
        function openOnce() {
            if (!bOpened) {
                eeEmit('openOnce')
                bOpened = true
            }
        }


        /**
         * SocketIO監聽關閉事件
         *
         * @memberof WConversiClient
         * @example
         * wo.on('close', function() {
         *     ...
         * })
         */
        function onClose() {} onClose()
        function close() {
            eeEmit('close')
        }


        /**
         * SocketIO錯誤事件
         *
         * @memberof WConversiClient
         * @param {*} err 接收錯誤訊息
         * @example
         * wo.on('error', function(err) {
         *     ...
         * })
         */
        function onError() {} onError()
        function error(msg, err) {
            eeEmit('error', { msg, err })
        }


        function message(message) {
            //console.log('message', message)

            //mergeSplitData
            mergeSplitData(message, parserData)

        }


        function parserData(data) {

            //_mode
            let _mode = get(data, '_mode', '')

            //emit
            if (_mode === 'execute') {

                if (get(data, '_id') && get(data, 'output')) {

                    //_id
                    let _id = get(data, '_id')

                    //output
                    let output = get(data, 'output')

                    //emit
                    ev.emit(_id, output)

                }
                else {
                    //無效資料

                    error('can not find _id and output in data', data)

                }

            }
            else if (_mode === 'broadcast') {

                //broadcast 廣播
                eeEmit('broadcast', get(data, 'data'))

            }
            else if (_mode === 'deliver') {

                //deliver 交付
                eeEmit('deliver', get(data, 'data'))

            }
            else {
                error('can not find _mode in data', data)
            }

        }


        function sendData(data, cbProgress) {
            //console.log('sendData', data)
            try {
                //sendSplitData
                sendSplitData(ioc, opt.strSplitLength, data, cbProgress, function (err) {
                    error('can not send message', err)
                })
            }
            catch (err) {
                error('sendSplitData catch error', err)
            }
        }


        function triggerExecute(func, input = null, cbResult, cbProgress) {

            //_id
            let _id = genID()

            //msg
            let msg = {
                _mode: 'execute',
                _id,
                func,
                input,
            }

            //sendData
            sendData(msg, cbProgress)

            //等待結果回傳
            ev.on(_id, function (output) {

                //cbResult
                cbResult(output)

                //removeAllListeners
                ev.removeAllListeners(_id)

            })

        }


        function triggerBroadcast(data, cbProgress) {

            //msg
            let msg = {
                _mode: 'broadcast',
                data,
            }

            //sendData
            sendData(msg, cbProgress)

        }


        function triggerDeliver(data, cbProgress) {

            //msg
            let msg = {
                _mode: 'deliver',
                data,
            }

            //sendData
            sendData(msg, cbProgress)

        }


        //triggerExecute, 若斷線重連則需自動清除過去監聽事件
        ee.removeAllListeners('triggerExecute')
        ee.on('triggerExecute', triggerExecute)


        //triggerBroadcast, 若斷線重連則需自動清除過去監聽事件
        ee.removeAllListeners('triggerBroadcast')
        ee.on('triggerBroadcast', triggerBroadcast)


        //triggerDeliver, 若斷線重連則需自動清除過去監聽事件
        ee.removeAllListeners('triggerDeliver')
        ee.on('triggerDeliver', triggerDeliver)


    }


    /**
     * SocketIO監聽伺服器端廣播事件
     *
     * @memberof WConversiClient
     * @param {*} data 傳入廣播訊息
     * @example
     * wo.on('broadcast', function(data) {
     *     ...
     * })
     */
    function onBroadcast() {} onBroadcast()


    /**
     * SocketIO監聽伺服器端交付事件
     *
     * @memberof WConversiClient
     * @param {*} data 傳入交付訊息
     * @example
     * wo.on('deliver', function(data) {
        *     ...
        * })
        */
    function onDeliver() {} onDeliver()


    /**
     * SocketIO通訊物件對伺服器端執行函數，表示傳送資料給伺服器，並請伺服器執行函數
     *
     * @memberof WConversiClient
     * @function execute
     * @param {String} func 輸入執行函數之名稱字串
     * @param {*} [input=null] 輸入執行函數之輸入資訊
     * @example
     * let func = 'NameOfFunction'
     * let input = {...}
     * wo.execute(func, input)
     */
    ee.execute = function (func, input, cbProgress = function () {}) {
        let pm = genPm()
        eeEmit('triggerExecute', func, input,
            function(output) { //結果用promise回傳
                pm.resolve(output)
            },
            cbProgress //傳輸進度用cb回傳
        )
        return pm
    }


    /**
     * SocketIO通訊物件對伺服器端廣播函數，表示傳送資料給伺服器，還需轉送其他客戶端
     *
     * @memberof WConversiClient
     * @function broadcast
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.broadcast(data)
     */
    ee.broadcast = function (data, cbProgress = function () {}) {
        eeEmit('triggerBroadcast', data, cbProgress)
    }


    /**
     * SocketIO通訊物件對伺服器端交付函數，表示僅傳送資料給伺服器
     *
     * @memberof WConversiClient
     * @function deliver
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.deliver(data)
     */
    ee.deliver = function (data, cbProgress = function () {}) {
        eeEmit('triggerDeliver', data, cbProgress)
    }


    /**
     * SocketIO監聽重連事件
     *
     * @memberof WConversiClient
     * @example
     * wo.on('reconn', function() {
     *     ...
     * })
     */
    function onReconn() {} onReconn()
    function reconn() {
        eeEmit('reconn')
    }


    //core
    core()


    return ee
}


export default WConversiClient
