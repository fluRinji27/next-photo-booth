import Head from 'next/head'
import dynamic from "next/dynamic";
import LazyLoad from 'react-lazyload'

import Advantages from "./components/Advantages/Advantages";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";

const Catalog = dynamic(() => import("./components/Catalog/Catalog"));
const Faq = dynamic(() => import('/pages/components/Faq/Faq'))
const News = dynamic(() => import("/pages/components/News/News"))
const Contact = dynamic(() => import("./components/Contact/Contact"))
const FooterMap = dynamic(() => import("./components/Map/FooterMap"));

function App({initialProdData, initialNewsData}) {

    return (
        <div className='wrapper App'>
            <Head>
                <title>Денисов тестовое задание</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/robotoslab/v13/BngMUXZYTXPIvIBgJJSb6ufJ5qW54A.woff2"
                      as="font/woff2"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/robotoslab/v13/BngMUXZYTXPIvIBgJJSb6ufJ5qW54A.woff2"
                      as="font/woff2"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/robotoslab/v13/BngMUXZYTXPIvIBgJJSb6ufJ5qW54A.woff2"
                      as="font/woff2"/>

                <link rel="preload"
                      href="https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lqDY.woff2"
                      as="font/woff2"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwkxduz8A.woff2"
                      as="font/woff2"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwkxduz8A.woff2"
                      as="font/woff2"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2"
                      as="font/woff2"/>

                <link rel="preload"
                      href="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu5mxKOzY.woff2"
                      as="font/woff2"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2"
                      as="font/woff2"/>
                <link rel="preload"
                      href="https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2"
                      as="font/woff2"/>
                <link rel="preload" as="image" href="/img/catalog/mqdefault.jpg"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Video id='qHmB8mZdWBA'/>
            <Advantages/>

            <Catalog initialData={initialProdData}/>

            <LazyLoad height={200}>
                <Faq/>
            </LazyLoad>

            <LazyLoad height={200}>
                <News initialNewsData={initialNewsData}/>
            </LazyLoad>

            <LazyLoad once>
                <Contact/>
            </LazyLoad>

            <LazyLoad once>
                <FooterMap/>
            </LazyLoad>

        </div>
    )
}

export async function getStaticProps() {
    // mok data generator
    const genProdDataArr = count => {
        const result = []
        for (let i = 0; i < count; i++) {
            const options = []
            let counter = 0;
            for (let x = 0; x < count; x++) {
                options.push({
                    id: x + 1,
                    image: 'room_lq',
                    title: `Разработка макета рамки #${x + 1}`,
                    price: 17000 + counter,
                    isChecked: false,
                })
                counter += 100
            }
            result.push({
                id: i + 1,
                title: ' Фотобудка с ширмой',
                subtitle: '2м x 1.5м x 2 м',
                images: ['room', 'room', 'room', 'room', 'room'],
                options,
                initialPrice: 17000,
                price: 17000, // rub
                totalTime: 1 // hour
            })
        }
        return result
    }
    const genNewsDataArr = count => {
        const result = []
        for (let i = 0; i < count; i++) {
            result.push({
                id: i + 1,
                category: 'Фотобудка',
                date: JSON.stringify(new Date()),
                images: ['man-min', 'photo-min', 'man-min', 'photo-min', 'photo-min'],
                title: ' Фотобудка с ширмой',
                shortText: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            })
        }
        return result
    }

    const initialProdData = genProdDataArr(20)
    const initialNewsData = genNewsDataArr(20)

    return {
        props: {initialProdData, initialNewsData}
    }
}

export default App