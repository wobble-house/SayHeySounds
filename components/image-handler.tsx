'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function ImageHandler(props){
    const { src, fallbackSrc, alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <Image
            {...rest}
            src={imgSrc}
            alt={alt}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            style={{
                objectFit: "cover"
            }}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

