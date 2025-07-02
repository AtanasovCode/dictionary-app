import LoadingIcon from "../../assets/loading-icon.svg";

const Loading = () => {
    return (
        <img 
            src={LoadingIcon}
            alt="Loading icon with spinning animation"
            className="w-8 animate-spin duration-300"
        />
    );
}

export default Loading;