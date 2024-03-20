import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert' //提供靜態檔案
import { Server } from 'socket.io'
import events from 'events'
import get from 'lodash-es/get'
import ispint from 'wsemi/src/ispint.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cint from 'wsemi/src/cint.mjs'
import sendSplitData from './sendSplitData.mjs'
import mergeSplitData from './mergeSplitData.mjs'


let SocketIO = Server


/**
 * 建立SocketIO伺服器
 *
 * @class
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {Integer} [opt.port=8080] 輸入SocketIO伺服器所在port，預設8080
 * @param {String} [opt.pathPolling=undefined] 輸入socket.io伺服器無法使用WebSocket連線自動降級成為輪詢(polling)所在子目錄字串，預設undefined，代表使用'/socket.io'
 * @param {Integer} [opt.strSplitLength=1000000] 輸入傳輸封包長度整數，預設為1000000
 * @returns {Object} 回傳通訊物件，可監聽事件open、error、clientChange、execute、broadcast、deliver，可使用函數broadcast
 * @example
 *
 * import WConversiServer from 'w-conversi/dist/w-conversi-server.umd.js'
 *
 * let opt = {
 *     port: 8080,
 * }
 *
 * //new
 * let wo = new WConversiServer(opt)
 *
 * wo.on('open', function() {
 *     console.log(`Server[port:${opt.port}]: open`)
 *
 *     //broadcast
 *     // let n = 0
 *     // setInterval(() => {
 *     //     n += 1
 *     //     let o = {
 *     //         text: `server broadcast hi(${n})`,
 *     //         data: new Uint8Array([66, 97, 115]), //support Uint8Array data
 *     //     }
 *     //     wo.broadcast(o, function (prog) {
 *     //         console.log('broadcast prog', prog)
 *     //     })
 *     // }, 1000)
 *
 * })
 * wo.on('error', function(err) {
 *     console.log(`Server[port:${opt.port}]: error`, err)
 * })
 * wo.on('clientChange', function(clients) {
 *     console.log(`Server[port:${opt.port}]: now clients: ${clients.length}`)
 * })
 * wo.on('execute', function(func, input, callback) {
 *     console.log(`Server[port:${opt.port}]: execute`, func, input)
 *
 *     if (func === 'add') {
 *         let r = input.p1 + input.p2
 *         callback(r)
 *     }
 *
 * })
 * wo.on('broadcast', function(data) {
 *     console.log(`Server[port:${opt.port}]: broadcast`, data)
 * })
 * wo.on('deliver', function(data) {
 *     console.log(`Server[port:${opt.port}]: deliver`, data)
 * })
 *
 */
function WConversiServer(opt = {}) {


    //port
    let port = get(opt, 'port')
    if (!ispint(port)) {
        port = 8080
    }
    port = cint(port)


    //pathPolling
    let pathPolling = get(opt, 'pathPolling')


    //strSplitLength
    let strSplitLength = get(opt, 'strSplitLength')
    if (!ispint(strSplitLength)) {
        strSplitLength = 1000000
    }


    //ee
    let ee = new events.EventEmitter()


    //eeEmit
    function eeEmit(name, ...args) {
        setTimeout(() => {
            ee.emit(name, ...args)
        }, 1)
    }


    //server
    let server
    if (opt.serverHapi) {

        //use serverHapi
        server = opt.serverHapi

    }
    else {

        //create server
        server = Hapi.server({
            port: opt.port,
            //host: 'localhost',
            routes: {
                cors: true
            },
        })

    }


    //io
    let io = null
    let ioOpt = {}
    if (isestr(pathPolling)) {
        ioOpt = { path: pathPolling }
    }
    try {
        io = new SocketIO(server.listener, ioOpt)
    }
    catch (err) {
        error('create SocketIO catch error', err)
        return ee
    }


    //check
    if (!io) {
        error('can not create SocketIO', 'io from SocketIO is null')
        return ee
    }


    /**
     * SocketIO監聽開啟事件
     *
     * @memberof WConversiServer
     * @example
     * wo.on('open', function() {
     *     ...
     * })
     */
    function onOpen() {} onOpen()
    function open() {
        eeEmit('open')
    }
    open()


    /**
     * SocketIO監聽錯誤事件
     *
     * @memberof WConversiServer
     * @param {*} err 傳入錯誤訊息
     * @example
     * wo.on('error', function(err) {
     *     ...
     * })
     */
    function onError() {} onError()
    function error(msg, err) {
        eeEmit('error', { msg, err })
    }


    /**
     * SocketIO監聽客戶端變更(上下線)事件
     *
     * @memberof WConversiServer
     * @example
     * wo.on('clientChange', function(clients) {
     *     ...
     * })
     */
    function onClientChange() {} onClientChange()
    function clientChange() {
        eeEmit('clientChange', clients)
    }


    //connect
    let clients = []
    io.on('connect', function(client) {
        //console.log('connect', client.id)


        //client connected
        clients.push(client.id)
        clientChange()


        function sendData(data, cbProgress) {
            //console.log('sendData', data)
            try {
                //sendSplitData
                sendSplitData(client, strSplitLength, data, cbProgress, function (err) {
                    error('can not send message', err)
                })
            }
            catch (err) {
                error('send message catch error', err)
            }
        }


        //bind for execute
        client.sendData = sendData


        function parserData(data) {
            //console.log('parserData', data)

            //_mode
            let _mode = get(data, '_mode', '')

            //cbResult for execute
            function cbResult(output) {

                //add output
                data['output'] = output

                //delete input, 因input可能很大故回傳數據不包含原input
                delete data['input']

                //sendData
                sendData(data, null) //回傳執行結果就不處理進度回調

            }

            //emit
            if (_mode === 'execute') {

                //func
                let func = get(data, 'func', '')

                //input
                let input = get(data, 'input')

                //execute 執行
                eeEmit('execute', func, input, cbResult, sendData)

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


        function message(message) {
            //console.log('message', message)

            //mergeSplitData
            mergeSplitData(message, parserData)

        }
        client.on('message', message)


        //disconnect, close
        function disconnect(msg) {
            //console.log('disconnect', client.id, msg)

            //刪除client
            clients = clients.filter(function(id) {
                return id !== client.id
            })
            clientChange()

        }
        client.on('disconnect', disconnect)


        function triggerBroadcast(data, cbProgress) {

            //msg
            let msg = {
                _mode: 'broadcast',
                data: data,
            }

            //sendData
            sendData(msg, cbProgress)

        }


        //triggerBroadcast, 需對全部客戶端廣播, 不能清除過去監聽事件
        ee.on('triggerBroadcast', triggerBroadcast)


    })


    /**
     * SocketIO監聽客戶端執行事件
     *
     * @memberof WConversiServer
     * @param {String} func 傳入執行函數名稱字串
     * @param {*} input 傳入執行函數之輸入數據
     * @param {Function} callback 傳入執行函數之回調函數
     * @param {Function} sendData 傳入執行函數之強制回傳函數，提供傳送任意訊息給客戶端，供由服器多次回傳數據之用
     * @example
     * wo.on('execute', function(func, input, callback, sendData) {
     *     ...
     * })
     */
    function onExecute() {} onExecute()


    /**
     * SocketIO監聽客戶端廣播事件
     *
     * @memberof WConversiServer
     * @param {*} data 傳入廣播訊息
     * @example
     * wo.on('broadcast', function(data) {
     *     ...
     * })
     */
    function onBroadcast() {} onBroadcast()


    /**
     * SocketIO監聽客戶端交付事件
     *
     * @memberof WConversiServer
     * @param {*} data 傳入交付訊息
     * @example
     * wo.on('deliver', function(data) {
     *     ...
     * })
     */
    function onDeliver() {} onDeliver()


    /**
     * SocketIO通訊物件對客戶端廣播函數
     *
     * @memberof WConversiServer
     * @function broadcast
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.broadcast(data)
     */
    ee.broadcast = function (data, cbProgress = function () {}) {
        eeEmit('triggerBroadcast', data, cbProgress)
    }


    async function startServer() {

        //register inert
        await server.register(Inert)

        //api
        let api = [
            // {
            //     method: 'GET',
            //     path: '/{file*}',
            //     handler: {
            //         directory: {
            //             path: './'
            //         }
            //     },
            // },
            //預設僅提供測試之3檔案
            {
                method: 'GET',
                path: '/web.html',
                handler: {
                    file: {
                        path: './web.html'
                    },
                },
            },
            {
                method: 'GET',
                path: '/dist/w-conversi-client.umd.js',
                handler: {
                    file: {
                        path: './dist/w-conversi-client.umd.js'
                    },
                },
            },
            {
                method: 'GET',
                path: '/dist/w-conversi-client.umd.js.map',
                handler: {
                    file: {
                        path: './dist/w-conversi-client.umd.js.map'
                    },
                },
            },
        ]

        //route
        server.route(api)

        //start
        await server.start()

        console.log(`Server running at: ${server.info.uri}`)

    }

    if (opt.serverHapi) {
        //none
    }
    else {
        startServer()
    }

    return ee
}


export default WConversiServer
