
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/Logo.svg'

import {Input} from '../components/ui/Input'
import { Button } from '../components/ui/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>
            SujeitoPizza - Faça seu login
        </title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

        <div className={styles.login}>
          <form>
              <Input 
                placeholder='Digite seu email'
                type='text'
              />

              <Input 
                placeholder='Digite sua senha'
                type='text'
              />

              <Button 
                type="submit"
                loading={true}
              >
                Acessar
              </Button>


          </form>
        </div>

      </div>
    </>
  )
}
