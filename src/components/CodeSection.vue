//代码与功能
<template>
  <div class="codesection">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="code">
      <slot name="code"></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <div class="result">
      执行结果：<br/><br/>
      <slot name="result"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.codesection{
  margin: 10px 10px;
  /* padding: 8px 8px; */
  background: #e3e3e3;
  border:1px solid #e3e3e3;
  border-radius: 10px;
  font-size: 14px;
  text-align: left;
}
.title{
  padding: 8px 8px;
  font-size: 16px;
  font-weight: 500;
  background: #999999;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.code{
  overflow: auto;
  padding: 8px 8px;
  
}
.result{
  padding: 8px 8px;
  border-top: 1px solid #999999;
  overflow: auto;
}
.actions{
  padding: 8px 8px;
  border-top: 1px solid #999999;
}
</style>
