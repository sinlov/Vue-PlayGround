<template lang="pug">
  .page
    span.demonstration 显示总数
    el-pagination(
      @size-change="handleSizeChange",
      @current-change="handleCurrentChange",
      :current-page="currentPage1",
      :page-size="100",
      layout="total, prev, pager, next",
      :total="1000"
    ).
    span.demonstration 调整每页显示条数
    el-pagination(
  @size-change="handleSizeChange",
  @current-change="handleCurrentChange",
  :current-page="currentPage2",
  :page-sizes="[100, 200, 300, 400]",
  :page-size="100",
  layout="sizes, prev, pager, next",
  :total="1000"
    )
    span.demonstration 直接前往
    el-pagination(
  @size-change="handleSizeChange",
  @current-change="handleCurrentChange",
  :current-page="currentPage3",
  :page-size="100",
  layout="prev, pager, next, jumper",
  :total="1000"
  )
    span.demonstration 完整功能
    el-pagination(
  @size-change="handleSizeChange",
  @current-change="handleCurrentChange",
  :current-page="currentPage4",
  :page-sizes="[100, 200, 300, 400]",
  :page-size="100",
  layout="total, sizes, prev, pager, next, jumper",
  :total="400"
  )
</template>
<script>
  export default{
    data () {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    components: {
      // 'pager': pager
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.currentPage = val
        console.log(`当前页: ${val}`)
      }
    }
  }

</script>
<style>
  body{
    background-color:#ffffff;
  }

</style>
