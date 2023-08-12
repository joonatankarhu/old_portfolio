import Link from 'next/link'

const Contact = () => {
  return (
    <div className='lessSmall:text-lg flex flex-col lg:items-start lg:font-semibold flex-wrap gap-2 justify-center w-full lg:text-xl pb-14 pt-3'>
      <Link
        href="mailto:joonatan.karhu@outlook.com"
        className="hover:underline hover:text-black font-semibold"
      >
        <p>joonatan.karhu@outlook.com</p>
      </Link>
      <Link
        href="https://github.com/joonatankarhu"
        target="_blank"
        className="hover:underline hover:text-black font-semibold"
      >
        <h5>GitHub</h5>
      </Link>
      <Link
        href="https://www.linkedin.com/in/joonatankarhu"
        target="_blank"
        className="hover:underline hover:text-black font-semibold"
      >
        <h5>LinkedIn</h5>
      </Link>
    </div>
  )
}

export default Contact
