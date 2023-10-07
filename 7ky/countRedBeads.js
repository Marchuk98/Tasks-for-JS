  function countRedBeads(n) {

    for(let i = 0; i < n; i++) {
        if(n < 2){
            return 0
        }else{
            return 2*(n-1)
        }
    }
  }