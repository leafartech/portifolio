import styles from './Input.module.css'

export default function Input({ type, value, label, name, inptChange, placeholder, content, id }) {
    if (type === 'textarea') {
        if (content) {
            return (
            <div className={ styles.formControl }>
                <label>{label}</label>
                <textarea id={id} onChange={e => inptChange(e)} rows="4" name={ name } value={value} placeholder={placeholder}></textarea>
            </div>
            )
        }
        return (
            <div className={ styles.formControl }>
                <label>{label}</label>
                <textarea onChange={e => inptChange(e)} rows="4" name={ name } value={value} placeholder={placeholder}></textarea>
            </div>
        )
    }
    if (content) {
        return (
            <div className={ styles.formControl }>
            <label htmlFor={label}>{label}</label>
            <input onChange={e => inptChange(e)} placeholder={placeholder} type={ type } name={ name } value={ value } id={ id } />
        </div>
        )
    }
    return (
        <div className={ styles.formControl }>
            <label htmlFor={label}>{label}</label>
            <input onChange={e => inptChange(e)} placeholder={placeholder} type={ type } name={ name } value={ value } id={ label } />
        </div>
    )
}