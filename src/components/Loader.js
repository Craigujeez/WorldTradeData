import { Puff } from "react-loader-spinner";

const ContentLoader = () => {
    return ( 
        <div className="flex justify-center w-full py-20">
            <Puff
                height="80"
                width="80"
                radius="9"
                color="#FFA21D"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
     );
}
 
export default ContentLoader;