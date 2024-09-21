import { useState } from "react";
import "./profilePicture.css";

interface IProfilePicture {
  id: string;
  image: string;
  className?: string;
}

export const ProfilePicture = ({ id, image, className }: IProfilePicture) => {
  const [errorImg, setErrorImg] = useState<boolean>(false);
  
  return (
    <>
      {!errorImg && image ? (
        <img
          src={image}
          alt={id}
          className={`profile_picture_atomic ${className}`}
          onError={() => setErrorImg(true)}
        />
      ) : (
        <div className={`profile_picture_atomic ${className}`} />
      )}
    </>
  );
};
