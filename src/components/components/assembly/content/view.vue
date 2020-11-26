<template>
  <div>
    <div class="header">
      <div class="title">
        {{ $t(current.title) }}
      </div>
      <div class="btn">
        <template v-for="(item, index) in current.toolBtn">
          <el-button size="mini" :type="item.type" @click="public_click2({item:item})" :key="index"
            v-if="jurisdictionJson({jurisdictionList:item.jurisdictionJson})">{{ $t(item.label) }}
          </el-button>
        </template>
      </div>
    </div>
    <div class="content">
      <el-table :data="current.value" ref="singleTable" border :show-summary="current.summaryShow"
        :summary-method="myShowSummary" @sort-change="sortChange" @selection-change="selectionChange"
        @cell-click="cellClick" @row-click="rowClick" @cell-mouse-enter="cellMouseEnter" :cell-style="cell_style"
        :row-style="row_style" class="table">
        <template>
          <el-table-column type="selection" :key="Math.random()" v-if="current.selectionshow" align="center"
            fixed="left" width="40">
          </el-table-column>
          <el-table-column type="index" :label="current.getI18N('序号')" :key="Math.random()" v-if="current.numbershow"
            style="color: #00a0e9" align="center" fixed="left" width="58">
          </el-table-column>
          <el-table-column v-if="current.details_show" type="expand" width="58" :label="public_i18n('更多')">
            <template slot-scope="scope">
              <div :is="'view_content_details1'" :dataAll="{current:current,row:scope.row}"></div>
            </template>
          </el-table-column>
          <template v-for="(item, index) in current.components.content">
            <template v-if="item.type!='ComponentsInputHidden'">
              <el-table-column :align="item.align" :key="index" :label="item.label"
                v-if="item.components&&item.components.content&&item.components.content.length>0">
                <template v-for="(item2, index) in item.components.content">
                  <template v-if="item2.type!='ComponentsInputHidden'">
                    <el-table-column :align="item2.align" :key="index" :label="item2.label"
                      v-if="item2.components&&item2.components.content&&item2.components.content.length>0">
                      <template v-for="(info, index2) in item2.components.content">
                        <template v-if="info.type!='ComponentsInputHidden'">
                          <el-table-column :prop="info.name" :align="info.align" :label="info.label"
                            :key="info.label+index2">
                            <template slot-scope="scope">
                              <div v-if="info.type == 'ComponentsInput'">
                                {{ scope.row[item2.name] }}
                              </div>
                              <div v-else>
                                {{ scope.row[item2.name] }}
                              </div>
                            </template>
                          </el-table-column>
                        </template>
                      </template>
                    </el-table-column>
                    <el-table-column v-else :prop="item2.name" :align="item2.align" :label="item2.label"
                      :key="item2.label+index" :sortable="item2.sortable">
                      <template slot-scope="scope">
                        <div v-if="item2.type == 'ComponentsInput'">
                          {{ scope.row[item2.name] }}
                        </div>
                        <div v-else>
                          {{ scope.row[item2.name] }}
                        </div>
                      </template>
                    </el-table-column>
                  </template>
                </template>
              </el-table-column>
              <!--              走的这个-->
              <el-table-column v-else :prop="item.name" :align="item.align" :label="item.label" :key="item.label+index"
                :sortable="item.sortable" :width="item.style.width">
                <template slot-scope="scope">
                  <div v-if="item.type == 'ComponentsInput'">
                    {{ scope.row[item.name] }}
                  </div>
                  <div v-else>
                    {{ scope.row[item.name] }}
                  </div>
                </template>
              </el-table-column>
            </template>
          </template>

          <el-table-column :label="public_i18n('操作')" fixed="right" v-if="current.utilshow" align="center"
            :width="current.operation_width">
            <template slot-scope="scope">
              <el-dropdown trigger="click" split-button size="mini" type="primary"
                v-if="myBtnList({row:scope.row}).length>0" @command="public_click"
                @click="public_click({item:myBtnOne({row:scope.row}),row:scope.row})">
                {{ $t(myBtnOne({row: scope.row}).label) }}
                <el-dropdown-menu slot="dropdown">
                  <template v-for="(item, index) in current.tableBtn">
                    <template
                      v-if="jurisdictionJson({process:item.process,jurisdictionList:item.jurisdictionJson,data:{row:scope.row}})">
                      <el-dropdown-item :command="{item:item,row:scope.row}" :key="index">
                        {{ $t(item.label) }}
                      </el-dropdown-item>
                    </template>
                  </template>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="current.currentPage" :page-sizes="[10, 20, 50, 100,200]" :page-size="current.rows" background
        layout="total, sizes, prev, pager, next, jumper" :total="current.total">
      </el-pagination>
    </div>
  </div>

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
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
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
      this.reQuery(this.current.system_id)
    }

    handleCurrentChange(val: any) { // 更新查询的页数
      this.current.currentPage = val
      this.reQuery(this.current.system_id)
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

    public_click2(data: any) {
      this.current.selectRowOnly = data.row
      data.item.click()
    }
  }
</script>

<style scoped lang="scss">
  @import "style";
</style>