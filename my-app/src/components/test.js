import axios from "axios";
import {useEffect, useState} from "react";

const Test= ()=>{
    const [data,setData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/workshop');
            console.log(result.data)
            setData([...data,...result.data.data])
        }
        fetchData();

    }, []);

    const MapData=()=>{
        return (
            <div >
                {data.map((item)=>{
                    return (
                        <div key={item.idWorkshop}>
                            <p>idWorkshop {item.idWorkshop}</p>
                            <p>nameWorkshop {item.nameWorkshop}</p>
                            <p>descriptionWorkshop {item.descriptionWorkshop}</p>
                            <p>timeWorkshop {item.timeWorkshop}</p>
                            <p>addressWorkshop {item.addressWorkshop}</p>
                            <p>imageWorkshop {item.imageWorkshop}</p>
                            <p>nameCompanyWorkshop {item.nameCompanyWorkshop}</p>
                            <p>nameCategoryWorkshop {item.nameCategoryWorkshop}</p>
                        </div>
                    )


                })}

            </div>
        )

    }

    return(
        <>
        <h1>hello</h1>
            <MapData/>
        </>
    )
}


export default Test;