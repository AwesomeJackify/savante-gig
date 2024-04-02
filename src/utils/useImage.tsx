import { useEffect, useState } from 'react'

const useImage = (filePath: string) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                console.log(filePath)
                const response = await import(filePath) // change relative path to suit your needs
                setImage(response.default)
            } catch (err) {
                setError(err as unknown as null) // Explicitly type the setError state setter function as unknown and cast err to null
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [filePath])

    return {
        loading,
        error,
        image,
    }
}

export default useImage