import nophoto from "../../assets/i/nophoto.jpg";

const Card = ({image=nophoto, name, position, email, phone}) => {
    return (
        <div className={"w-331px p-4 flex flex-col gap-7 justify-center items-center text-center"}>
            <div >
                <img className={"rounded-full"} src={image}/>
            </div>
            <div>{name}</div>
            <div className="text-center">
                <p>{position}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    )
}


export default Card;