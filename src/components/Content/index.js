import Input from '../Input'
import Text from '../Text'
import styles from './Content.module.css'

export default function Content({content, inptChange}) {
    return (
        Object.values(content).map((item, index) => (
            <div className={ styles.content }>
                <Text top={true} tag="h3">Conteúdo</Text>
                    <>
                    <div>
                        <Input content={true} id={`${index}`} inptChange={e => inptChange(e)} type="text" placeholder="Mais informações" name="contentSub" label="Subtítulo" value={item.subtitle} />
                    </div>
                    <div>
                        <Input content={true} id={`${index}`} inptChange={e => inptChange(e)} type="textarea" placeholder="Mais informações" name="contentData" label="Conteúdo" value={item.subtitle} />
                    </div>
                    </>
            </div>
        ))
    )
}