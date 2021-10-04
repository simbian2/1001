import {user_url} from '../store/Allurl.jsx'

export const join_success = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/join_success`,options) //restful api 
    console.log(response)

}

export const income_change = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/income_change`,options) //restful api 

}
export const outcome_change = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/outcome_change`,options) //restful api 

}

export const order = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/order`,options) //restful api 

}

export const transaction_seller = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/transaction_seller`,options) //restful api 

}

export const transaction_buyer = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/transaction_buyer`,options) //restful api 

}


export const transaction_active = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/transaction_active`,options) //restful api 

}

export const transaction_coin = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/transaction_coin`,options) //restful api 

}