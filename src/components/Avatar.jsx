/* eslint-disable react/prop-types */
export function Avatar(props){
    return(
        <img 
        src={props.src} 
        className="w-full h-20 object-cover"
        alt="" 
        width={300}
    />)
}

export function AvatarFeed(props){
    return(
        <img 
        src={props.src} 
        width={56} alt="" 
        className="box-content w-12 h-12 rounded-lg border-gray-800 border-4 outline outline-green-800"
    />
    )
}

export function AvatarComment(props){
    return(
        <img 
        src={props.src}
        alt="" 
        className="w-12 h-12 rounded-lg"
        />
    )
}