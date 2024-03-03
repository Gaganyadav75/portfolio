

let ActiveNav = (e,q) =>{
  // console.log(e)
    let allnav = document.querySelectorAll(q)
    // console.log(allnav)
    allnav.forEach(ele => {
      
           if ( ele.id == e.target){
              ele.classList.add("activenav")
           }else{
            ele.classList.remove("activenav")
           }
    });
  }


export default ActiveNav