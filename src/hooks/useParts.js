import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState()
    useEffect(() => {
        fetch(`https://mysterious-forest-28554.herokuapp.com/parts`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return [parts]
}
export default useParts;