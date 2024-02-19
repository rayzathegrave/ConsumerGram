import React, {useEffect, useState} from 'react';



const Base64Image = ({ base64String }) => {
    console.log(base64String);
    // Decode the Base64 string
    // const decodedImage = atob(base64String);
    // const [decodedImage, setDecodedImage] = useState(null);
    // const decodedImage = atob(base64String.fileContent);
    // const imageUrl = `data:image/png;base64,${decodedImage}`;
    const splitImage = base64String.includes('data:image/png;base64,${decodedImage}')
        ? base64String.split('data:image/png;base64,${decodedImage},')[1]
        : base64String;

    const decodedImage = atob(splitImage);

    const imageUrl = `data:image/png;base64,${decodedImage}`;



    // useEffect(() => {
    //     const blob = new Blob([base64String], { type: 'image/png' });
    //     const dataUrl = URL.createObjectURL(blob);
    //     // setDecodedImage(dataUrl);
    // }, []);

    // Create a data URL



    return (
        <div>
            {/* Render the image */}
            <img src={decodedImage} alt={base64String.caption} />
            {/*<img src={decodedImage} alt="Base64 Image" />*/}
        </div>
    );
};

export default Base64Image;