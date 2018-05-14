window.addEventListener('load', init)

function init() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = "rgb(200,0,0)"

  let x = 0
  let interv = setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)"
    let rec = ctx.fillRect(x, 0, 10, 40)
    if(x === 490) {
      clearInterval(interv)
      return
    }
    x+=10
  }, 10)
  
  ctx.fillRect(175, 150, 55, 50);
  ctx.fillRect(275, 150, 55, 50);

  (() => {

    ctx.beginPath()
    ctx.arc(250, 250, 80, 0, Math.PI)
    ctx.stroke()

  })()
}