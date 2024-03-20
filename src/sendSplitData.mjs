import chunk from 'lodash-es/chunk'
import join from 'lodash-es/join'
import each from 'lodash-es/each'
import isFunction from 'lodash-es/isFunction'
import genID from 'wsemi/src/genID.mjs'
import obj2str from 'wsemi/src/obj2str.mjs'


function sendSplitData(wsc, strSplitLength, data, cbProgress, cbError) {

    //obj2str, 數據物件轉字串
    let s = obj2str(data)

    //chunk, 依照strSplitLength切分字串
    let ss = chunk(s, strSplitLength)

    //pkid, 字串資料封包id
    let pkid = genID()

    //pkn, 字串資料封包總長
    let pkn = ss.length

    //send, 循序發送
    each(ss, function (str, pki) {

        //join, 因chunk切分後為char array故需join合併為字串
        str = join(str, '')

        //m, 添加資訊成為組合封包
        let m = `${pkid}|${pki}|${pkn}|${str}`

        //send
        wsc.send(m, function(err) {
            if (err) {
                if (isFunction(cbError)) {
                    cbError(err)
                }
            }
        })

        //cbProgress
        if (isFunction(cbProgress)) {
            cbProgress((pki + 1) / pkn * 100)
        }

    })

}


export default sendSplitData
