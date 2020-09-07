import { MessageBox, Message } from 'element-ui'

export function confirmBox(msg, request, param, afterAction, cancelAction) {
  MessageBox({
    title: '提示',
    message: msg,
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = '执行中...'
        request(param).then(response => {
          var successed = response.code === 0
          instance.confirmButtonLoading = false
          Message({
            type: successed ? 'success' : 'error',
            message: successed
              ? '执行成功'
              : '执行失败：' + response.msg,
            duration: successed ? 3000 : 0,
            showClose: true
          })
          done()
        }).catch(err => {
          console.log(err)
          instance.confirmButtonLoading = false
          Message({
            type: 'error',
            message: '执行失败',
            duration: 0,
            showClose: true
          })
          done()
        })
      } else {
        cancelAction && cancelAction()
        done()
      }
    }
  })
    .then(action => {
      afterAction && afterAction()
    })
    .catch(action => console.log(action))
}
