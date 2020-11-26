<template>
  <el-dialog :title="current.title" :visible.sync="current.show" :width="current.dialog_width" @close="my_close"
    @open="my_open">

    <div :is="'important'" :dataAll="{current:current.components.query}"></div>

    <!-- <el-tabs v-model="current.activeName" v-if="current.components.content.length>1">
      <el-tab-pane :label="item.label" :name="item.name" :key="item.name+index"
        v-for="(item, index) in current.components.content">
        <div :is="'important2'" :dataAll="{current:item}"></div>
      </el-tab-pane>
    </el-tabs> -->
    <div :is="'important'" :dataAll="{current:current.components.content}"></div>

    <span slot="footer" class="dialog-footer">
      <template v-for="(item, index) in current.toolBtn">
        <el-button size="mini" :type="item.type" @click="public_click2({item:item})" :key="index"
          v-if="jurisdictionJson({process:item.process,jurisdictionList:item.jurisdictionJson})">
          {{ $t(item.label) }}
        </el-button>
      </template>

    </span>
  </el-dialog>
</template>
<script lang="ts">
  import {
    myVue
  } from "@/components/class/myVue";
  import {
    Component
  } from 'vue-property-decorator';
  import * as utils from "@/components/util/utils";


  @Component
  export default class HelloWorld extends myVue {
    my_open() {
      this.current.open()
    }

    my_close() {
      this.current.close()
    }

    public_click2(data: any) {
      data.item.click()
    }

    myBtnList(data: any) {
      let list = []
      for (let i = 0; i < this.current.tableBtn.length; i++) {
        let item = this.current.tableBtn[i];
        let bool = utils.isJurisdiction({
          process: item.process,
          jurisdictionList: item.jurisdictionJson,
          data: {
            row: data.row
          }
        })
        if (bool) {
          list.push(item)
        }
      }
      return list
    }

    myBtnOne(data: any) {
      let list = this.myBtnList(data);
      if (list.length > 0) {
        return list[0]
      } else {
        return {}
      }
    }

    myShowSummary(param: any) {
      return this.current.summaryData(param)
    }

    row_style({
      row,
      rowIndex
    }: any) {
      return this.current.row_style({
        row,
        rowIndex,
        that: this.current
      })
    }

    handleSizeChange(val: any) { // 更新查询的行数
      this.current.rows = val
      this.reQuery("content")
    }

    handleCurrentChange(val: any) { // 更新查询的页数
      this.current.currentPage = val
      this.reQuery("content")
    }

    sortChange(a: any, b: any, c: any) {}

    selectionChange(selection: any) {
      this.current.selectRow = selection
    }
    cell_style({
      row,
      column,
      rowIndex,
      columnIndex
    }: any) {
      if (column.label == "质检状态") {
        if (row.state == "待审核") {
          return {
            'background-color': "#FCDAD5"
          };
        }
      }
    }

    rowClick(row: any, b: any, c: any) {
      this.current.selectRowOnly = row
      this.current.rowClick({
        row: row
      })
    }

    cellClick(row: any, column: any, cell: any, event: any, data: any) {
      let content = utils.getPage().getComponents({
        system_id: "content"
      })
      console.log(content)

      this.current.selectRowOnly = row

      for (let i = 0; i < this.current.components.content.length; i++) {
        let item = this.current.components.content[i];
        if (item.jurisdictionJson.length > 0) {
          let bool = this.jurisdictionJson({
            jurisdictionList: item.jurisdictionJson
          })
          if (bool) {
            this.current.cellClick(column)
          }
        }
      }
    }

    cellMouseEnter(a: any, b: any, c: any) {}

    public_click(data: any) {
      this.current.selectRowOnly = data.row
      data.item.click({
        row: data.row
      })
    }

  }
</script>

<style scoped lang="scss">
  @import "style";
</style>