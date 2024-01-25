let ans = 0
let v = 0
let t = ""
let s,sb,m,d,e,n = false

function c(){
    ans,v = 0
    t = ""
    s,sb,m,d,e,n = false
    document.getElementById("digit").innerText = 0
}

function sum(){
    if(e==true){
        if(n==true){
            n = false
            v = ans
        }
        e = false
        document.getElementById("digit").innerText = v
    }else{
        v = ans
        document.getElementById("digit").innerText = v
        ans = 0
    }
    t = ""
    s = true
}

function sub(){
    if(e==true){
        if(n==true){
            n = false
            v = ans
        }
        e = false
        document.getElementById("digit").innerText = v
    }else{
        v = ans
        document.getElementById("digit").innerText = v
        ans = 0
    }
    t = ""
    sb = true
}

function mul(){
    if(e==true){
        if(n==true){
            n = false
            v = ans
        }
        e = false
        document.getElementById("digit").innerText = v
    }else{
        v = ans
        document.getElementById("digit").innerText = v
        ans = 0
    }
    t = ""
    m = true
}

function div(){
    if(e==true){
        if(n==true){
            n = false
            v = ans
        }
        e = false
        document.getElementById("digit").innerText = v
    }else{
        v = ans
        document.getElementById("digit").innerText = v
        ans = 0
    }
    t = "" 
    d = true
}

function equal(){
    if(s==true){
        v += ans
        s = false
    }else if(sb==true){
        v -= ans
        sb = false
    }else if(m==true){
        v *= ans
        m = false
    }else if(d==true){
        v /= ans
        d = false
    }else{
        v = ans
    }
    t = ""
    document.getElementById("digit").innerText = v
    ans = 0
    e = true
    n = false
}

function digit(x){
    n = true
    t += x
    ans = +t
    document.getElementById("digit").innerText = t
}



