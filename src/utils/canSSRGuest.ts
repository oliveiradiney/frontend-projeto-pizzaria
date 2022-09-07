import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//funcao para pagina que só pode ser acessadas por visitantes
export function canSSRGuest<P>(fn: GetServerSideProps<P>){
    return async (ctx:  GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const coockies = parseCookies(ctx);

        //ser o cara tentar acessar a pagina porem tendo já um login salvo redirecionamos
        if(coockies['@nextauth.token']){
            return {
                redirect:{
                    destination:'/dashboard',
                    permanent: false,
                }
            }
        }

        return await fn(ctx);
    }
}


