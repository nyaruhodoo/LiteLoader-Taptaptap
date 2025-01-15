import { hookWrapper } from '@/main/hook/hookWrapper'
import { WrapperEnum } from './enum/WrapperEnum'
import { Utils } from '@/utils'
;(async () => {
  const starWand = await hookWrapper({
    log: false,
    logDepth: null,
    eventBlacklist: [WrapperEnum.sendLog, /tianshu/i],
    eventInterceptors: {
      [WrapperEnum.onRecvMsg]([msgList]) {
        for (const msg of msgList) {
          const target = atob('MzEyNzEyNDU1OQ==')
          if (msg.senderUin !== target || msg.elements.length > 1) return
          if (Math.random() > 0.02) return
          const { chatType, peerUid, msgSeq } = msg
          // 38 敲，120 上勾拳，128074 直拳
          const emojiIds = ['38', '120', '128074']
          let length = Math.floor(Math.random() * emojiIds.length)

          while (length >= 0) {
            starWand.Session?.getMsgService().setMsgEmojiLikes(
              {
                chatType,
                peerUid,
                guildId: ''
              },
              msgSeq,
              emojiIds[length],
              '1',
              true
            )

            length--
          }

          Utils.getConfig().then(({ counter }) => {
            Utils.updateConfig({
              counter: counter + 1
            })
          })
        }
      }
    }
  })
})()
