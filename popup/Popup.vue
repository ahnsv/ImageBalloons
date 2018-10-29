<template>
    <div>
      <el-row>
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
      </el-row>
    </div>
</template>
<script>
import Vue from "vue";
import {apiKey, cx} from "./config"
import Infinite from "vue-infinite-loading";
import {google} from 'googleapis'
const customSearch = google.customsearch('v1')

function getSearchData(options) {
  // https://www.googleapis.com/customsearch/v1?key=Your_key&cx=cx&q=cars&callback=hndlr
   const res = await customsearch.cse.list({
    cx: options.cx,
    q: options.q,
    auth: options.apiKey,
  });
  console.log(res.data);
  return res.data;
}

</script>