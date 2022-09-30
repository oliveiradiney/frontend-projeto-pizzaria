import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head"

import styles from './styles.module.scss';

import { Header } from "../../components/Header"
import { FiRefreshCcw } from 'react-icons/fi'
import { setupAPIClient } from "../../services/api";

export default function Dashboard(){
    return(
        <>
            <Head>
                <title>Painel - Sujeito Pizzaria</title>
            </Head>
            <div>
                <Header />

                <main className={styles.container}>

                    <div className={styles.containerHeader}>
                        <h1>Últimos pedidos</h1>
                        <button>
                            <FiRefreshCcw color="#3fffa3" />
                        </button>
                    </div>

                    <article className={styles.listOrder}>

                        <section className={styles.orderItem}>
                            <button>
                                <div className={styles.tag}></div>
                                <span>Mesa 30</span>
                            </button>
                        </section>


                    </article>

                </main>

            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => { 
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/orders')
    console.log(response.data)

    return{
        props:{}
    }
})