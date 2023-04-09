import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../redux/loading'
import './style.scss'

const Error = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000)
    }, [])
    return (
        <div className='Error'>
            <div className="flex">
                <div className='code'>
                    404
                </div>
                <div className='txt'>
                    This page could not be found.
                </div>
            </div>
        </div>
    )
}

export default Error
