<template>
  <div>
    <el-card>
      <div class="app-container">
        <page-header title="文件上传">
          <slot slot="content">点击按钮上传</slot>
        </page-header>
      </div>
      <div class="app-content">
        <el-upload
          ref="upload"
          v-loading="loading"
          name="multipartFiles"
          class="upload-demo"
          multiple
          action
          :show-file-list="true"
          :on-preview="handlePreview"
          :on-change="handleChange"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="upload">上传</el-button>
          <div slot="tip" class="el-upload__tip">点击【选取文件】选择取数文件，然后点击【上传】执行上传</div>
        </el-upload>
      </div>
    </el-card>

  </div>
</template>
<script>
import { uploadPlan } from '@/api/upload'
export default {
  data() {
    return {
      fileList: [],
      formData: new FormData(),
      loading: false,
      dialog: {
        visible: false,
        datetime: '',
        upswitch: '立即上传',
        bizswitch: '第一套'
      }
    }
  },
  methods: {
    appendFile(file) {
      console.log('appendFile')
      // this.formData.append('file', file.file)
    },
    upload() {
      this.loading = true
      this.fileList.forEach(f => {
        this.formData.append('file', f.raw)
      })
      uploadPlan(this.formData).then(response => {
        console.log(response)
        this.loading = false
        const code = response.code
        const successed = code === '0000'
        this.$message({
          showClose: true,
          duration: 3000,
          message: successed ? '执行成功' : response.message,
          type: successed ? 'success' : 'error'
        })
        this.fileList = []
        this.formData = new FormData()
      })
    },
    submitUpload() {
    //   this.dialog.visible = false
      // this.$refs.upload.submit()
      this.upload()
    },
    handleChange(file, fileList) {
      console.log(file)
      console.log(fileList)
      this.fileList = fileList
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>
