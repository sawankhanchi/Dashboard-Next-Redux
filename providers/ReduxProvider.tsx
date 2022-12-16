import React, { useEffect } from "react"
import { Provider } from "react-redux"
import { rootReducer } from "../reducers"
import { configureStore } from '@reduxjs/toolkit'
import { userLogin } from "../actions"
import { useRouter } from 'next/router'

const store = configureStore({ reducer: rootReducer })

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    const dispatch = store.dispatch as any

    const router = useRouter()

    useEffect(() => {
        const email = localStorage.getItem("email")
        if (email) {

            dispatch(userLogin())
        } else {
            router.push("/")
        }

    }, [])

    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    )
}
