<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div slot="header" class="clearfix">
        <span>产品报表信息</span>
        <el-button
          style="float: right; padding: 10px 20px"
          type="success"
          icon="el-icon-circle-plus"
          round
          @click="openAddDialog()"
        >增加监控</el-button>
      </div>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>平台一</span>
            </div>
            <el-table v-loading="loading" :data="table" stripe style="width: 100%">
              <el-table-column sortable prop="Name" label="应用">
                <template slot-scope="scope">
                  <el-link
                    :type="scope.row.Message==='Health'?'success':'danger'"
                    :href="scope.row.Host"
                    target="_blank"
                  >{{ scope.row.Name }}</el-link>
                </template>
              </el-table-column>
              <el-table-column sortable prop="Message" label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.Message==='Health'?'success':'danger'"
                  >{{ scope.row.Message }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column sortable prop="action" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    circle
                    @click="dialog.row=scope.row; dialog.mode='edit'; dialogFormVisible = true; value=scope.row.Category"
                  />

                  <el-button
                    icon="el-icon-delete"
                    size="mini"
                    type="danger"
                    circle
                    @click="handleDelete(scope.row)"
                  />
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>平台二</span>
            </div>
            <el-table v-loading="loading" :data="table2" stripe style="width: 100%">
              <el-table-column sortable prop="Name" label="应用">
                <template slot-scope="scope">
                  <el-link
                    :type="scope.row.Message==='Health'?'success':'danger'"
                    :href="scope.row.Host"
                    target="_blank"
                  >{{ scope.row.Name }}</el-link>
                </template>
              </el-table-column>
              <el-table-column sortable prop="Message" label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.Message==='Health'?'success':'danger'"
                  >{{ scope.row.Message }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column sortable prop="action" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    circle
                    @click="dialog.row=scope.row; dialog.mode='edit'; dialogFormVisible = true; value=scope.row.Category"
                  />

                  <el-button
                    icon="el-icon-delete"
                    size="mini"
                    type="danger"
                    circle
                    @click="handleDelete(scope.row)"
                  />
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>落地页</span>
            </div>
            <el-table v-loading="loading" :data="table3" stripe style="width: 100%">
              <el-table-column sortable prop="Name" label="应用">
                <template slot-scope="scope">
                  <el-link
                    :type="scope.row.Message==='Health'?'success':'danger'"
                    :href="scope.row.Host"
                    target="_blank"
                  >{{ scope.row.Name }}</el-link>
                </template>
              </el-table-column>
              <el-table-column sortable prop="Message" label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.Message==='Health'?'success':'danger'"
                  >{{ scope.row.Message }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column sortable prop="action" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    circle
                    @click="dialog.row=scope.row; dialog.mode='edit'; dialogFormVisible = true; value=scope.row.Category"
                  />

                  <el-button
                    icon="el-icon-delete"
                    size="mini"
                    type="danger"
                    circle
                    @click="handleDelete(scope.row)"
                  />
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>

        <el-col :xs="24" :sm="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>域名跳转</span>
            </div>
            <el-table v-loading="loading" :data="table4" stripe style="width: 100%">
              <el-table-column sortable prop="Name" label="应用">
                <template slot-scope="scope">
                  <el-link
                    :type="scope.row.Message==='Health'?'success':'danger'"
                    :href="scope.row.Host"
                    target="_blank"
                  >{{ scope.row.Name }}</el-link>
                </template>
              </el-table-column>
              <el-table-column sortable prop="Message" label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.Message==='Health'?'success':'danger'"
                  >{{ scope.row.Message }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column sortable prop="action" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    circle
                    @click="dialog.row=scope.row; dialog.mode='edit'; dialogFormVisible = true; value=scope.row.Category"
                  />

                  <el-button
                    icon="el-icon-delete"
                    size="mini"
                    type="danger"
                    circle
                    @click="handleDelete(scope.row)"
                  />
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>

        <el-col :xs="24" :sm="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>其他</span>
            </div>
            <el-table v-loading="loading" :data="table5" stripe style="width: 100%">
              <el-table-column sortable prop="Name" label="应用">
                <template slot-scope="scope">
                  <el-link
                    :type="scope.row.Message==='Health'?'success':'danger'"
                    :href="scope.row.Host"
                    target="_blank"
                  >{{ scope.row.Name }}</el-link>
                </template>
              </el-table-column>
              <el-table-column sortable prop="Message" label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.Message==='Health'?'success':'danger'"
                  >{{ scope.row.Message }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column sortable prop="action" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    circle
                    @click="dialog.row=scope.row; dialog.mode='edit'; dialogFormVisible = true; value=scope.row.Category"
                  />

                  <el-button
                    icon="el-icon-delete"
                    size="mini"
                    type="danger"
                    circle
                    @click="handleDelete(scope.row)"
                  />
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="信息编辑" :visible.sync="dialogFormVisible">
      <el-form :model="dialog.row">
        <el-form-item label="类型" label-width="150px">
          <el-select v-model="dialog.row.Category" placeholder="请选择">
            <el-option
              v-for="item in categories"
              :key="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="服务名称" label-width="150px">
          <el-input v-model="dialog.row.Name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="监控域名" label-width="150px">
          <el-input v-model="dialog.row.Host" autocomplete="off" :placeholder="host" />
        </el-form-item>
        <el-form-item label="相应类型" label-width="150px">
          <el-select v-model="dialog.row.ResponseType" placeholder="选择类型">
            <el-option label="html" value="html" />
            <el-option label="json" value="json" />
          </el-select>
        </el-form-item>
        <el-form-item label="相应内容" label-width="150px">
          <el-input v-model="dialog.row.ResponseContent" autocomplete="off" :placeholder="placeholder" />
        </el-form-item>
        <el-form-item label="联系人邮箱" label-width="150px">
          <el-input v-model="dialog.row.Context" autocomplete="off" :placeholder="email" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false; load()">取 消</el-button>
        <el-button type="primary" @click="saveRecord()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  checkHealth,
  updateTask,
  addTask,
  deleteTask
} from '@/api/check-health'
import { confirmBox } from '@/utils/msg'
export default {
  name: 'Dashboard',
  data() {
    return {
      dialog: {
        mode: 'add',
        row: {}
      },
      placeholder: '{"code": "000", "message": "OK"}',
      email: '需要通知的邮箱，比如 xxxx@ruixiaoyun.com',
      host: '需要监控的链接地址',
      tag1: '',
      table: [],
      table2: [],
      table3: [],
      table4: [],
      table5: [],
      dialogFormVisible: false,
      categories: [],
      value: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      loading: true
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    openAddDialog() {
      this.dialog.row = {}
      this.dialog.mode = 'add'
      this.dialogFormVisible = true
      this.categories = [
        '平台1', '平台2', '落地页', '跳转域名', '其他'
      ]
    },
    handleDelete(row) {
      confirmBox(
        '确认删除',
        deleteTask,
        {
          name: row.Name
        },
        () => this.load()
      )
    },
    saveRecord() {
      const mode = this.dialog.mode
      console.log(this.dialog.row)
      if (mode === 'edit') {
        confirmBox(
          '确认保存',
          updateTask,
          this.dialog.row,
          () => {
            this.load()
            this.dialogFormVisible = false
          },
          () => {
            this.load()
            this.dialogFormVisible = false
          }
        )
      } else {
        console.log(this.dialog.row)
        this.value = this.dialog.row.Category
        confirmBox(
          '确认保存',
          addTask,
          this.dialog.row,
          () => {
            this.load()
            this.dialogFormVisible = false
          },
          () => {
            this.load()
            this.dialogFormVisible = false
          }
        )
      }
    },
    load() {
      checkHealth().then(response => {
        const data = response.obj
        this.table = data
          .filter(x => x.Category.startsWith('平台1'))
          .sort((x, y) => {
            var x_message = x.Message
            var y_message = y.Message
            if (x_message > y_message) return 1
            if (x_message < y_message) return -1
            if (x_message === y_message) return 0
          })
        this.table2 = data
          .filter(x => x.Category.startsWith('平台2'))
          .sort((x, y) => {
            var x_message = x.Message
            var y_message = y.Message
            if (x_message > y_message) return 1
            if (x_message < y_message) return -1
            if (x_message === y_message) return 0
          })
        this.table3 = data
          .filter(x => x.Category.startsWith('落地页'))
          .sort((x, y) => {
            var x_message = x.Message
            var y_message = y.Message
            if (x_message > y_message) return 1
            if (x_message < y_message) return -1
            if (x_message === y_message) return 0
          })
        this.table4 = data
          .filter(x => x.Category.startsWith('跳转域名'))
          .sort((x, y) => {
            var x_message = x.Message
            var y_message = y.Message
            if (x_message > y_message) return 1
            if (x_message < y_message) return -1
            if (x_message === y_message) return 0
          })
        this.table5 = data
          .filter(x => x.Category.startsWith('其他'))
          .sort((x, y) => {
            var x_message = x.Message
            var y_message = y.Message
            if (x_message > y_message) return 1
            if (x_message < y_message) return -1
            if (x_message === y_message) return 0
          })
        const temp = data.map(x => x.Category)
        this.categories = [...new Set(temp)]
        console.log(this.categories)
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
