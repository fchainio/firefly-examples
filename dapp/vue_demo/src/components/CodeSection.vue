<template>
  <div class="codesection">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="container">
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
  </div>
</template>

<script>
    export default {};
</script>

<style>
    .codesection {
        font-size: 14px;
        text-align: left;
        margin-bottom: 0.6019rem;
    }
    
    .container {
        border: 1px solid #c7d8e0;
        background-color: #f5f7f9!important;
        padding: 0.3704rem;
    }
    
    .title {
        font-size: 0.3889rem;
        color: #213a5a;
        margin-bottom: 0.2778rem;
    }
    
    .code {
        padding-top: 20px;
    }
    
    .code pre[class*="language-"] {
        padding: 0;
    }
    
    .code div.code-toolbar>.toolbar {
        top: -23px;
        opacity: 1;
    }
    
    .result {
        margin-top: 0.463rem;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    .result div {
        word-break: break-all;
    }
    
    .actions {
        padding: 0px 8px;
        /*border-top: 1px solid #999999;*/
        text-align: right;
    }
    
    pre {
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
        margin: 0!important;
        background-color: #f5f7f9!important;
    }
    
    .hr-text {
        line-height: 1em;
        position: relative;
        outline: 0;
        border: 0;
        color: #213a5a;
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
        color: #213a5a;
        background-color: #f5f7f9;
    }
</style>