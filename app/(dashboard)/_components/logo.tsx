import Image from 'next/image';
const Logo = () => {
    return ( 
        <Image 
            height={530}
            width={530}
            alt="logo"
            src={"/images/logo/logo.svg"}
        />
     );
}
 
export default Logo;