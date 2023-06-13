window.$ = window.jQuery = function(selectorOrArray){
    let elements
    const ø = Object.create(null)
    if(typeof selectorOrArray === "string"){
         elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
         elements = selectorOrArray
    }

    // api 可以操作elements
    return {
        
        find(selector){
            let array = []
            for(let i=0; i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this  // this就是api
            return jQuery(array)
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(ø,elements[i],i)
            }
            return this
        },
        parent(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.children) === -1){
                    array.push(...node.children) // 展开操作符
                }
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        },
        siblings(){ // 除了自己的兄弟姐妹
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode.children)=== -1){
                        array.push(...Array.from(node.parentNode.children).filter(n => n!==node))
                }
            })
            return jQuery(array)
        },
        // 闭包，函数访问外部变量
        addClass: function(className){
            for(let i=0; i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this
        },
        oldApi: selectorOrArray.oldApi,
        end(){
            return this.oldApi // 新api
        },
    }
}


