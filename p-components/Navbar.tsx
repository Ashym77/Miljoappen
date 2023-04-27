
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


export const Navbar = () => {


    return (


        <div>
            '

            <nav className="">


                <ul>

                    <li>

                        <Link href={'/'}>

                            <HomeOutlinedIcon />

                        </Link>

                    </li>



                    <li>

                        <Link href={'/Search'} >
                            <SearchIcon />
                        </Link>

                    </li>




                </ul>



                <li>




                </li>






            </nav>














            '
        </div>

    )

}