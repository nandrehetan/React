

export default function Contacts (props){
    return(
        <>
            <div className="cnt">

                <h3>Name:{props.name}</h3>
                <h4>Contact No:{props.contact_no}</h4>
                <h4>Email:{props.email}</h4>
            </div>

        
        </>
    )
}