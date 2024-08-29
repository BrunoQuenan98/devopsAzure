// Placeholder to host a component
export const Hours = () => {
    const day = new Date().getDay()

    if(day === 0 || day === 6){
        return <>9 a.m. a 8 p.m</>
    }

    return <>
        10 a.m. a 4 p.m
    </>
}