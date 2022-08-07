
import styles from './about.module.css';

export function About() {
    return (
        <div className={styles.AboutMainDiv}>

            <div className={styles.AboutH1}>
                <h1>About us</h1>
            </div>
            <div className={styles.Paragraph}>
                <p className={styles.BorderParagraph}>We from Bikeshop Ltd. decided to make an easy to use platform for bike lovers.
                    Here you can simply trade your old bike and parts. Our goal is to make it
                    as easy as possible for buyers and sellers to get connected.
                    If you find something wrong don't hesitate to contact us on info@bikeshop.com.
                </p>
            </div>

        </div>)
}




