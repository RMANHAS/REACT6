import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export default function Counter() {
    let count=useSelector(state=>state.counter.count)
    let name=useSelector(state=>state.counter.name)
    let cart=useSelector(state=>state.coin.cart)
    let dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        counter {count}
        <button onClick={()=>dispatch(decrement())}>-</button><br />

        <button onClick={()=>dispatch(incrementByAmount(5))}>increment by 5</button>
    {name} <br />
    {cart}
    </div>
  )
}

