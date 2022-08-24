const pixel = document.getElementById('numPx')
const rem = document.getElementById('numRem')
const button = document.getElementById('button')
const resultText = document.getElementById('resultText')

button.addEventListener('click', callToAction)

function callToAction(){
    let values = readData()

    if (validator(values)){
        convert()
    }
}
function readData(){
    let values = {}

    pxValue = pixel.value
    remValue = rem.value

    return values
}
function validator(values){
    let msg = ''

    if(pxValue =='' || pxValue<=0){
        msg += 'Informe os Pixels. \n'
    }else if (remValue ==''){
        msg += 'O padrão de Rem será aplicado. \n'
        remValue = 16
        convert()
    }
    if (msg != ''){
        alert(msg)
        return false
    }
    return true 
}
function convert(){
    let conversion = pxValue/remValue
    let remConverted = conversion.value
    resultText.innerHTML=`<abr title="Clique para copiar">${pxValue}px = ${conversion.toFixed(2)}rem</abr>`

    if(remConverted !=''){
        resultText.addEventListener('click', copyResultTrue)         
    } 
    function copyResultTrue(){
        navigator.clipboard.writeText(copyRem())
        // alert('Copiado!')
    } 
    function copyRem(){
        let Rem = `${conversion.toFixed(2)}rem`
        return Rem
    }
}