import store from '../store'

// Router chỉ cho phép vào khi đã đăng nhập
const ifAuthenticated = (to, from, next) => {

    if (store.getters.isLogin == true){

       next()

    } else {

       next({ 
            name: 'login',
            query: {
                ridirect: to.name
            }
        })

    }
}


// Router chỉ cho phép vào khi chưa đăng nhập (Login, Register)

const notAuthenticated = (to, from, next) => {
    console.log('store.getters.isLogin = ',store.getters.isLogin)
    console.log('to = ', to);
    console.log('to = ', store)


    // if (store.getters.isLogin == false){

    //    next()

    // } else {

    //    next({ 
    //         name: 'home-page',
    //         query: {
    //             ridirect: to.name
    //         }
    //    })

    // }
    if (store.getters.isLogin == false){

        next();
 
     } else {
 
        next('/')
 
     }
}

export {
    ifAuthenticated,
    notAuthenticated
}