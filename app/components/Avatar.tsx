import Image from "next/image";

interface AvatarProps{
    src?: string | null | undefined
}


const Avatar: React.FC<AvatarProps> = ({src}) => {
    if (src){
        <Image src={src} alt="Avatar" className="rounded-full"
        height="30" width="30" />
    }
    return ( <div></div> );
}
 
export default Avatar;