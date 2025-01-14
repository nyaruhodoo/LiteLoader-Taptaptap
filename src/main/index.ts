import { hookWrapper } from '@/main/hook/hookWrapper'
import { WrapperEnum } from './enum/WrapperEnum'
;(async () => {
  const starWand = await hookWrapper({
    log: false,
    logDepth: null,
    eventBlacklist: [WrapperEnum.sendLog, /tianshu/i],
    eventInterceptors: {
      [WrapperEnum.onRecvMsg]([msgList]) {
        for (const msg of msgList) {
          if (msg.senderUin !== '3127124559' || msg.elements.length > 1) return
          if (Math.random() > 0.05) return
          const { chatType, peerUid, msgSeq } = msg
          // 38 敲，120 上勾拳
          const emojiId = Math.random() < 0.5 ? '38' : '120'

          starWand.Session?.getMsgService().setMsgEmojiLikes(
            {
              chatType,
              peerUid,
              guildId: ''
            },
            msgSeq,
            emojiId,
            '1',
            true
          )
        }
      }
      // 'NodeIQQNTWrapperSession/create/getMsgService/setMsgEmojiLikes'() {}
    }
  })
})()
