import { useContext } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { FiLogOut} from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';
import Image from 'next/image';


export function Header(){

    const {signOut} = useContext(AuthContext)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/dashboard'>  
                    <Image src='/Logo.svg' width={190} height={60} alt='Logo sujeito pizza'/>
                </Link>
                
                <nav className={styles.menuNav}>
                    <Link href='/category'>
                        <a>Categoria</a>
                    </Link>

                    <Link href='/product'>
                        <a>Cardápio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#FFF' size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}