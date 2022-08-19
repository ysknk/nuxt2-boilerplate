/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

// デフォルトの設定
Vue.use(VueScrollTo, {
  duration: 400,
  easing: 'ease-in-out'
})

// EX: 通常スクロールの場合
// a(v-scroll-to="'body'" href="javascript:void(0)")

// EX: ページ遷移＋スクロール（ハッシュ付きURL遷移）
// mounted() {
//   if (!process.browser) return
//   if ($nuxt.$route.hash) {
//     this.scrollToHash()
//   }
// },
// methods: {
//   scrollToHash () {
//     const hash=$nuxt.$route.hash
//     setTimeout(() => {
//       this.$scrollTo(hash, 0, { offset: 0 })
//     }, 500) // NOTE: 遷移アニメーション時間と合わせる
//   }
// }
