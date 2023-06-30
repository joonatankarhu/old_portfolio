import Image from 'next/image'


const PicOfMe = () => {
  return (
    <div className="lg:hidden w-full flex items-center justify-center mt-3">
      <div className="w-[35%] extraSmall:max-w-[80px] small:max-w-[80px]">
        <Image
          src="/joonatan_karhu.jpg"
          width={250}
          height={250}
          className='rounded-full'
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default PicOfMe