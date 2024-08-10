import storeItems from '../data/items.json'

const Home = () => {
  return (
    <>
    <h1 className='text-5xl mb-10 mt-4'>Home</h1>
      {storeItems.map(item => (
        <div className='p-4'>
          <div key={item.id} className='flex gap-10 pb-2 max-md:flex-col'>
            <img className='w-60 object-cover' src={item.imgUrl} alt="image" />
            <div className='flex flex-col justify-evenly '>
              <h1 className='font-bold'>{item.name}</h1>
              <p>{item.info}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Home