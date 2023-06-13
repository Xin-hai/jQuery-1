//  jQuery('.test') // 不返回元素们，返回api对象
//     .addClass('red')  // this就是api
//     .addClass('blue') 
//     .addClass('green') // 链式操作

const x = jQuery('.test>.child1')

x.siblings().print()

    