import React from 'react';
import styles from './styles.module.css';
import {loremIpsum as LoremIpsum} from "../../tools/tools";

interface PaperTopperProps {
    showNote: boolean;
    backgroundColor?: string;
    height?: number;
}

/**
 * PaperTopper component
 * @description - this new component will look like a card laying on top of the blue background
 * @constructor
 */
const PaperTopper = (props: PaperTopperProps) => {

    let imageIndex: number = 0;

    const imageSources: string [] = [
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/san-antonio-texas-cityscape-black-and-white-gregory-ballos.jpg",
        "https://images.fineartamerica.com/images-medium-large-5/mission-san-jose-black-and-white-san-antonio-texas-silvio-ligutti.jpg",
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/san-antonio-texas-downtown-city-skyline-on-the-water-black-and-white-gregory-ballos.jpg",
    ]

    //change image should change the image every
    const changeImage = () => {
        imageIndex = (imageIndex + 1) % imageSources.length;
        cardImage?.setAttribute('src', imageSources[imageIndex]);
    }

    const cardImage = document.querySelector(`.${styles.cardImage}`);
    console.log(cardImage);
    cardImage?.addEventListener('animationiteration', () => {
        console.log('animation ended');
        changeImage();
    });


    return (
        <div className={styles.cardContainer} style={{backgroundColor: props.backgroundColor}}>
            {/* create a component that takes random images from some source online and fades them in and out */}

            <div className={styles.cardImageContainer}>
                <img src={imageSources[imageIndex]}
                     className={styles.cardImage} alt={"randomImage"}/>
                <div className={styles.cardImageCover}></div>
                <h1 className={styles.cardTitle}>ACM San Antonio</h1>
            </div>


            {props.showNote ?
                <div className={styles.noteContainer}>
                    <p className={styles.noteText}>{LoremIpsum}</p>
                </div> : null}
        </div>
    );
}

export default PaperTopper;
