import styles from './burgerButton.module.css';
import { useState } from "react";

interface IBurgerButtonProps {
    clickHandler: () => void;
    hidden: boolean;
}

function BurgerButton({ clickHandler, hidden }: IBurgerButtonProps): JSX.Element {
    const [buttonContents, setButtonContents] = useState((
        <>
            <div className={`${styles.bars}`}/>
            <div className={`${styles.bars}`}/>
            <div className={`${styles.bars}`}/>
        </>
    ));


    const onClick = () => {
        clickHandler();
        if (!hidden) {
            setButtonContents(
                (<>
                    <div
                        key={Math.random()}
                        className={`${styles.bars} ${styles.XBarsAnimationReversed} ${styles.Xbar1AnimationReversed}`}
                    />
                    <div
                        key={Math.random()}
                        className={`${styles.bars} ${styles.XBarsAnimationReversed}`}
                    />
                    <div
                        key={Math.random()}
                        className={`${styles.bars} ${styles.XBarsAnimationReversed}`}
                    />
                </>)
            );
        } else {
            setButtonContents(
                (<>
                    <div
                        key={Math.random()}
                        className={`${styles.bars} ${styles.XBarsAnimation} ${styles.Xbar1Animation}`}
                    />
                    <div
                        key={Math.random()}
                        className={`${styles.bars} ${styles.XBarsAnimation}`}
                    />
                    <div
                        key={Math.random()}
                        className={`${styles.bars} ${styles.XBarsAnimation}`}
                    />
                </>)
            );
        }
    };

    return (

        <button
            onClick={onClick}
            className={styles.burgerButton}>
            {buttonContents}
        </button>
    );
}


export default BurgerButton;
export type { IBurgerButtonProps };