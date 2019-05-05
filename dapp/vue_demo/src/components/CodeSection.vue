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
      <hr class="hr-text" data-content="RESULT">
      <slot name="result"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.codesection {
  margin: 10px 10px;
  /* padding: 8px 8px; */
  background: #e3e3e3;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  font-size: 14px;
  text-align: left;
}
.title {
  padding: 8px 8px;
  font-size: 16px;
  font-weight: 500;
  background: #d9d9d9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.code {
  overflow: auto;
  padding: 0px 8px;
}
.result {
  padding: 0 8px 8px;
  overflow: auto;
  /* background: #eee; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.actions {
  padding: 0px 8px;
  /*border-top: 1px solid #999999;*/
  text-align: center;
}
pre{
  color: black;
	background: none;
	text-shadow: 0 1px white;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
}
.hr-text:before {
  content: "";
  background: linear-gradient(to right, transparent, #818078, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1.5px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #000;
  background-color: #e3e3e3;
}
</style>
