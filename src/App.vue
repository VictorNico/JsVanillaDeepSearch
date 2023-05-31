<template>
  <div class="container card p-2 g-4 text-center">
    <img
      alt="Vue logo"
      src="https://thumbs.gfycat.com/AgitatedMindlessAxolotl.webp"
    />
    <span class="fw-bold fs-5 ">Deep Research Assessment Answer</span>
    <div class="d-flex d-flex-row mt-4  justify-content-between">
      <div class="form-group m-1 h-100 col">
        <label for="src">Source Data</label>
        <textarea class="form-control" id="src" v-model="jsonData" aria-describedby="srcData" placeholder="Enter your source data"></textarea>
        <small id="srcData" class="form-text text-blue"> AS 
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledSrcO}">
            <input class="form-check-input" type="radio" name="radio" v-model="srcType" id="obj" value="object" :disabled="!disabledSrcO">
            <label class="form-check-label" for="obj">
              Object
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledSrcA}">
            <input class="form-check-input" type="radio" name="radio" v-model="srcType" id="arr" value="array" :disabled="!disabledSrcA">
            <label class="form-check-label" for="arr">
              Array
            </label>
          </div>
          <div :class="{
            'form-check':true}">
            <input class="form-check-input" type="radio" name="radio" v-model="srcType" id="str" value="string" checked>
            <label class="form-check-label" for="str">
              String
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledSrcN}">
            <input class="form-check-input" type="radio" name="radio" v-model="srcType" id="num" value="number" :disabled="!disabledSrcN">
            <label class="form-check-label" for="num">
              Number
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledSrcB}">
            <input class="form-check-input" type="radio" name="radio" v-model="srcType" id="bool" value="boolean" :disabled="!disabledSrcB">
            <label class="form-check-label" for="bool">
              Boolean
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledSrcD}">
            <input class="form-check-input" type="radio" name="radio" v-model="srcType" id="date" value="date" :disabled="!disabledSrcD">
            <label class="form-check-label" for="date">
              Date
            </label>
          </div>
        </small>
      </div>
      <div class="form-group m-1 h-100 col">
        <label for="pattern">Pattern</label>
        <textarea class="form-control" id="pattern" aria-describedby="patternData" placeholder="Enter your pattern" v-model="jsonData1"></textarea>
        <small id="patternData" class="form-text text-blue">
          AS 
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledPO}">
            <input class="form-check-input" type="radio" name="radio1" v-model="srcType1" id="obj" value="object" :disabled="!disabledPO">
            <label class="form-check-label" for="obj">
              Object
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledPA}">
            <input class="form-check-input" type="radio" name="radio1" v-model="srcType1" id="arr" value="array" :disabled="!disabledPA">
            <label class="form-check-label" for="arr">
              Array
            </label>
          </div>
          <div :class="{
            'form-check':true}">
            <input class="form-check-input" type="radio" name="radio1" v-model="srcType1" id="str" value="string" checked>
            <label class="form-check-label" for="str">
              String
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledPN}">
            <input class="form-check-input" type="radio" name="radio1" v-model="srcType1" id="num" value="number" :disabled="!disabledPN">
            <label class="form-check-label" for="num">
              Number
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':!disabledPB}">
            <input class="form-check-input" type="radio" name="radio1" v-model="srcType1" id="bool" value="boolean" :disabled="!disabledPB">
            <label class="form-check-label" for="bool">
              Boolean
            </label>
          </div>
          <div :class="{
            'form-check':true, 
            'disabled  text-muted':disabledPD}">
            <input class="form-check-input" type="radio" name="radio1" v-model="srcType1" id="date" value="date" :disabled="disabledPD">
            <label class="form-check-label" for="date">
              Date
            </label>
          </div>
        </small>
      </div>
    </div>
    <div class="d-flex d-flex-row justify-content-between">
      <json-viewer
        v-model:value="jsonDataC"
        expanded
        :expandDepth="10"
        copyable
        boxed
        preview-mode
        show-double-quotes
        class="col"
      ></json-viewer>
      <json-viewer
        v-model:value="jsonData1C"
        expanded
        :expandDepth="10"
        copyable
        boxed
        preview-mode
        show-double-quotes
        class="col"
      ></json-viewer>
    </div>
    <div class="d-flex d-flex-row justify-content-center my-3">
      <button 
        type="button" 
        class="btn btn-outline-info"
        @click="search"
        :disabled="this.jsonData.length == 0 || this.jsonData1.length == 0"
        >
        <span class="text-dark fw-bold text-xl btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg> Run
        </span>
      </button>
    </div>
    <div class="d-flex d-flex-row justify-content-center">
      <json-viewer
        v-model:value="result"
        expanded
        :expandDepth="10"
        copyable
        boxed
        preview-mode
        show-double-quotes
        class="col"
      ></json-viewer>
    </div>
  </div>
</template>

<script>
import deepSearchJS from "@/deepSearch"
export default {
  name: "App",
  components: {},
  watch:{
    jsonData(){
      this.srcType = 'string'
    },
    jsonData1(){
      this.srcType1 = 'string'
    }
  },
  methods:{
    search(){
      this.result = deepSearchJS(this.jsonDataC,this.jsonData1C)
    }
  },
  computed:{
    // src
    disabledSrcA(){
      let flag
      try{
        flag = (JSON.parse(this.jsonData) instanceof Array)
      }catch{
        flag = false
      }
      return flag && this.jsonData.length > 0
    },
    disabledSrcO(){
      let flag
      try{
        flag = JSON.parse(this.jsonData) instanceof Object
      }catch{
        flag = false
      }
      return flag && this.jsonData.length > 0
    },
    disabledSrcD(){
      let flag
      try{
        flag = (Date.parse(this.jsonData) instanceof Date)
      }catch{
        flag = false
      }
      return flag && this.jsonData.length > 0
    },
    disabledSrcN(){
      let flag
      try{
        flag = (+this.jsonData instanceof Number)
      }catch{
        flag = false
      }
      return flag && this.jsonData.length > 0
    },
    disabledSrcB(){
      let flag
      try{
        flag = (new RegExp("true").test(this.jsonData) || new RegExp("false").test(this.jsonData))
      }catch{
        flag = false
      }
      return flag && this.jsonData.length > 0
    },
    // pattern
    disabledPA(){
      let flag
      try{
        flag = (JSON.parse(this.jsonData1) instanceof Array)
      }catch{
        flag = false
      }
      return flag && this.jsonData1.length > 0
    },
    disabledPO(){
      let flag
      try{
        flag = (JSON.parse(this.jsonData1) instanceof Object)
      }catch{
        flag = false
      }
      return flag && this.jsonData1.length > 0
    },
    disabledPD(){
      let flag
      try{
        flag = (Date.parse(this.jsonData1) instanceof Date)
      }catch{
        flag = false
      }
      return flag && this.jsonData1.length > 0
    },
    disabledPN(){
      let flag
      try{
        flag = (+this.jsonData1 instanceof Number)
      }catch{
        flag = false
      }
      return flag && this.jsonData1.length > 0
    },
    disabledPB(){
      let flag
      try{
        flag = (new RegExp("true").test(this.jsonData1) || new RegExp("false").test(this.jsonData1))
      }catch{
        flag = false
      }
      return flag && this.jsonData1.length > 0
    },
    // convert
    jsonDataC(){
      let data
      switch (this.srcType) {
        case 'object':
          data = JSON.parse(this.jsonData)
          break;
          
        case 'array':
          data = JSON.parse(this.jsonData)
          break;
          
        case 'date':
          data = Date.parse(this.jsonData)
          break;
          
        case 'number':
          data = +this.jsonData
          break;
          
        case 'boolean':
          data = new RegExp("true").test(this.jsonData) || new RegExp("false").test(this.jsonData)
          break;
      
        default:
          data = this.jsonData
          break;
      }
      console.log(this)
      return data
    },
    jsonData1C(){
      let data
      switch (this.srcType1) {
        case 'object':
          data = JSON.parse(this.jsonData1)
          break;
          
        case 'array':
          data = JSON.parse(JSON.stringify(this.jsonData1))
          break;
          
        case 'date':
          data = Date.parse(this.jsonData1)
          break;
          
        case 'number':
          data = +this.jsonData1
          break;
          
        case 'boolean':
          data = new RegExp("true").test(this.jsonData1) || new RegExp("false").test(this.jsonData1)
          break;

        default:
          data = this.jsonData1
          break;
      }
      return data
    }
  },
  data() {
    return {
      jsonData: '',
      jsonData1: '',
      srcType: 'string',
      srcType1: 'string',
      result:null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
