import {Provider} from 'react-redux'
import {useStore} from '../store'
import '/styles/reset.scss'
import '/styles/globals.scss'

export default function Main({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}