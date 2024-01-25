function DataDisplay({data}){
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    let newData=data.sort((a,b)=>{
        return b.title.length - a.title.length     //Extra work for best look of UI
    })

    return (
           <div className="cardContainer" >
            {newData.map((ele)=>{
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

                return(
                    <div key={ele.id} style={{border:"1px solid black",margin:"20px",padding:"10px",backgroundColor:randomColor}}>
                        <h1>{ele.title}</h1>
                        <h2>{ele.id}</h2>
                    </div>
                )
            })}
            </div>
        
    )
    
}



export default DataDisplay;