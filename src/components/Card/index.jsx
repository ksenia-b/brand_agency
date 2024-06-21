export const Card = ({ photo, name, position, email, phone }) => {
  return (
    <div
      className={
        "flex flex-1 flex-col items-center gap-5 rounded-lg bg-white p-5 text-center text-base"
      }
    >
      <img
        src={photo}
        alt={name}
        className={"h-[70px] w-[70px] rounded-full"}
      />
      <p className={"w-[280px] overflow-hidden text-ellipsis text-nowrap"}>
        {name}
      </p>
      <div>
        <p className={"w-[280px] overflow-hidden text-ellipsis text-nowrap"}>
          {position}
        </p>
        <p className={"w-[280px] overflow-hidden text-ellipsis text-nowrap"}>
          {email}
        </p>
        <p className={"w-[280px] overflow-hidden text-ellipsis text-nowrap"}>
          {phone}
        </p>
      </div>
    </div>
  );
};
