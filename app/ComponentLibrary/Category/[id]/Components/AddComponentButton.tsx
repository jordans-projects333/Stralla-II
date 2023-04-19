'use client'

type Props = {
    setAddingComponent: any
}

const AddComponentButton = ({setAddingComponent}: Props) => {
    const handleClick = () => {
        setAddingComponent(true)
    }
    return (
        <button onClick={() => handleClick()} className="text-2xl">+</button>
    )
}

export default AddComponentButton