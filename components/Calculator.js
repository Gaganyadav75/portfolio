"use client"
import React,{useEffect,useCallback} from 'react'
import '../CSS/calculator.css'
const Calculator = () => {


    
    let handlebuttonclickinput =useCallback((e) =>{
        let inp = document.querySelector(".calculator-screen")
        let val = e.target.innerText
       inp.value = inp.value+val
    })

    let backbtnhandler = useCallback(() =>{
        let inp = document.querySelector(".calculator-screen")
        if (inp.value!="") {
            let val = inp.value.split('');
            val.length = val.length-1;
            inp.value = val.join('')
        }
    })


    let ClearButtonHandler = useCallback((e) => {
    document.querySelector(".calculator-screen").value = ''
    })

    let checker = useCallback((k)=>{
      return (k=='+' || k=='-' ||k=='*' || k=='/'||k=='%'||k >= 0)
    })

    let evaluator = useCallback(()=>{
      let inp = document.querySelector(".calculator-screen")
      let newval = inp.value.split('').map(ele=>ele=='%'?'/100':ele).join('')
      let comp = eval(newval);
      comp!=undefined && (inp.value = comp)
    })

    let handlecalculatorkeydown = useCallback((e) =>{
      let inp = document.querySelector(".calculator-screen")
      let k =e.key;
      let alltr =  checker(k)
      if (alltr) {
        inp.value = inp.value+k
      }else if (k=="Backspace") {
        backbtnhandler()
      }else if (k=="Enter" || k=='=') {
        evaluator()
       }
    })


    useEffect(()=>{
        let allbtn =  document.querySelectorAll(".addinputbtn");

        allbtn.forEach(btn=>{
            btn.addEventListener("click",handlebuttonclickinput)
        })

        window.addEventListener("keydown",handlecalculatorkeydown)


        return ()=>{
            allbtn.forEach(btn=>{
                btn.removeEventListener("click",handlebuttonclickinput)
            })
        window.removeEventListener("keydown",handlecalculatorkeydown)

        }
    },[])




  return (
    <div className="calculator">

    <input type="text" className="calculator-screen" placeholder='0' disabled/>

    <div className="calculator-keys">
      <button
      onClick={ClearButtonHandler}
      >C
      </button>
      <button
      onClick={backbtnhandler}
      >back
      </button>
      <button className='addinputbtn'>%</button>
      <button
      onClick={evaluator}
      >=
      </button>
      <button className='addinputbtn'>7</button>
      <button className='addinputbtn'>8</button>
      <button className='addinputbtn'>9</button>
      <button className='addinputbtn'>/</button>
      <button className='addinputbtn'>4</button>
      <button className='addinputbtn'>5</button>
      <button className='addinputbtn'>6</button>
      <button className='addinputbtn'>*</button>
      <button className='addinputbtn'>1</button>
      <button className='addinputbtn'>2</button>
      <button className='addinputbtn'>3</button>
      <button className='addinputbtn'>-</button>
      <button className='addinputbtn'>.</button>
      <button className='addinputbtn'>0</button>
      <button className='addinputbtn'>.</button>
      <button className='addinputbtn'>+</button>
    </div>
  </div>

  )
}

export default Calculator
