import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="container">
            <ul>
                <li> <Link href="/">Home page</Link>  </li>
                <li> <Link href="/about">About page</Link>  </li>
                <li> <Link href="/contact">contact page</Link>  </li>
                <li> <Link href="/products">Products</Link>  </li>
                <li> <Link href="/pro">Pro</Link>  </li>
            </ul>
            <header className='fw-bolder text-center h4 text-success'>NEXT JS APP </header>
            
        </div>
    )
}
export default Navbar;