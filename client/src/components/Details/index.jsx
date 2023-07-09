
import { Image } from 'antd';
import { useState } from 'react';

import { ShoppingCartOutlined } from "@ant-design/icons"

import styles from "./details.module.css"

const Details = ({data}) => {
    
    const [visible, setVisible] = useState(false);

    console.log("data:",data);

    return (
        <div>
            <h2>Details </h2>
            <div className={styles.contents}>
                <div className={styles.image}>
                    <Image
                        preview={{
                            visible: false,
                        }}
                        width={300}
                        src={data.theProduct.img}
                        onClick={() => setVisible(true)}
                    />
                    <div
                        style={{
                            display: 'none',
                        }}
                    >
                        <Image.PreviewGroup
                            preview={{
                                visible,
                                onVisibleChange: (vis) => setVisible(vis),
                            }}
                        >
                            <Image src={data.theProduct.img} />
                            <Image src={data.theProduct.img} />
                            <Image src={data.theProduct.img} />
                        </Image.PreviewGroup>
                    </div>
                </div>
                <div className={styles.details}>
                    <h3 className={styles.details_title}>Computer</h3>
                    <p className={styles.details_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, autem?</p>
                    <div className={styles.details_action}>
                        <button>
                            Add to Basket
                            <ShoppingCartOutlined className={styles.icon} />
                        </button>
                        <div className={styles.price}>
                            <span>
                                12.546,99
                            </span>
                            <svg className={styles.lirasicon} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lira-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M371.994 256h-48.019C317.64 256 312 260.912 312 267.246 312 368 230.179 416 144 416V256.781l134.603-29.912A12 12 0 0 0 288 215.155v-40.976c0-7.677-7.109-13.38-14.603-11.714L144 191.219V160.78l134.603-29.912A12 12 0 0 0 288 119.154V78.179c0-7.677-7.109-13.38-14.603-11.714L144 95.219V44c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v68.997L9.397 125.131A12 12 0 0 0 0 136.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 178.558v30.439L9.397 221.131A12 12 0 0 0 0 232.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 274.558V468c0 6.627 5.373 12 12 12h79.583c134.091 0 223.255-77.834 228.408-211.592.261-6.782-5.211-12.408-11.997-12.408z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;