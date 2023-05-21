import Text from '../Text'
import styles from './ContatoMain.module.css'

export default function ContatoMain() {
    return (
        <div className={ styles.ContatoMain }>
            <Text main={true} tag="p">Whatsapp: (73) 9 9959-9911</Text>
            <Text main={true} tag="p">Instagram: @o.rafael.bezerra</Text>
        </div>
    )
}