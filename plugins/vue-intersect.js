/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueIntersect from '@arnellebalane/vue-intersect'

// デフォルトの設定
Vue.use(VueIntersect, {
  threshold: 0.2,
  root: null,
  rootMargin: '0px 0px 0px 0px'
})

// EX: 画面内に入ったときの処理
//  div(v-intersect="{callback: onIntersect, threshold: 0.5}")
//
//  methods: {
//    onIntersect(entry) {
//      if (entry.isIntersecting) {
//        entry.target.classList.add('in');
//      } else {
//        entry.target.classList.remove('in');
//      }
//    }
//  }
