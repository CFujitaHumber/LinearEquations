
import styles from './Slider.module.css'

function Slider({label, description, value, min, max, step, onChange}){

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <p className={styles.labelText}>{label}</p>
                <p className={styles.labelValue}>{value}</p>
            </div>
            <input type={"range"} min={min} max={max || 100} step={ step || 1} className={styles.slider} onChange={(e)=> onChange(e.target.value)}></input>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Slider