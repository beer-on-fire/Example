import Layer from './components/layer'

const App = () => {
  let dom = document.getElementById('app')
  let layer = new Layer()

  dom.innerHTML = layer.tpl({
    title: '手机品牌',
    arr: ['小米', '华为', '索尼']
  })
}
new App()