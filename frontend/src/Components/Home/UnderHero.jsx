import React from 'react'

const UnderHero = () => {
    return (
        <div className={"bg-darkGray w-full h-80 relative p-12"}>
            <div className={"flex h-1/2  text-white items-center justify-start text-7xl font-semibold"}>We Guide
            </div>
            <div className={"absolute w-full flex text-white"}>
                <div className={"w-full h-2 bg-white -rotate-12 mt-24"}></div>
                <h1 className={"text-xl"}>And</h1>
                <div className={"w-full h-2 bg-white -rotate-12 mb-24"}></div>
            </div>
            <div className={"flex h-1/2  text-white items-center justify-end text-7xl font-semibold"}>You Decide
            </div>
        </div>
    )
}
export default UnderHero
