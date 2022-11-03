import React from 'react'
import Category from '../components/Category'
import HeaderBar from '../components/HeaderBar'

function MainCar() {
    return (
        <div>
            <HeaderBar isEdit={false} />
            <Category />
        </div>
    )
}

export default MainCar
