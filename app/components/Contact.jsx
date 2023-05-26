import Link from 'next/link'

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center lg:w-full lg:items-start lg:border-t-2 lg:mt-20 lg:pt-5 lg:justify-center gap-2 mt-10 text-lg my-5 lg:text-gray-700/70 lg:ml-auto pb-5">
      <h4 className="text-3xl lg:text-4xl lg:font-bold font-semibold mb-2 lg:text-black">Get in touch</h4>
      <div className='lessSmall:text-lg almostIpad:text-xl lg:text-lg flex flex-col lg:items-start lg:font-semibold flex-wrap gap-3 items-center justify-center py-3'>
      <Link
        href="mailto:joonatan.karhu@outlook.com"
        className="hover:underline hover:text-black"
      >
        <p>joonatan.karhu@outlook.com</p>
      </Link>
      <Link
        href="https://github.com/joonatankarhu"
        target="_blank"
        className="hover:underline hover:text-black"
      >
        <h5>GitHub</h5>
      </Link>
      <Link
        href="https://github.com/joonatankarhu"
        target="_blank"
        className="hover:underline hover:text-black"
      >
        <h5>LinkedIn</h5>
      </Link>
      </div>
    </div>
  )
}

export default Contact
