/* eslint-disable unicorn/prefer-includes */
export default function detectUseStyle (property, value) {
  const div = document.createElement('div')
  div.style.setProperty(property, value)
  return div.style.getPropertyValue(property).indexOf(value) !== -1
}

// EX:
// import detectUseStyle from "~/plugins/ponifill-detectUseStyle"
//
// mounted() {
//   // NOTE: mask cssに対応しているかどうか判定
//   if (!detectUseStyle('mask-repeat', 'repeat')
//     && !detectUseStyle('-webkit-mask-repeat', 'repeat')) {
//     this.$refs.elem.classList.add('no-mask');
//   } else {
//     this.$refs.elem.classList.add('use-mask');
//   }
// },
