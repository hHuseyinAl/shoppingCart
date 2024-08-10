import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

const Store = () => {
    return (
        <>
            <h1 className='text-5xl mb-10 mt-4'>Store</h1>
            <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-2'>
                {storeItems.map(item => (
                    <div key={item.id}>
                        <StoreItem {...item}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Store